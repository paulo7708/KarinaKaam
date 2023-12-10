import { Card, ContainerCard, PortStyle } from "./style";
import { Port } from './contentPort.ts'



export default function Portfolio(){
  return(
    <PortStyle>
      <p className=' title'><span>———</span>&nbsp; Projetos Entregues &nbsp; <span>———</span></p>
      <div>
        <h2>Clique nas imagens e veja os projetos:</h2>
      </div>
      <ContainerCard>

          {Port.map(({ h1, img, href }) => {
            return(
              <Card>
                <a href={href}>
                  <img src={img} />
                  <h1>{h1}</h1>
                </a>
              </Card>
            )
          })}

        </ContainerCard>
    </PortStyle>
    
  )
}