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
        <div>
          <h1>Fale Conosco</h1>
          <div>
            <a href="https://wa.me/5511920092283" target="_blank"><p><PhoneCall size={32} weight="duotone" />Atendimento (11) 92009-2283
            </p></a>
            <a href="https://wa.me/5511920092282" target="_blank"><p><PhoneCall size={32} weight="duotone" />Cobrança (11) 92009-2282
            </p></a>
            <p><Envelope size={32} weight="duotone" />atendimento@cbotec.com.br</p>
          </div>
        </div>
        <div>
          <h1>Serviços</h1>

          <Nav.Link className='nav-links'
            as={Link}
            to={"/#Home"}
          >
            Home
          </Nav.Link>
          <Nav.Link className='nav-links'
            as={Link}
            to={"/#portfolio"}>Portfólio
          </Nav.Link>
          <Nav.Link className='nav-links'
            as={Link}
            to={"/#servicos"}>Serviços
          </Nav.Link>

        </div>
        
        <div></div>
      </RowSection>

      

    </Section>
  )
}