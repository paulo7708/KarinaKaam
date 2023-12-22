import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto comercial/Hamburgueria - Bets Itapuí/01.png'
import img2 from '../../../../assets/Projeto comercial/Hamburgueria - Bets Itapuí/02.png'
import img3 from '../../../../assets/Projeto comercial/Hamburgueria - Bets Itapuí/03.png'
import img5 from '../../../../assets/Projeto comercial/Hamburgueria - Bets Itapuí/05.png'
import img6 from '../../../../assets/Projeto comercial/Hamburgueria - Bets Itapuí/06.png'
import img7 from '../../../../assets/Projeto comercial/Hamburgueria - Bets Itapuí/07.png'
import img8 from '../../../../assets/Projeto comercial/Hamburgueria - Bets Itapuí/08.png'

const imagens = [img1, img2, img3, img5, img6, img7, img8]

export const HamburgueriaBetsItapuí = () => {
  
  return(
    <StyleContainer>
      {imagens.map((imagem) => (
        <img key={imagem} src={imagem} alt={imagem} />
      ))}
    </StyleContainer>
  )
}