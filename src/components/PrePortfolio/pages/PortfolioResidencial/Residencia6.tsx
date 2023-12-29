import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto residencial/Residencia 06/3.jpg'
import img2 from '../../../../assets/Projeto residencial/Residencia 06/4.jpg'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2]

export const Residencia6 = () => {
  
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