import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto comercial/Saláo de Beleza - Gabriela Garcia - Bauru/01Resultado.png'
import img2 from '../../../../assets/Projeto comercial/Saláo de Beleza - Gabriela Garcia - Bauru/02Resultado.png'
import img3 from '../../../../assets/Projeto comercial/Saláo de Beleza - Gabriela Garcia - Bauru/03Resultado.png'
import img4 from '../../../../assets/Projeto comercial/Saláo de Beleza - Gabriela Garcia - Bauru/04Resultado.png'
import img5 from '../../../../assets/Projeto comercial/Saláo de Beleza - Gabriela Garcia - Bauru/05Resultado.png'
import img6 from '../../../../assets/Projeto comercial/Saláo de Beleza - Gabriela Garcia - Bauru/06Resultado.png'
import img7 from '../../../../assets/Projeto comercial/Saláo de Beleza - Gabriela Garcia - Bauru/07Resultado.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2, img3, img4, img5, img6, img7]

export const SalaoGabrielaGarcia = () => {
  
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