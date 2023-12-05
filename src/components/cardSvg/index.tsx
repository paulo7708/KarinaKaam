import svg1 from '../../assets/monick-fiuza-arquitetura-e-design-the-house-osasco-10.jpg'
import { Card, ContainerCard, PortBtn, PortStyle } from './style'

export function CardSvg() {
  return (
    <>
      <PortStyle>
        
        <h3>Contenos sobre suas necessidades!</h3>
        <ContainerCard>
          <Card>
            <a href="/portfolio">
              <img src={svg1} />
              <h1>Projeto 3D</h1>
              <p>A partir das necessidades do cliente são geradas representações tridimensionais que ilustram o projeto concluído, oferecendo uma visão detalhada de cada espaço e do arranjo proposto.</p>
            </a>
          </Card>
          <Card>
            <a href="/portfolio">
              <img src={svg1} />
              <h1>Projeto Executivo</h1>
              <p>O projeto oferece informações detalhadas para a elaboração dos custos e para a condução da construção, incluindo medidas, quantidade de materiais e especificações técnicas necessárias.</p>
            </a>
          </Card>
          <Card>
            <a href="/portfolio">
              <img src={svg1} />
              <h1>Orçamento</h1>
              <p>O Orçamento vai guiar as decisões antes do início da construção, considerando o orçamento individual de cada cliente.</p>
            </a>
          </Card>
          <Card>
            <a href="/portfolio">
              <img src={svg1} />
              <h1>Atendimento Pós-Projeto</h1>
              <p>Contribui durante o andamento da construção, fornecendo um cronograma, supervisionando, realizando visitas estratégicas ao local da obra.</p>
            </a>
          </Card>
          

        </ContainerCard>

        <PortBtn href="/portfolio">
          <p>Entre em contato</p>
        </PortBtn>


      </PortStyle>
    </>
  )
}