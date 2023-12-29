import { StyleContainer } from './style'

import img1 from '../../../../assets/Projeto comercial/Clara Ferreira - Bauru Shopping/01.png'
import img2 from '../../../../assets/Projeto comercial/Clara Ferreira - Bauru Shopping/02.png'
import img3 from '../../../../assets/Projeto comercial/Clara Ferreira - Bauru Shopping/03.png'
import img4 from '../../../../assets/Projeto comercial/Clara Ferreira - Bauru Shopping/04.png'
import img5 from '../../../../assets/Projeto comercial/Clara Ferreira - Bauru Shopping/05.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2, img3, img4, img5]

export const ClaraFerreira = () => {

  return (
    <>
      <StyleContainer>
        {imagens.map((imagem) => (
          <img key={imagem} src={imagem} alt={imagem} />
        ))}

      </StyleContainer>
      <CarouselNavigate />
    </>
  )
}