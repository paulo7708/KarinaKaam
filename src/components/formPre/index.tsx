import { Card, ContainerCard, PortStyle } from "./style";
import comImg from '../../assets/blog_proteto-arquitetonico-1050x600_c.jpg'
import resImg from '../../assets/Projeto residencial/Residencia 07/01Resultado.png'
import { NavLink } from "react-router-dom";

export default function PreForm() {
  return (
    <PortStyle>
      <p className=' title'><span>———</span>&nbsp; Conte mais &nbsp; <span>———</span></p>
      <div>
        <h2>Como podemos te ajudar?</h2>
      </div>
      <ContainerCard>


        <Card>
          <NavLink to='/faleconosco/FormArq'>
            <img loading="lazy" src={comImg} />
            <h1>Projeto arquitetônico</h1>
          </NavLink>          
        </Card>
        <Card>
          <NavLink to='/faleconosco/FormDesign'>
            <img loading="lazy" src={resImg} />
            <h1>Projeto de interiores ou Consultoria</h1>
          </NavLink>
        </Card>


      </ContainerCard>
    </PortStyle>
  )
}