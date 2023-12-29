import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto residencial/Residencia Praia/1.png'
import img2 from '../../../../assets/Projeto residencial/Residencia Praia/2.png'
import img3 from '../../../../assets/Projeto residencial/Residencia Praia/3.png'
import img4 from '../../../../assets/Projeto residencial/Residencia Praia/4.png'
import img5 from '../../../../assets/Projeto residencial/Residencia Praia/5.png'
import img6 from '../../../../assets/Projeto residencial/Residencia Praia/6.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2, img3, img4, img5, img6]

export const ResidenciaPraia = () => {
  
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