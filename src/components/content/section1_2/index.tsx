import { NavLink } from 'react-router-dom';
import { StyledSection } from './section1_2';
import Fade from 'react-reveal/Fade'

interface Section1_2 {
  id?: string,
  title?: string,
  subTitle?: string,
  text?: string,
  btnText?: string,
  img?: string,
}

export function Section1_2({ btnText, img, text, title, subTitle, id }: Section1_2) {
  return (
    <StyledSection id={id}>
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
        <Fade top duration={2500} delay={1200}>
          <article>
            <NavLink to={"/faleconosco"}>{btnText}</NavLink>
          </article>
        </Fade>
      </div>
      <img src={img} />
    </StyledSection>

  );
}

{/* <VideoSection>
      <video  src={videoleft} autoPlay loop muted />
    
    </VideoSection> */}