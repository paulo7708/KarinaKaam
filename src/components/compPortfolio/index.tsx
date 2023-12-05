import svg1 from '../../assets/monick-fiuza-arquitetura-e-design-the-house-osasco-10.jpg'
import { Card, ContainerCard, PortBtn, PortStyle } from './style'

export function CompPortfolio() {
  return (
    <>
      <PortStyle>
        <p>———&nbsp; PORTFÓLIO&nbsp; ———</p>
        <h2>CONHEÇA ALGUNS PROJETOS</h2>
        <ContainerCard>
          <Card>
            <a href="/portfolio">
              <img src={svg1} />
              <h1>Sp</h1>
            </a>
          </Card>
          <Card>
            <a href="/portfolio">
              <img src={svg1} />
              <h1>Sp</h1>
            </a>
          </Card>
          <Card className='hiddenMob'>
            <a href="/portfolio">
              <img src={svg1} />
              <h1>Sp</h1>
            </a>
          </Card>
          

        </ContainerCard>
        <PortBtn href="/portfolio">
          <p>Clique aqui para ver mais projetos</p>
        </PortBtn>



      </PortStyle>
    </>
  )
}