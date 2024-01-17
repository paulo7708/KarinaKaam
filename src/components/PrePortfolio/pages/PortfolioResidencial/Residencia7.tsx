import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto residencial/Residencia 07/01Resultado.png'
import img2 from '../../../../assets/Projeto residencial/Residencia 07/02Resultado.png'
import img3 from '../../../../assets/Projeto residencial/Residencia 07/03Resultado.png'
import img4 from '../../../../assets/Projeto residencial/Residencia 07/09Resultado.png'
import img5 from '../../../../assets/Projeto residencial/Residencia 07/05Resultado.png'
import img6 from '../../../../assets/Projeto residencial/Residencia 07/08Resultado.png'
import img7 from '../../../../assets/Projeto residencial/Residencia 07/07Resultado.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2, img3, img4, img5, img6, img7]

export const Residencia7 = () => {
  
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