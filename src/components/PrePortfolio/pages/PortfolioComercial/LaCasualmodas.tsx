import { StyleContainer } from './style'

import img0 from '../../../../assets/Projeto comercial/La Casual modas - loja infantil/00Resultado.png'
import img6 from '../../../../assets/Projeto comercial/La Casual modas - loja infantil/01Resultado.png'
import img2 from '../../../../assets/Projeto comercial/La Casual modas - loja infantil/02Resultado.png'
import img4 from '../../../../assets/Projeto comercial/La Casual modas - loja infantil/04Resultado.png'
import img5 from '../../../../assets/Projeto comercial/La Casual modas - loja infantil/05Resultado.png'
import img1 from '../../../../assets/Projeto comercial/La Casual modas - loja infantil/06Resultado.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img0,img1, img2, img4, img5, img6]

export const LaCasualmodas = () => {
  
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