import { NavLink } from 'react-router-dom';
import { StyledSection } from './section1_2';
import Slide from 'react-reveal/Slide'

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
        <Slide top duration={2500} delay={200}>
          <article>
            <NavLink to={"/faleconosco"}>{btnText}</NavLink>
          </article>
        </Slide>
      </div>
      <img src={img} />
    </StyledSection>

  );
}

{/* <VideoSection>
      <video  src={videoleft} autoPlay loop muted />
    
    </VideoSection> */}