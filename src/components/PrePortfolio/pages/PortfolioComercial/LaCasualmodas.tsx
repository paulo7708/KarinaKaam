import { StyleContainer } from './style'

import img0 from '../../../../assets/Projeto comercial/La Casual modas - loja infantil/00.png'
import img6 from '../../../../assets/Projeto comercial/La Casual modas - loja infantil/01.png'
import img2 from '../../../../assets/Projeto comercial/La Casual modas - loja infantil/02.png'
import img4 from '../../../../assets/Projeto comercial/La Casual modas - loja infantil/04.png'
import img5 from '../../../../assets/Projeto comercial/La Casual modas - loja infantil/05.png'
import img1 from '../../../../assets/Projeto comercial/La Casual modas - loja infantil/06.png'

const imagens = [img0,img1, img2, img4, img5, img6]

export const LaCasualmodas = () => {
  
  return(
    <StyleContainer>
      {imagens.map((imagem) => (
        <img key={imagem} src={imagem} alt={imagem} />
      ))}
    </StyleContainer>
  )
}