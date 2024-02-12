import Accordion from 'react-bootstrap/Accordion';
import './style.css'
import { Contato } from './style';
import Nav from 'react-bootstrap/Nav';
import { HashLink as Link } from 'react-router-hash-link';

function Fac() {
  return (
    <div className='paddingTop'>
      <p className=' title'><span>———</span>&nbsp; F.A.C &nbsp; <span>———</span></p>
      <h2 id='Trosa'>DÚVIDAS FREQUENTES</h2>
      <Accordion defaultActiveKey="0" className='AcContainer'>
        <Accordion.Item className='acc' eventKey="0">
          <Accordion.Header><span>Como faço pra solicitar um orçamento?</span></Accordion.Header>
          <Accordion.Body className='acc'>
            Entre em contato conosco através do WhatsApp numero (14) 98132-1312 ou do e-mail. Kaamoliveira@kaamoliveira.arq.br
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className='acc' eventKey="1">
          <Accordion.Header><span>Em qual momento receberei uma prévia do projeto?</span></Accordion.Header>
          <Accordion.Body>
            O prazo de entrega do projeto 3D varia de acordo com a complexidade do projeto e das necessidades do cliente.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className='acc' eventKey="2">
          <Accordion.Header id='header'><span>Qual o custo final da obra?</span></Accordion.Header>
          <Accordion.Body>
            O custo final da obra varia de acordo com cada projeto. Ele é mensurado após a finalização do projeto executivo, onde serão realizados todos os orçamentos necessários, com fornecedores parceiros. Durante as reuniões conversaremos sobre o budget para que o cliente tenha parâmetros de valores.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className='acc' eventKey="3">
          <Accordion.Header><span>Como funciona o suporte Pós-Projeto?</span></Accordion.Header>
          <Accordion.Body>
            Após a aprovação do projeto executivo, serão elaborados os orçamentos essenciais para dar início à construção. Com os orçamentos e os serviços iniciais contratados, serão feitas visitas estratégicas ao local da obra para orientar os profissionais envolvidos.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Contato>
        <p className='paragrafoFinal'>Caso você tenha alguma dúvida que não foi respondida aqui nessa seção,<br />entre em contato conosco</p>

        
            <Nav.Link className='btnPort' to={"/faleconosco"} as={Link}>Fale Conosco</Nav.Link>
          
      </Contato>


    </div>
  );
}

export default Fac;