import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto residencial/Man Cave/01.png'
import img2 from '../../../../assets/Projeto residencial/Man Cave/02.png'
import img3 from '../../../../assets/Projeto residencial/Man Cave/03.png'
import img4 from '../../../../assets/Projeto residencial/Man Cave/04.png'

const imagens = [img1, img2, img3, img4]

export const ManCave = () => {

  return (
    <StyleContainer>
      {imagens.map((imagem) => (
        <img key={imagem} src={imagem} alt={imagem} />
      ))}
    </StyleContainer>
  )
}