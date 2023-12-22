import { StyleContainer } from './style'


import img1 from '../../../../assets/Projeto comercial/Sala Psicologia/01.png'
import img2 from '../../../../assets/Projeto comercial/Sala Psicologia/02.png'
import img3 from '../../../../assets/Projeto comercial/Sala Psicologia/03.png'
import img4 from '../../../../assets/Projeto comercial/Sala Psicologia/04.png'
import img5 from '../../../../assets/Projeto comercial/Sala Psicologia/05.png'
import img6 from '../../../../assets/Projeto comercial/Sala Psicologia/06.png'

const imagens = [img1, img2, img3, img4, img5, img6]

export const SalaPsicologia = () => {
  
  return(
    <StyleContainer>
      {imagens.map((imagem) => (
        <img key={imagem} src={imagem} alt={imagem} />
      ))}
    </StyleContainer>
  )
}