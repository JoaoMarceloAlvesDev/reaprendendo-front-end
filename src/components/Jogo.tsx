import './Jogo.css'
import { Comparador } from './Comparador'

function Home() {

  const texto = {
    txt1: 'Você é rico, mas tudo que você comer ter gosto de coco.',
    txt2: 'Você consegue achar a pessoa da sua vida, terá uma vida maravilhosa com ela, porém você nunca morrerá e nunca mais vai esquercer ela.'
  }

  const valores = {
    v1: 154,
    v2: 410
  }

  return (
    <>
      <div className='container'>
        <div className="container-jogo">

          <div className="cards-container">
            <button className="card btn" id='card1'>{texto.txt1}</button>
            <button className="card btn" id='card2'>{texto.txt2}</button>
          </div>
          <Comparador valor1={valores.v1} valor2={valores.v2} />
        </div>
      </div>
    </>
  )
}

export default Home
