// src/components/Comparador.tsx

type Props = {
    valor1: number;
    valor2: number;
};

export function Comparador({ valor1, valor2 }: Props) {
    const total = valor1 + valor2;

    const valor1Percent = total ? (valor1 / total) * 100 : 0;
    const valor2Percent = total ? (valor2 / total) * 100 : 0;

    return (
        <div style={{position: "relative", width: "100%", display: "flex", flexDirection: "column", gap: 8, marginTop: 20 }}>


            <div style={{ display: "flex", height: 40, borderRadius: 8, overflow: "hidden", background: "#ddddddff", width: "100%" }}>
                <div style={{ width: `${valor1Percent}%`, background: "rgb(40, 126, 255)", transition: "0.4s ease" }}></div>
                <div style={{ width: `${valor2Percent}%`, background: "rgb(255, 70, 70)", transition: "0.4s ease" }}></div>
            </div>

            <span style={{left: 10, position:"absolute", marginTop:"10px", color: "rgba(255, 255, 255, 1)", fontSize: "18px"  }}>
                {valor1Percent.toFixed(0)}% ({valor1} {valor1 === 1 ? 'voto' : 'votos'})
            </span>

            <span style={{right: 10, position:"absolute", marginTop:"10px", color: "rgba(255, 255, 255, 1)", fontSize: "18px"  }}>
                ({valor2} {valor2 === 1 ? 'voto' : 'votos'}) {valor2Percent.toFixed(0)}%
            </span>

        </div>
    );
}