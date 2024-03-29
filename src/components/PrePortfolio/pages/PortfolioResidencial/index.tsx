import { Card, ContainerCard, PortStyle } from "./../../style.ts";
import { PortResidencial } from './../../contentPort.ts'



export default function Portfolio(){
  return(
    <PortStyle>
      <p className=' title'><span>———</span>&nbsp; Projetos Entregues &nbsp; <span>———</span></p>
      <div>
        <h2>Clique nas imagens e veja os projetos:</h2>
      </div>
      <ContainerCard>

          {PortResidencial.map(({ h1, img, path }) => {
            return(
              <Card>
                <a href={path}>
                  <img loading="lazy" src={img} />
                  <h1>{h1}</h1>
                </a>
              </Card>
            )
          })}

        </ContainerCard>
    </PortStyle>
    
  )
}