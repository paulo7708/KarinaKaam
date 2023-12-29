import { StyleContainer } from './style'

import img0 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/00.png'
import img1 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/01.png'
import img2 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/02.png'
import img3 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/03.png'
import img4 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/04.png'
import img5 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/05.png'
import img6 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/06.png'
import img7 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/07.png'
import img8 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/08.png'
import img9 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/09.png'
import img10 from '../../../../assets/Projeto comercial/Glitter shopping botucatu/10.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

export const GlitterShoppingBotucatu = () => {
  
  return(
    <>
      <StyleContainer>
        {imagens.map((imagem) => (
          <img key={imagem} src={imagem} alt={imagem} />
        ))}

      </StyleContainer>
      <CarouselNavigate />
    </>
  )
}