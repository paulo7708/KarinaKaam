import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto residencial/Residencia 01/1Resultado.png'
import img2 from '../../../../assets/Projeto residencial/Residencia 01/2Resultado.png'
import img3 from '../../../../assets/Projeto residencial/Residencia 01/3Resultado.png'
import img4 from '../../../../assets/Projeto residencial/Residencia 01/4Resultado.png'
import img5 from '../../../../assets/Projeto residencial/Residencia 01/5Resultado.png'
import img6 from '../../../../assets/Projeto residencial/Residencia 01/6Resultado.png'
import img7 from '../../../../assets/Projeto residencial/Residencia 01/7Resultado.png'
import img8 from '../../../../assets/Projeto residencial/Residencia 01/8Resultado.png'
import img9 from '../../../../assets/Projeto residencial/Residencia 01/9Resultado.png'
import img10 from '../../../../assets/Projeto residencial/Residencia 01/10Resultado.png'
import img11 from '../../../../assets/Projeto residencial/Residencia 01/11Resultado.png'
import img12 from '../../../../assets/Projeto residencial/Residencia 01/12Resultado.png'
import img13 from '../../../../assets/Projeto residencial/Residencia 01/13Resultado.png'
import img14 from '../../../../assets/Projeto residencial/Residencia 01/14Resultado.png'
import img15 from '../../../../assets/Projeto residencial/Residencia 01/15Resultado.png'
import img16 from '../../../../assets/Projeto residencial/Residencia 01/16Resultado.png'
import img17 from '../../../../assets/Projeto residencial/Residencia 01/17Resultado.png'
import img18 from '../../../../assets/Projeto residencial/Residencia 01/18Resultado.png'
import img19 from '../../../../assets/Projeto residencial/Residencia 01/19Resultado.png'
import img20 from '../../../../assets/Projeto residencial/Residencia 01/20Resultado.png'
import img21 from '../../../../assets/Projeto residencial/Residencia 01/21Resultado.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21]

export const Residencia1 = () => {
  
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