import { NavLink } from 'react-router-dom';



import { VideoSection } from './section1_4';

interface  Section1_4{
  id?: string,
  title: string,
  subTitle: string,
  text: string,
  btnText: string,
  video?: string,
  image?: string,
}

export function Section1_4({btnText, text, title, subTitle, id, video }: Section1_4) {
  return (
    <VideoSection id={id}>
      <video src={video} autoPlay loop muted />
      
      <div>
        <h3>{subTitle}</h3>
        <h1>
          {title}
        </h1>
        <p>
          {text}
        </p>
        <article><NavLink to={"/faleconosco"}>{btnText}</NavLink></article>
      </div>
    </VideoSection>

  );
}