import { HashLink as Link } from 'react-router-hash-link';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import car1 from '../../assets/carrosel/Artboard-3_1.jpg'
import car2 from '../../assets/carrosel/Artboard-3_2.png'
import car3 from '../../assets/carrosel/Artboard-3_3.png'
import "./index.css"

import Fade from 'react-reveal/Fade'

function CarroselBootstrap() {
  return (
    <Carousel id='Home' fade className='carousel'>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src={car1}
          alt="First slide"
          loading="lazy"
        />
        <Carousel.Caption className='desfoque carText'>

          <Fade top duration={3000} delay={500}>
            <h3>ARQUITETURA E DESIGN DE INTERIORES</h3>

            <p>Ajudando à transformar seus ambientes em espaços criativos, e funcionais de maneira pratica e eficiente.</p>
            <Nav.Link type="button" className="nav-links ms-auto me-auto btn"
              as={Link}
              to={"/faleconosco"}
            >Saiba Mais
            </Nav.Link>
          </Fade>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src={car2}
          alt="Second slide"
          loading="lazy"
        />

        <Carousel.Caption className='desfoque carText'>
          <Fade top duration={2000} delay={500}>
            <h3>TRANSFORMANDO AMBIENTES SIMPLES EM LOCAIS CONFORTÁVEIS</h3>
            <p>Relacionamento e cuidado, tão importantes quanto o resultado.</p>
            <Nav.Link type="button" className="btn nav-links ms-auto me-auto"
              as={Link}
              to={"/faleconosco"}
            >Clique aqui
            </Nav.Link>
          </Fade>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src={car3}
          alt="Third slide"
          loading="lazy"
        />

        <Carousel.Caption className='desfoque carText'>
          <Fade top duration={2000} delay={500}>
            <h3>ARQUITETURA</h3>
            <p>
              Infraestrutura e  desenvolvimento de projetos arquitetônicos.
            </p>
            <Nav.Link type="button" className="btn nav-links ms-auto me-auto"
              as={Link}
              to={"/faleconosco"}
            >Saiba mais
            </Nav.Link>
          </Fade>


        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarroselBootstrap;