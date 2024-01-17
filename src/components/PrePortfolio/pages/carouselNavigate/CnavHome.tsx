import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import './style.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import { NavLink } from 'react-router-dom';
import { PortRoute } from '../../contentPort';
import { Card, ContainerCard } from './style';
import { ArrowFatLineRight } from 'phosphor-react';


export function CnavHome() {
  const gerarNumeroAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    return numeroAleatorio;
  };
  const numero: number = gerarNumeroAleatorio();
  console.log(typeof numero);


  return (
    <ContainerCard id='style'>
      <h1>Veja mais Projetos <ArrowFatLineRight size={32} /> </h1>
      <div className="carouselContainer">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide key={PortRoute[numero + 5 ? numero + 5 : numero - 5].path}>
            <NavLink className='decorationNone' to={PortRoute[numero + 5 ? numero + 5 : numero - 5].path}>
              <Card>
                <img loading="lazy" id='image' src={PortRoute[numero + 5 ? numero + 5 : numero - 5].img} />
                <h2 className='textSpace h2'>{PortRoute[numero + 5 ? numero + 5 : numero - 5].h1}</h2>
              </Card>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide key={PortRoute[numero - 4 ? numero - 4 : numero + 2].path}>
            <NavLink className='decorationNone' to={PortRoute[numero - 4 ? numero - 4 : numero + 2].path}>
              <Card>
                <img loading="lazy" id='image' src={PortRoute[numero - 4 ? numero - 4 : numero + 2].img} />
                <h2 className='textSpace h2'>{PortRoute[numero - 4 ? numero - 4 : numero + 2].h1}</h2>
              </Card>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide key={PortRoute[numero - 1 ? numero - 1 : numero + 10].path}>
            <NavLink className='decorationNone' to={PortRoute[numero - 1 ? numero - 1 : numero + 10].path}>
              <Card>
                <img loading="lazy" id='image' src={PortRoute[numero - 1 ? numero - 1 : numero + 10].img} />
                <h2 className='textSpace h2'>{PortRoute[numero - 1 ? numero - 1 : numero + 10].h1}</h2>
              </Card>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide key={PortRoute[numero + 3 ? numero + 3 : numero - 5].path}>
            <NavLink className='decorationNone' to={PortRoute[numero + 3 ? numero + 3 : numero - 5].path}>
              <Card>
                <img loading="lazy" id='image' src={PortRoute[numero + 3 ? numero + 3 : numero - 5].img} />
                <h1 className='textSpace h2'>{PortRoute[numero + 3 ? numero + 3 : numero - 5].h1}</h1>
              </Card>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide key={PortRoute[numero - 2 ? numero - 2 : numero + 10].path}>
            <NavLink className='decorationNone' to={PortRoute[numero - 2 ? numero - 2 : numero + 10].path}>
              <Card>
                <img loading="lazy" id='image' src={PortRoute[numero - 2 ? numero - 2 : numero + 10].img} />
                <h2 className='textSpace h2'>{PortRoute[numero - 2 ? numero - 2 : numero + 10].h1}</h2>
              </Card>
            </NavLink>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </ContainerCard>

  );
}