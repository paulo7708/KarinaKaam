import { StyleContainer } from './style'

import img0 from '../../../../assets/Projeto comercial/Sala fisioterapia/01Resultado.png'
import img1 from '../../../../assets/Projeto comercial/Sala fisioterapia/02Resultado.png'
import img2 from '../../../../assets/Projeto comercial/Sala fisioterapia/03Resultado.png'
import img3 from '../../../../assets/Projeto comercial/Sala fisioterapia/04Resultado.png'
import img4 from '../../../../assets/Projeto comercial/Sala fisioterapia/05Resultado.png'
import img5 from '../../../../assets/Projeto comercial/Sala fisioterapia/06Resultado.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img0,img1, img2, img3, img4, img5]

export const Salafisioterapia = () => {
  
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