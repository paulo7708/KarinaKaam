import Accordion from 'react-bootstrap/Accordion';
import './style.css'
import { Contato, PortBtn } from './style';


function Fac() {
  return (
    <div className='paddingTop'>
      <p className=' title'><span>———</span>&nbsp; F.A.C &nbsp; <span>———</span></p>
      <h2 id='Trosa'>DÚVIDAS FREQUENTES</h2>
      <Accordion defaultActiveKey="0" className='AcContainer'>
        <Accordion.Item className='acc' eventKey="0">
          <Accordion.Header  >Como faço pra solicitar um orçamento?</Accordion.Header>
          <Accordion.Body className='acc'>
            Entre em contato conosco através do WhatsApp numero (00) 99999- 9999 ou do e-mail. KarinaKam@gmail.com
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className='acc' eventKey="1">
          <Accordion.Header>Em qual momento receberei uma prévia do projeto?</Accordion.Header>
          <Accordion.Body>
            O prazo de entrega do projeto 3D varia de acordo com a complexidade do projeto e das necessidades do cliente.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className='acc' eventKey="2">
          <Accordion.Header id='header'>Qual o custo final da obra?</Accordion.Header>
          <Accordion.Body>
            O custo final da obra varia de acordo com cada projeto. Ele é mensurado após a finalização do projeto executivo, onde serão realizados todos os orçamentos necessários, com fornecedores parceiros. Durante as reuniões conversaremos sobre o budget para que o cliente tenha parâmetros de valores.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className='acc' eventKey="3">
          <Accordion.Header>Como funciona o suporte Pós-Projeto?</Accordion.Header>
          <Accordion.Body>
            Após a aprovação do projeto executivo, serão elaborados os orçamentos essenciais para dar início à construção. Com os orçamentos e os serviços iniciais contratados, serão feitas visitas estratégicas ao local da obra para orientar os profissionais envolvidos.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Contato>
        <p>Caso você tenha alguma dúvida que não foi respondida aqui nessa seção,<br />entre em contato conosco</p>

        <PortBtn href="/faleconosco">
          Entre em contato
        </PortBtn>
      </Contato>


    </div>
  );
}

export default Fac;