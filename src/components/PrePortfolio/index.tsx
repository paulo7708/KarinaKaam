import { Card, ContainerCard, PortStyle } from "./style";
import comImg from '../../assets/Projeto comercial/Glitter shopping botucatu/01.png'
import { NavLink } from "react-router-dom";

export default function PrePortfolio() {
  return (
    <PortStyle>
      <p className=' title'><span>———</span>&nbsp; Projetos Entregues &nbsp; <span>———</span></p>
      <div>
        <h2>Clique nas imagens e veja os projetos:</h2>
      </div>
      <ContainerCard>


        <Card>
          <NavLink to='/PortfolioComercial'>
            <img src={comImg} />
            <h1>Projetos Comerciais</h1>
          </NavLink>
          <NavLink to='/PortfolioResidencial'>
            <img src={comImg} />
            <h1>Projetos Residenciais</h1>
          </NavLink>
        </Card>


      </ContainerCard>
    </PortStyle>

  )
}