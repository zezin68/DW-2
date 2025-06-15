import CalculaIMC from "./IMC"

export default function Content({peso,altura}){
    const peso = peso;
    const altura = altura;
    return(
        <main className="conteudo">
            <div>
                <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)}       placeholder="Digite seu peso" />
                <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="Digite sua altura" />
            </div>
        </main>
    )
}