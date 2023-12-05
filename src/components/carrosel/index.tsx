import { HashLink as Link } from 'react-router-hash-link';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';

import car1 from '../../assets/carrosel/Artboard-3_1.jpg'
import car2 from '../../assets/carrosel/Artboard-3_2.jpg'
import car3 from '../../assets/carrosel/Artboard-3_3.jpg'
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
        />
        <Carousel.Caption className='desfoque carText'>

          <Fade top duration={2000} delay={500}>
            <h3></h3>
            <p>Recuperamos seu crédito por meio de uma Gestão de Carteira Humanizada.</p>
            <Nav.Link type="button" className="nav-links ms-auto me-auto btn"
              as={Link}
              to={"/faleconosco"}
            >Saiba mais
            </Nav.Link>
          </Fade>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
        <video autoPlay loop muted
          className="d-block w-100"
          src={car2}
        />

        <Carousel.Caption className='desfoque'>
          <Fade top duration={2000} delay={500}>
            <h3></h3>
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
        />

        <Carousel.Caption className='desfoque'>
          <Fade top duration={2000} delay={500}>
            <h3></h3>
            <p>
              Atendimento individualizado, pessoal e próximo.
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