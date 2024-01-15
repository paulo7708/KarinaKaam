import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto residencial/Man Cave/01Resultado.png'
import img2 from '../../../../assets/Projeto residencial/Man Cave/02Resultado.png'
import img3 from '../../../../assets/Projeto residencial/Man Cave/03Resultado.png'
import img4 from '../../../../assets/Projeto residencial/Man Cave/04Resultado.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2, img3, img4]

export const ManCave = () => {

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