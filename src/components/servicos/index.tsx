import { Card, ContainerCard, PortStyle } from './style'

interface Servicos {
  id?: string,
  title?: string,
  subTitle?: string,
  text?: string,
  btnText?: string,
  video?: string,
  image?: string,
  h2?: string,
  p?: string,
  card1?: string,
  card2?: string,
  card3?: string,
  card4?: string,
  strong?: string,
}

export function Servicos({ id, title, h2, p, card1, card2, card3, card4, strong} : Servicos) {
  return (
    <>
      <PortStyle id={id}>
                
        <p className=' title'><span>———</span>&nbsp; {title} &nbsp; <span>———</span></p>
        <h2>{h2}</h2>
        <p>{p}</p>
        <strong>{strong}</strong>
        <ContainerCard>
          <Card>
            <a href="">
            <p>{card1}</p>
            </a>
          </Card>
          <Card>
            <a href="">
            <p>{card2}</p>
            </a>
          </Card>
          <Card>
            <a href="">
              <p>{card3}</p>
            </a>
          </Card>
          <Card>
            <a href="">
              <p>{card4}</p>
            </a>
          </Card>
          

        </ContainerCard>



      </PortStyle>
    </>
  )
}