import './Jogo.css'
import { Comparador } from './Comparador'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Jogo() {

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

    setCardOneClick(false)
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
            <Link to="/" style={{textDecoration:"none", color:"rgb(40, 126, 255)"}}>&lt;- Logout</Link>
            <p style={{marginTop:0}}>{nome}</p>
          </div>
          <div className="cards-container">
            <button className="card btn" id='card1' onClick={() => cardClick()}>{texto[txt1]}</button>
            <button className="card btn" id='card2' onClick={() => cardClick()}>{texto[txt2]}</button>
          </div>
          <Comparador valor1={valor1} valor2={valor2} />
          <button className='btn' style={{ marginTop: "20px", width: "100%" }} onClick={proximo}>Próximo</button>
        </div>
      </div>
    </>
  )
}

export default Jogo
