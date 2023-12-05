import svg1 from '../../assets/svg/svg1.png'
import { Card, ContainerCard, PortStyle } from './style'

export function Servicos() {
  return (
    <>
      <PortStyle>
                
        <p className=' title'><span>———</span>&nbsp; SERVIÇOS &nbsp; <span>———</span></p>
        <h2>QUANDO SOLICIDAR UM<br/> ESCRITORIO DE ARQUITETURA?</h2>
        <p>Construir e reformar pode parecer simples, mas apenas quem já experimentou sabe que não é tão fácil assim. Lidar com fornecedores, adaptar e aprimorar o espaço, gerenciar custos e materiais podem ser desafios estressantes. Nossa missão é simplificar esse processo e tornar seu sonho uma realidade palpável.</p>
        <strong>Se você se identifica com essas situações abaixo, nós podemos te ajudar:</strong>
        <ContainerCard>
          <Card>
            <a href="">
              <p>Quer personalizar o seu ambiente, mas está em dúvida por onde começar?</p>
            </a>
          </Card>
          <Card>
            <a href="">
              <p>Tem dificuldades em supervisionar a construção e os profissionais</p>
            </a>
          </Card>
          <Card>
            <a href="">
              <p>Deseja evitar desperdício de materiais e economizar tempo</p>
            </a>
          </Card>
          <Card>
            <a href="">
              <p>Deseja evitar desperdício de materiais e economizar tempo</p>
            </a>
          </Card>
          

        </ContainerCard>



      </PortStyle>
    </>
  )
}