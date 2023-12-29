import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto residencial/Residencia 07/01.png'
import img2 from '../../../../assets/Projeto residencial/Residencia 07/02.png'
import img3 from '../../../../assets/Projeto residencial/Residencia 07/03.png'
import img4 from '../../../../assets/Projeto residencial/Residencia 07/09.png'
import img5 from '../../../../assets/Projeto residencial/Residencia 07/05.png'
import img6 from '../../../../assets/Projeto residencial/Residencia 07/08.png'
import img7 from '../../../../assets/Projeto residencial/Residencia 07/07.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2, img3, img4, img5, img6, img7]

export const Residencia7 = () => {
  
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