import { Card, ContainerCard, PortStyle } from "./style";
import comImg from '../../assets/Projeto comercial/Glitter shopping botucatu/01Resultado.png'
import resImg from '../../assets/Projeto residencial/RESIDENCIA 01/1Resultado.png'
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
            <img loading="lazy" src={comImg} />
            <h1>Projetos Comerciais</h1>
          </NavLink>          
        </Card>
        <Card>
          <NavLink to='/PortfolioResidencial'>
            <img loading="lazy" src={resImg} />
            <h1>Projetos Residenciais</h1>
          </NavLink>
        </Card>


      </ContainerCard>
    </PortStyle>
  )
}