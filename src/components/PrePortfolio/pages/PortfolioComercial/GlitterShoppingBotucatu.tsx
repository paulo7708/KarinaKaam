import { StyleContainer } from './style'

import img0 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/00Resultado.png'
import img1 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/01Resultado.png'
import img2 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/02Resultado.png'
import img3 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/03Resultado.png'
import img4 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/04Resultado.png'
import img5 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/05Resultado.png'
import img6 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/06Resultado.png'
import img7 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/07Resultado.png'
import img8 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/08Resultado.png'
import img9 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/09Resultado.png'
import img10 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/10Resultado.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

export const GlitterShoppingBotucatu = () => {
  
  return (
    <>
      <StyleContainer>
        {imagens.map((imagem) => (
          <img key={imagem} src={imagem} alt={imagem} />
        ))}
        <CarouselNavigate />
      </StyleContainer>
      
    </>
  )
}