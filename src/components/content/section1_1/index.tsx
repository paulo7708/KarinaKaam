import Nav from 'react-bootstrap/Nav';
import { HashLink as Link } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import { VideoSection } from './section1_1';

interface Section1_1 {
  id?: string,
  title: string,
  subTitle: string,
  text: string,
  btnText: string,
  video?: string,
  image?: string,
}

export function Section1_1({ btnText, text, title, subTitle, id, image }: Section1_1) {
  return (
    <VideoSection id={id}>

      <img src={image} alt="" />
      <div>
        <Slide bottom duration={2000}>
          <h3>{subTitle}</h3>
        </Slide>
        <Slide bottom duration={2000} delay={500}>
          <h1>
            <span>———</span>&nbsp;&nbsp;{title}
          </h1>
        </Slide>
        <Slide bottom duration={2500} delay={200}>
          <p>
            {text}
          </p>
        </Slide>
        <Fade bottom duration={2500} delay={200}>
          <article>
            <Nav.Link to={"/faleconosco"} as={Link}>{btnText}</Nav.Link>
          </article>
        </Fade>
      </div>




    </VideoSection>

  );
}
