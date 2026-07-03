import './Jogo.css'
import { Comparador } from './Comparador'
import { useState } from 'react'

function Jogo() {

  const texto = {
    txt1: 'Você é rico, mas tudo que você comer tem gosto de coco.',
    txt2: 'Você consegue achar a pessoa da sua vida, terá uma vida maravilhosa com ela, porém você nunca morrerá e nunca mais vai esquercer ela.',
    txt3: 'opcao 3',
    txt4: 'opcao 4',
    txt5: 'opcao 5',
    txt6: 'opcao 6',
    txt7: 'opcao 7',
    txt8: 'opcao 8',
    txt9: 'opcao 9',
    txt10: 'opcao 10',
  }

  const valoresReal = {
    v1: 154,
    v2: 10,
    v3: 19,
    v4: 53,
    v5: 634,
    v6: 674,
    v7: 85,
    v8: 13,
    v9: 683,
    v10: 97,
  }

  const nome = "Nome Aqui"
  const [pontos, setPontos] = useState(0)
  const [valor1, setValor1] = useState(0)
  const [valor2, setValor2] = useState(0)
  const [cardOneClick, setCardOneClick] = useState(true);

  function cardClick(card: number) {
    if (!cardOneClick) return;

    setValor1(valoresReal.v1)
    setValor2(valoresReal.v2)

    if (valoresReal.v1 > valoresReal.v2 && card == 1) {
      setPontos(pontos + 1)
    }
    if (valoresReal.v1 < valoresReal.v2 && card == 2) {
      setPontos(pontos + 1)
    }

    setCardOneClick(false)
  }

  return (
    <>
      <div className='container'>
        <div className="container-jogo">
          <div className="container-cabecalho">
          <p>{nome}</p>
          <p>{pontos}</p>
          </div>
          <div className="cards-container">
            <button className="card btn" id='card1' onClick={() => cardClick(1)}>{texto.txt1}</button>
            <button className="card btn" id='card2' onClick={() => cardClick(2)}>{texto.txt2}</button>
          </div>
          <Comparador valor1={valor1} valor2={valor2} />
          <button className='btn' style={{marginTop:"20px", width: "100%"}}>Próximo</button>
        </div>
      </div>
    </>
  )
}

export default Jogo
