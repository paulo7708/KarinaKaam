import { StyleContainer } from './style'
 
import img1 from '../../../assets/Projeto comercial/Studio Pilates - Fortaleza/01.png'
import img2 from '../../../assets/Projeto comercial/Studio Pilates - Fortaleza/02.png'
import img3 from '../../../assets/Projeto comercial/Studio Pilates - Fortaleza/03.png'
import img4 from '../../../assets/Projeto comercial/Studio Pilates - Fortaleza/04.png'

const imagens = [img1, img2, img3, img4]

export const StudioPilatesFortaleza = () => {
  
  return(
    <StyleContainer>
      {imagens.map((imagem) => (
        <img key={imagem} src={imagem} alt={imagem} />
      ))}
    </StyleContainer>
  )
}