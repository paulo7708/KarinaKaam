import { NavLink } from 'react-router-dom'
import svg1 from '../../../assets/svg/svg1.png'
import { Card, ContainerCard, PortStyle } from './style'

export function Portfolio() {
  return (
    <>
      <PortStyle>
        <h3>PORTFÓLIO</h3>
        <h1>CONHEÇA ALGUNS PROJETOS</h1>
        <ContainerCard>
          <Card>
            <a href="/faleconosco">
              <img src={svg1} />
              <h1>Sp</h1>
            </a>
          </Card>
          <Card>
            <a href="/faleconosco">
              <img src={svg1} />
              <h1>Sp</h1>
            </a>
          </Card>
          <Card>
            <a href="/faleconosco">
              <img src={svg1} />
              <h1>Sp</h1>
            </a>
          </Card>
          <Card>
            <a href="/faleconosco">
              <img src={svg1} />
              <h1>Sp</h1>
            </a>
          </Card>
        </ContainerCard>



      </PortStyle>
    </>
  )
}