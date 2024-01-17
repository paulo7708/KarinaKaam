import { StyleContainer } from './style'
import img1 from '../../../../assets/Projeto comercial/Clara Ferreira - Bauru Shopping/01Resultado.png'
import img2 from '../../../../assets/Projeto comercial/Clara Ferreira - Bauru Shopping/02Resultado.png'
import img3 from '../../../../assets/Projeto comercial/Clara Ferreira - Bauru Shopping/03Resultado.png'
import img4 from '../../../../assets/Projeto comercial/Clara Ferreira - Bauru Shopping/04Resultado.png'
import img5 from '../../../../assets/Projeto comercial/Clara Ferreira - Bauru Shopping/05Resultado.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2, img3, img4, img5]

export const ClaraFerreira = () => {

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