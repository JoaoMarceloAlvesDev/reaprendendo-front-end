import './Home.css'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <div className='container'>
        <div className='usuario-input-container'>
          <p>Nome do usuario (Sem nome meme)</p>
          <input className='usuario-input' type="text" />
        </div>
        <Link to="/jogo" className='btn'>Iniciar perguntas</Link>
      </div>
    </>
  )
}

export default Home
