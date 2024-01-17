import { StyleContainer } from './style'
 
import img1 from '../../../../assets/Projeto comercial/Studio Pilates - Fortaleza/01Resultado.png'
import img2 from '../../../../assets/Projeto comercial/Studio Pilates - Fortaleza/02Resultado.png'
import img3 from '../../../../assets/Projeto comercial/Studio Pilates - Fortaleza/03Resultado.png'
import img4 from '../../../../assets/Projeto comercial/Studio Pilates - Fortaleza/04Resultado.png'
import { CarouselNavigate } from '../carouselNavigate'

const imagens = [img1, img2, img3, img4]

export const StudioPilatesFortaleza = () => {
  
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