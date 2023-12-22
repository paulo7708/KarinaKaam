import { Card, ContainerCard, PortStyle } from "./../../style.ts";
import { PortComercial } from './../../contentPort.ts'
import { NavLink } from "react-router-dom";



export default function Portfolio() {
  return (
    <PortStyle>
      <p className=' title'><span>———</span>&nbsp; Projetos Entregues &nbsp; <span>———</span></p>
      <div>
        <h2>Clique nas imagens e veja os projetos:</h2>
      </div>
      <ContainerCard>

        {PortComercial.map(({ h1, img, path }) => {
          return (
            <Card>

              <NavLink to={path}>
                <img src={img} />
                <h1>{h1}</h1>
              </NavLink>

            </Card>
          )
        })}

      </ContainerCard>
    </PortStyle>

  )
}