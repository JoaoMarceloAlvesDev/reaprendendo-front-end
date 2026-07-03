// src/components/Jogo.tsx
import './Jogo.css'
import { Comparador } from './Comparador'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { socket, API_URL } from '../services/socket'


interface Escolha {
  id: string
  opcaoA: string
  opcaoB: string
  votosA: number
  votosB: number
}

function Jogo() {
  const location = useLocation()
  

  const nome = location.state?.jogador?.nome || "Jogador"

  const [escolhas, setEscolhas] = useState<Escolha[]>([])


  const [indice, setIndice] = useState(0) 


  const [valor1, setValor1] = useState(0)
  const [valor2, setValor2] = useState(0)
  const [cardOneClick, setCardOneClick] = useState(true)

  
  useEffect(() => {
    async function carregarEscolhas() {
      try {
        
        const res = await fetch(`${API_URL}/escolhas`)
        const dados = await res.json()
        setEscolhas(dados)
      } catch (error) {
        console.error("Erro ao buscar dados do SQL:", error)
      }
    }

    carregarEscolhas()

    
    socket.on('voto_updated', (escolhaAtualizada: Escolha) => {
      setEscolhas(listaAntiga => 
        listaAntiga.map(item => item.id === escolhaAtualizada.id ? escolhaAtualizada : item)
      )

      
      setEscolhas(lista => {
        const perguntaAtual = lista[indice]
        if (perguntaAtual && perguntaAtual.id === escolhaAtualizada.id && !cardOneClick) {
          setValor1(escolhaAtualizada.votosA)
          setValor2(escolhaAtualizada.votosB)
        }
        return lista
      })
    })

    return () => {
      socket.off('voto_updated')
    }
  }, [indice, cardOneClick])

  const escolhaAtual = escolhas[indice]

 
  async function cardClick(card: number) {
    if (!cardOneClick || !escolhaAtual) return

    const voto = card === 1 ? 'A' : 'B'

    try {
     
      const res = await fetch(`${API_URL}/adicionar-voto/${escolhaAtual.id}/${voto}`, {
        method: 'POST'
      })
      const escolhaAtualizada: Escolha = await res.json()

      
      setValor1(escolhaAtualizada.votosA)
      setValor2(escolhaAtualizada.votosB)
      setCardOneClick(false)
    } catch (error) {
      console.error("Erro ao registrar voto:", error)
    }
  }

  
  function proximo() {
    if (indice + 1 < escolhas.length) {
      setIndice(indice + 1)
      setValor1(0)
      setValor2(0)
      setCardOneClick(true)
    } else {
      alert("Você respondeu todas as perguntas disponíveis no banco!")
    }
  }

  
  if (escolhas.length === 0) {
    return (
      <div className='container'>
        <div className="container-jogo">
          <p style={{ textAlign: 'center', color: '#fff' }}>Carregando perguntas do MySQL...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='container'>
        <div className="container-jogo">
          <div className="container-cabecalho">
            <Link to="/" style={{ textDecoration: "none", color: "rgb(40, 126, 255)" }}>&lt;- Logout</Link>
            <p style={{ marginTop: 0 }}>{nome}</p>
          </div>
          <div className="cards-container">
            <button className="card btn" id='card1' onClick={() => cardClick(1)}>
              {escolhaAtual.opcaoA}
            </button>
            <button className="card btn" id='card2' onClick={() => cardClick(2)}>
              {escolhaAtual.opcaoB}
            </button>
          </div>
          <Comparador valor1={valor1} valor2={valor2} />
          <button className='btn' style={{ marginTop: "20px", width: "100%" }} onClick={proximo}>
            Próximo
          </button>
        </div>
      </div>
    </>
  )
}

export default Jogo