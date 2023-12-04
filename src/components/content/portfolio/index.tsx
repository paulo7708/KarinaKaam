import { Card, ContainerCard, PortStyle } from "./style";
import svg1 from '../../../assets/monick-fiuza-arquitetura-e-design-the-house-osasco-10.jpg'

export default function Portfolio(){
  return(
    <PortStyle>
      <div>
        <p>———&nbsp; SERVIÇOS&nbsp; ———</p>
      </div>
      <div>
        <h3>Clique nas imagens e veja os projetos:</h3>
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