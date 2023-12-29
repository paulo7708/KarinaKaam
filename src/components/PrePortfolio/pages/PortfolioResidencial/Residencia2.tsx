import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto residencial/Residencia 02 - Area Gourmet/1.png'
import img2 from '../../../../assets/Projeto residencial/Residencia 02 - Area Gourmet//2.png'
import img3 from '../../../../assets/Projeto residencial/Residencia 02 - Area Gourmet//3.png'
import img4 from '../../../../assets/Projeto residencial/Residencia 02 - Area Gourmet//4.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2, img3, img4]

export const Residencia2 = () => {
  
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