import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade'
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
        <Fade bottom duration={3000} delay={500}>
          <h3>{subTitle}</h3>
        </Fade>
        <Fade bottom duration={3000} delay={1200}>
          <h1>
          <span>———</span>&nbsp;&nbsp;{title}
          </h1>
        </Fade>
        <Fade bottom duration={3500} delay={1200}>
          <p>
            {text}
          </p>
        </Fade>
        <Fade bottom duration={2500} delay={1200}>
          <article>
            <NavLink to={"/faleconosco"}>{btnText}</NavLink>
          </article>
        </Fade>
      </div>




    </VideoSection>

  );
}
