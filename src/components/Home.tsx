// src/components/Home.tsx
import './Home.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../services/socket'

function Home() {
  const [nomeInput, setNomeInput] = useState('')
  const [carregando, setCarregando] = useState(false)
  const navigate = useNavigate()

  async function iniciarJogo() {
    if (!nomeInput.trim()) {
      alert('Digita um nome aí')
      return
    }

    setCarregando(true)
    try {
      // 1. Salva o jogador direto no MySQL
      const res = await fetch(`${API_URL}/entrar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: nomeInput })
      })
      const jogadorDoBanco = await res.json()

      // 2. Manda pra tela do Jogo passando o jogador que veio do banco!
      navigate('/jogo', { state: { jogador: jogadorDoBanco } })
    } catch (error) {
      console.error("Erro ao entrar:", error)
      alert("Erro ao conectar com o banco de dados!")
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className='container'>
      <div className='usuario-input-container'>
        <p>Nome do usuario (Sem nome meme)</p>
        <input 
          className='usuario-input' 
          type="text" 
          value={nomeInput}
          onChange={(e) => setNomeInput(e.target.value)}
          placeholder="Digite seu nome..."
        />
      </div>
      <button onClick={iniciarJogo} className='btn' disabled={carregando}>
        {carregando ? 'Conectando ao SQL...' : 'Iniciar perguntas'}
      </button>
    </div>
  )
}

export default Home