import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto residencial/Residencia 01/1.png'
import img2 from '../../../../assets/Projeto residencial/Residencia 01/2.png'
import img3 from '../../../../assets/Projeto residencial/Residencia 01/3.png'
import img4 from '../../../../assets/Projeto residencial/Residencia 01/4.png'
import img5 from '../../../../assets/Projeto residencial/Residencia 01/5.png'
import img6 from '../../../../assets/Projeto residencial/Residencia 01/6.png'
import img7 from '../../../../assets/Projeto residencial/Residencia 01/7.png'
import img8 from '../../../../assets/Projeto residencial/Residencia 01/8.png'
import img9 from '../../../../assets/Projeto residencial/Residencia 01/9.png'
import img10 from '../../../../assets/Projeto residencial/Residencia 01/10.png'
import img11 from '../../../../assets/Projeto residencial/Residencia 01/11.png'
import img12 from '../../../../assets/Projeto residencial/Residencia 01/12.png'
import img13 from '../../../../assets/Projeto residencial/Residencia 01/13.png'
import img14 from '../../../../assets/Projeto residencial/Residencia 01/14.png'
import img15 from '../../../../assets/Projeto residencial/Residencia 01/15.png'
import img16 from '../../../../assets/Projeto residencial/Residencia 01/16.png'
import img17 from '../../../../assets/Projeto residencial/Residencia 01/17.png'
import img18 from '../../../../assets/Projeto residencial/Residencia 01/18.png'
import img19 from '../../../../assets/Projeto residencial/Residencia 01/19.png'
import img20 from '../../../../assets/Projeto residencial/Residencia 01/20.png'
import img21 from '../../../../assets/Projeto residencial/Residencia 01/21.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21]

export const Residencia1 = () => {
  
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