import { Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./style.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { NavLink } from 'react-router-dom';
import { PortRoute } from '../../contentPort';
import { Card, ContainerCard } from './style';
import { ArrowFatLineRight } from 'phosphor-react';


export function CarouselNavigate() {
  const gerarNumeroAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    return numeroAleatorio;
  };
  const numero: number = gerarNumeroAleatorio();
  console.log(typeof numero);


  return (
    <ContainerCard id='style'>
      <h1>Veja mais Projetos <ArrowFatLineRight size={32} /> </h1>
      <Swiper
        // install Swiper modules
        modules={[Scrollbar, A11y, Autoplay]}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        
        <SwiperSlide>
          <Card key={PortRoute[numero+5 ? numero+5 : numero-5].path}>
            <NavLink to={PortRoute[numero+5 ? numero+5 : numero-5].path}>
              <img id='image' src={PortRoute[numero+5 ? numero+5 : numero-5].img} />
              <h1 className='textSpace'>{PortRoute[numero+5 ? numero+5 : numero-5].h1}</h1>
            </NavLink>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card key={PortRoute[numero-4 ? numero-4 : numero+2].path}>
            <NavLink to={PortRoute[numero-4 ? numero-4 : numero+2].path}>
              <img id='image' src={PortRoute[numero-4 ? numero-4 : numero+2].img} />
              <h1 className='textSpace'>{PortRoute[numero-4 ? numero-4 : numero+2].h1}</h1>
            </NavLink>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card key={PortRoute[numero-1 ? numero-1 : numero+10].path}>
            <NavLink to={PortRoute[numero-1 ? numero-1 : numero+10].path}>
              <img id='image' src={PortRoute[numero-1 ? numero-1 : numero+10].img} />
              <h1 className='textSpace'>{PortRoute[numero-1 ? numero-1 : numero+10].h1}</h1>
            </NavLink>
          </Card>
        </SwiperSlide>
        
        {/* <SwiperSlide>
          <Card key={PortRoute[numero+3 ? numero+3 : numero-5].path}>
            <NavLink to={PortRoute[numero+3 ? numero+3 : numero-5].path}>
              <img  id='image' src={PortRoute[numero+3 ? numero+3 : numero-5].img} />
              <h1 className='textSpace'>{PortRoute[numero+3 ? numero+3 : numero-5].h1}</h1>
            </NavLink>
          </Card>
        </SwiperSlide> */}
        
        



      </Swiper>
    </ContainerCard>

  );
}