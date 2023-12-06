import { Card, ContainerCard, PortStyle } from "./style";
import svg1 from '../../assets/monick-fiuza-arquitetura-e-design-the-house-osasco-10.jpg'

export default function Portfolio(){
  return(
    <PortStyle>
      <p className=' title'><span>———</span>&nbsp; Projetos Entregues &nbsp; <span>———</span></p>
      <div>
        <h2>Clique nas imagens e veja os projetos:</h2>
      </div>
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

        </ContainerCard>
    </PortStyle>
    
  )
}