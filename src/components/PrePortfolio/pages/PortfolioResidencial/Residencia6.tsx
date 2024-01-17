import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto residencial/Residencia 06/3Resultado.jpg'
import img2 from '../../../../assets/Projeto residencial/Residencia 06/4Resultado.jpg'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2]

export const Residencia6 = () => {
  
  return (
    <>
      <StyleContainer>
        {imagens.map((imagem) => (
          <img loading="lazy" key={imagem} src={imagem} alt={imagem} />
        ))}
        <CarouselNavigate />
      </StyleContainer>
      
    </>
  )
}