import { StyleContainer } from './style'

import img0 from '../../../assets/Projeto comercial/Sala fisioterapia/01.png'
import img1 from '../../../assets/Projeto comercial/Sala fisioterapia/02.png'
import img2 from '../../../assets/Projeto comercial/Sala fisioterapia/03.png'
import img3 from '../../../assets/Projeto comercial/Sala fisioterapia/04.png'
import img4 from '../../../assets/Projeto comercial/Sala fisioterapia/05.png'
import img5 from '../../../assets/Projeto comercial/Sala fisioterapia/06.png'

const imagens = [img0,img1, img2, img3, img4, img5]

export const Salafisioterapia = () => {
  
  return(
    <StyleContainer>
      {imagens.map((imagem) => (
        <img key={imagem} src={imagem} alt={imagem} />
      ))}
    </StyleContainer>
  )
}