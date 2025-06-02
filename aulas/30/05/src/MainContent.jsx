import Section from "./Section"
import './MainContent.css'
export default function MainContent(){
    return(
        <main className="Conteudo">
            <Section title="Incentivo">
                <p>Não se preocupe com o amanhã, chefe!</p>
            </Section>
            <Section title="Contato">
                <p>
                    Você pode me chamar a qualquer hora, chefe!
                </p>
            </Section>
        </main>
    )
}