import Contador from "./contador"
import Section from "./Section"
import './MainContent.css'
export default function MainContent(){
    return(
        <main className="Conteudo">
            <div className="bot">
                <Section title="Bons dias chefes diários!"><Contador /></Section>
            </div>
            <div className="direc">
                <Section title="Incentivo">
                    <p>Não se preocupe com o amanhã, chefe!</p>
                </Section>
                <Section title="Contato">
                    <p>
                        Você pode me chamar a qualquer hora, chefe!
                    </p>
                </Section>
            </div>
        </main>
    )
}