import { StyleContainer } from './style'

import img0 from '../../../../assets/Projeto comercial/Clinica Veterinaria - toca silvestre/00.png'
import img1 from '../../../../assets/Projeto comercial/Clinica Veterinaria - toca silvestre/00.png'
import img2 from '../../../../assets/Projeto comercial/Clinica Veterinaria - toca silvestre/02.png'
import img3 from '../../../../assets/Projeto comercial/Clinica Veterinaria - toca silvestre/03.png'
import img4 from '../../../../assets/Projeto comercial/Clinica Veterinaria - toca silvestre/06.png'
import img5 from '../../../../assets/Projeto comercial/Clinica Veterinaria - toca silvestre/07.png'

const imagens = [img0,img1, img2, img3, img4, img5]

export const TocaSilvestre = () => {
  
  return(
    <StyleContainer>
      {imagens.map((imagem) => (
        <img key={imagem} src={imagem} alt={imagem} />
      ))}
    </StyleContainer>
  )
}