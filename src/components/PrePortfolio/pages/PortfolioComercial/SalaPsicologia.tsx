import { StyleContainer } from './style'


import img1 from '../../../../assets/Projeto comercial/Sala Psicologia/01Resultado.png'
import img2 from '../../../../assets/Projeto comercial/Sala Psicologia/02Resultado.png'
import img3 from '../../../../assets/Projeto comercial/Sala Psicologia/03Resultado.png'
import img4 from '../../../../assets/Projeto comercial/Sala Psicologia/04Resultado.png'
import img5 from '../../../../assets/Projeto comercial/Sala Psicologia/05Resultado.png'
import img6 from '../../../../assets/Projeto comercial/Sala Psicologia/06Resultado.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2, img3, img4, img5, img6]

export const SalaPsicologia = () => {
  
  return (
    <>
      <StyleContainer>
        {imagens.map((imagem) => (
          <img loading="lazy" key={imagem} src={imagem} alt={imagem} />
        ))}
        <CarouselNavigate />
      </StyleContainer>
      
    </>
  )
}