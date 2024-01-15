import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto comercial/Hamburgueria - Bets Itapuí/01Resultado.png'
import img2 from '../../../../assets/Projeto comercial/Hamburgueria - Bets Itapuí/02Resultado.png'
import img3 from '../../../../assets/Projeto comercial/Hamburgueria - Bets Itapuí/03Resultado.png'
import img5 from '../../../../assets/Projeto comercial/Hamburgueria - Bets Itapuí/05Resultado.png'
import img6 from '../../../../assets/Projeto comercial/Hamburgueria - Bets Itapuí/06Resultado.png'
import img7 from '../../../../assets/Projeto comercial/Hamburgueria - Bets Itapuí/07Resultado.png'
import img8 from '../../../../assets/Projeto comercial/Hamburgueria - Bets Itapuí/08Resultado.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2, img3, img5, img6, img7, img8]

export const HamburgueriaBetsItapuí = () => {
  
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