import { Copyright } from "phosphor-react"
import { RowSection, Section } from "./style"
import logoDark from '../../assets/logo/4logoNavGray.png'


export const Footer = () => {
  return (
    <Section>
      <RowSection>
        <div>
          <article>
            <img src={logoDark} alt="img" />
          </article>
          <span><Copyright size={20} weight="bold" />2023 Todos os direitos reservados</span>
        </div>
        
      </RowSection>

      

    </Section>
  )
}