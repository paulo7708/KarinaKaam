import { Copyright, Envelope, PhoneCall } from "phosphor-react"
import { RowSection, Section } from "./style"
import logoDark from '../../assets/logo/4logoNavGray.png'
import { Nav } from "react-bootstrap"
import { HashLink as Link } from 'react-router-hash-link';


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