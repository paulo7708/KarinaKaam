import { Card, ContainerCard, PortBtn, PortStyle } from './style'
import { PortComercial, PortResidencial } from '../PrePortfolio/contentPort'
import { NavLink } from 'react-router-dom'

export function CompPortfolio() {
  return (
    <>
      <PortStyle>
        <p>———&nbsp; PORTFÓLIO&nbsp; ———</p>
        <h2>CONHEÇA ALGUNS PROJETOS</h2>
        <ContainerCard>
          <Card>
            <NavLink to={PortComercial[1].path}>
              <img className='img1' src={PortComercial[1].img} />
              <h1>{PortComercial[1].h1}</h1>
            </NavLink>
          </Card>
          <Card>
            <NavLink to={PortComercial[3].path}>
              <img className='img2' src={PortComercial[3].img} />
              <h1>{PortComercial[3].h1}</h1>
            </NavLink>
          </Card>
          <Card className='hiddenMob'>
            <NavLink to={PortResidencial[0].path}>
              <img className='img3' src={PortResidencial[0].img} />
              <h1>{PortResidencial[0].h1}</h1>
            </NavLink>
          </Card>


        </ContainerCard>
        <NavLink to='/preportfolio'>
          <PortBtn>
            <span>Veja mais projetos</span>
          </PortBtn>
        </NavLink>


      </PortStyle>
    </>
  )
}