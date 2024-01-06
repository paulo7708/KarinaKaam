import { Copyright } from "phosphor-react"
import { RowSection, Section } from "./style"
import logoDark from '../../assets/logo/4logoNavGray.png'


export const Footer = () => {
  const ano = new Date()
  const anoAtual = ano.getFullYear()
  return (
    <Section>
      <RowSection>
        <div>
          <article>
            <img src={logoDark} alt="img" />
          </article>
          <span><Copyright size={20} weight="bold" />{anoAtual} Todos os direitos reservados</span>
        </div>
        
      </RowSection>

      

    </Section>
  )
}