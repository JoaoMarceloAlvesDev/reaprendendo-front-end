// src/components/Jogo.tsx
import './Jogo.css'
import { Comparador } from './Comparador'
<<<<<<< HEAD
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
=======
import { useState } from 'react'
import { Link } from 'react-router-dom'
>>>>>>> 053ee61558e86e7d5113bb062ead275e8eca0225

function Jogo() {
  const location = useLocation()
  

<<<<<<< HEAD
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
=======
  const texto = [
    'Você é rico, mas tudo que você comer tem gosto de coco.',
    'Você consegue achar a pessoa da sua vida, terá uma vida maravilhosa com ela, porém você nunca morrerá e nunca mais vai esquercer ela.',
    'opcao 3',
    'opcao 4',
    'opcao 5',
    'opcao 6',
    'opcao 7',
    'opcao 8',
    'opcao 9',
    'opcao 10',
  ]

  const valoresReal = [
    154,
    10,
    19,
    53,
    634,
    674,
    85,
    13,
    683,
    97,
  ]

  const nome = "Nome Aqui"
  const [valor1, setValor1] = useState(0)
  const [valor2, setValor2] = useState(0)
  const [cardOneClick, setCardOneClick] = useState(true);
  const [txt1, setTxt1] = useState(0)
  const [txt2, setTxt2] = useState(1)
  const [v1, setV1] = useState(0)
  const [v2, setV2] = useState(1)

  function cardClick() {
    if (!cardOneClick) return;

    setValor1(valoresReal[v1])
    setValor2(valoresReal[v2])
>>>>>>> 053ee61558e86e7d5113bb062ead275e8eca0225

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

  function proximo() {
    setValor1(0)
    setValor2(0)

    setTxt1(txt1 + 2)
    setTxt2(txt2 + 2)
    setV1(v1 + 2)
    setV2(v2 + 2)

    setCardOneClick(true)
  }

  return (
    <>
      <div className='container'>
        <div className="container-jogo">
          <div className="container-cabecalho">
<<<<<<< HEAD
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
=======
            <Link to="/" style={{textDecoration:"none", color:"rgb(40, 126, 255)"}}>&lt;- Logout</Link>
            <p style={{marginTop:0}}>{nome}</p>
          </div>
          <div className="cards-container">
            <button className="card btn" id='card1' onClick={() => cardClick()}>{texto[txt1]}</button>
            <button className="card btn" id='card2' onClick={() => cardClick()}>{texto[txt2]}</button>
          </div>
          <Comparador valor1={valor1} valor2={valor2} />
          <button className='btn' style={{ marginTop: "20px", width: "100%" }} onClick={proximo}>Próximo</button>
>>>>>>> 053ee61558e86e7d5113bb062ead275e8eca0225
        </div>
      </div>
    </>
  )
}

export default Jogo