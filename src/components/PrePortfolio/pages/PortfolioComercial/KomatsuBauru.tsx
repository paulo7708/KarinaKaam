import { StyleContainer } from './style'

import img0 from '../../../../assets/Projeto comercial/Filial Komatsu Bauru/00.png'
import img1 from '../../../../assets/Projeto comercial/Filial Komatsu Bauru/01.png'
import img2 from '../../../../assets/Projeto comercial/Filial Komatsu Bauru/02.png'
import img4 from '../../../../assets/Projeto comercial/Filial Komatsu Bauru/04.png'
import img5 from '../../../../assets/Projeto comercial/Filial Komatsu Bauru/05.png'
import img7 from '../../../../assets/Projeto comercial/Filial Komatsu Bauru/07.png'
import img8 from '../../../../assets/Projeto comercial/Filial Komatsu Bauru/08.png'
import img9 from '../../../../assets/Projeto comercial/Filial Komatsu Bauru/09.png'
import img10 from '../../../../assets/Projeto comercial/Filial Komatsu Bauru/10.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img0,img1, img2, img4, img5, img7,img8,img9,img10]

export const KomatsuBauru = () => {
  
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