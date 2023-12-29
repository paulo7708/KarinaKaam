import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto residencial/Apartamento/1.png'
import img2 from '../../../../assets/Projeto residencial/Apartamento/2.png'
import img3 from '../../../../assets/Projeto residencial/Apartamento/3.png'
import img4 from '../../../../assets/Projeto residencial/Apartamento/4.png'
import img5 from '../../../../assets/Projeto residencial/Apartamento/5.png'
import img6 from '../../../../assets/Projeto residencial/Apartamento/6.png'
import img7 from '../../../../assets/Projeto residencial/Apartamento/7.png'
import img8 from '../../../../assets/Projeto residencial/Apartamento/8.png'
import img9 from '../../../../assets/Projeto residencial/Apartamento/9.png'
import img10 from '../../../../assets/Projeto residencial/Apartamento/10.png'
import img11 from '../../../../assets/Projeto residencial/Apartamento/11.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]

export const Apartamento = () => {
  
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