import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto residencial/Residencia 03 - Area Gourmet/1Resultado.png'
import img2 from '../../../../assets/Projeto residencial/Residencia 03 - Area Gourmet/2Resultado.png'
import img3 from '../../../../assets/Projeto residencial/Residencia 03 - Area Gourmet/3Resultado.png'
import img4 from '../../../../assets/Projeto residencial/Residencia 03 - Area Gourmet/4Resultado.png'
import img5 from '../../../../assets/Projeto residencial/Residencia 03 - Area Gourmet/5Resultado.png'
import { CarouselNavigate } from '../carouselNavigate'
const imagens = [img1, img2, img3, img4, img5]

export const Residencia3 = () => {
  
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