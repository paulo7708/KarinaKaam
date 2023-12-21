import { StyleContainer } from './style'

import img1 from '../../../assets/Projeto comercial/Saláo de Beleza - Gabriela Garcia - Bauru/01.png'
import img2 from '../../../assets/Projeto comercial/Saláo de Beleza - Gabriela Garcia - Bauru/02.png'
import img3 from '../../../assets/Projeto comercial/Saláo de Beleza - Gabriela Garcia - Bauru/03.png'
import img4 from '../../../assets/Projeto comercial/Saláo de Beleza - Gabriela Garcia - Bauru/04.png'
import img5 from '../../../assets/Projeto comercial/Saláo de Beleza - Gabriela Garcia - Bauru/05.png'
import img6 from '../../../assets/Projeto comercial/Saláo de Beleza - Gabriela Garcia - Bauru/06.png'
import img7 from '../../../assets/Projeto comercial/Saláo de Beleza - Gabriela Garcia - Bauru/07.png'

const imagens = [img1, img2, img3, img4, img5, img6, img7]

export const SalaoGabrielaGarcia = () => {
  
  return(
    <StyleContainer>
      {imagens.map((imagem) => (
        <img key={imagem} src={imagem} alt={imagem} />
      ))}
    </StyleContainer>
  )
}