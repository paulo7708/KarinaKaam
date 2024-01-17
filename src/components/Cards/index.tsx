import { FirstStyle } from './FirstAndSecond'
import Fade from 'react-reveal/Fade'

interface First {
  id?: string,
  img?: string,
  h2?: string,
  p?: string,
  img2?: string,
  h22?: string,
  p2?: string,
  img3?: string,
  h23?: string,
  p3?: string,
}

export const Cards = ({ img, h2, p, img2, h22, p2, img3, h23, p3, id }: First) => {
  return (
    <FirstStyle id={id}>
      <Fade bottom duration={5000} delay={1500}>
        <div>
          <img src={img} alt="" loading="lazy" />
          <h2>{h2}</h2>
          <p>{p}</p>
        </div>
        <div>
          <img src={img2} alt="" loading="lazy" />
          <h2>{h22}</h2>
          <p>{p2}</p>
        </div>
        <div>
          <img src={img3} alt="" loading="lazy" />
          <h2>{h23}</h2>
          <p>{p3}</p>
        </div>
      </Fade>


    </FirstStyle>
  )
}