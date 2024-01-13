import { Card, ContainerCard, PortBtn, PortStyle } from './style'
import { PortResidencial } from '../PrePortfolio/contentPort'
import { NavLink } from 'react-router-dom'

export function CardSvg() {
  return (
    <>
      <PortStyle>

        <h3>Contenos sobre suas necessidades!</h3>
        <ContainerCard>
          <Card>
            <NavLink to='/faleconosco'>
              <img className='img1' src={PortResidencial[4].img} />
              <h1>Projeto 3D</h1>
              <p>A partir das necessidades do cliente são geradas representações tridimensionais que ilustram o projeto concluído, oferecendo uma visão detalhada de cada espaço e do arranjo proposto.</p>
            </NavLink>
          </Card>
          <Card>
            <NavLink to='/faleconosco'>
              <img className='img2' src={PortResidencial[6].img} />
              <h1>Projeto Executivo</h1>
              <p>O projeto oferece informações detalhadas para a elaboração dos custos e para a condução da construção, incluindo medidas, quantidade de materiais e especificações técnicas necessárias.</p>
            </NavLink>
          </Card>
          <Card>
            <NavLink to='/faleconosco'>
              <img className='img3' src={PortResidencial[3].img} />
              <h1>Orçamento</h1>
              <p>O Orçamento vai guiar as decisões antes do início da construção, considerando o orçamento individual de cada cliente.</p>
            </NavLink>
          </Card>
          <Card>
            <NavLink to='/faleconosco'>
              <img className='img4' src={PortResidencial[7].img} />
              <h1>Atendimento Pós-Projeto</h1>
              <p>Contribui durante o andamento da construção, fornecendo um cronograma, supervisionando, realizando visitas estratégicas ao local da obra.</p>
            </NavLink>
          </Card>


        </ContainerCard>


        <NavLink to='/faleconosco'>
          <PortBtn>Entre em contato</PortBtn>
        </NavLink>



      </PortStyle>
    </>
  )
}