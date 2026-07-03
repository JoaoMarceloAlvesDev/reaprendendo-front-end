StyleSheet

type Props = {
    valor1: number;
    valor2: number;
};

export function Comparador({ valor1, valor2 }: Props) {
    const total = valor1 + valor2;

    const valor1Percent = total ? (valor1 / total) * 100 : 0;
    const valor2Percent = total ? (valor2 / total) * 100 : 0;

    return (
        <div style={{position: "relative", width: "100%", display: "flex", flexDirection: "row", gap: 20, justifyContent: "center", alignItems: "center", marginTop: 20}}>
            <p style={{left: 10, position: "absolute", height: 40, color: "#ffffff",width: "200px", textAlign: "start", fontSize: "20px", marginTop: 35, }}>{valor1 > 0 && `${valor1Percent.toFixed(0)}% (${valor1})`}</p>
            <div style={{ display: "flex", height: 40, borderRadius: 8, overflow: "hidden", background: "#eee", width: "100%", }}>

                <div style={{ width: `${valor1Percent}%`, background: "rgb(40, 126, 255)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "0.3s", }}></div>

                <div style={{ width: `${valor2Percent}%`, background: "rgb(255, 70, 70)", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", transition: "0.3s", }}></div>

            </div>
            <p style={{right: 10, position: "absolute", height: 40, color: "#ffffff",width: "200px", textAlign: "end", fontSize: "20px", marginTop: 35, }}>{valor2 > 0 && `(${valor2}) ${valor2Percent.toFixed(0)}%`}</p>
        </div>
    );
}