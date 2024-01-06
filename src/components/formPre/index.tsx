import { Card, ContainerCard, PortStyle } from "./style";
import comImg from '../../assets/Projeto comercial/Glitter shopping botucatu/01.png'
import resImg from '../../assets/Projeto residencial/RESIDENCIA 01/1.png'
import { NavLink } from "react-router-dom";

export default function PreForm() {
  return (
    <PortStyle>
      <p className=' title'><span>———</span>&nbsp; Projetos Entregues &nbsp; <span>———</span></p>
      <div>
        <h2>Como podemos te ajudar?:</h2>
      </div>
      <ContainerCard>


        <Card>
          <NavLink to='/faleconosco/FormArq'>
            <img src={comImg} />
            <h1>Projeto arquitetônico</h1>
          </NavLink>          
        </Card>
        <Card>
          <NavLink to='/faleconosco/FormDesign'>
            <img src={resImg} />
            <h1>Projeto de interiores ou Consultoria</h1>
          </NavLink>
        </Card>


      </ContainerCard>
    </PortStyle>
  )
}