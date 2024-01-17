import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto residencial/Residencia 04/1Resultado.png'
import img2 from '../../../../assets/Projeto residencial/Residencia 04/2Resultado.png'
import img3 from '../../../../assets/Projeto residencial/Residencia 04/3Resultado.png'
import img4 from '../../../../assets/Projeto residencial/Residencia 04/4Resultado.png'
import img5 from '../../../../assets/Projeto residencial/Residencia 04/5Resultado.png'
import img6 from '../../../../assets/Projeto residencial/Residencia 04/6Resultado.png'
import img7 from '../../../../assets/Projeto residencial/Residencia 04/7Resultado.png'
import img8 from '../../../../assets/Projeto residencial/Residencia 04/8Resultado.png'
import img9 from '../../../../assets/Projeto residencial/Residencia 04/9Resultado.png'
import img10 from '../../../../assets/Projeto residencial/Residencia 04/10Resultado.png'
import img11 from '../../../../assets/Projeto residencial/Residencia 04/11Resultado.png'
import img12 from '../../../../assets/Projeto residencial/Residencia 04/12Resultado.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]

export const Residencia4 = () => {
  
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