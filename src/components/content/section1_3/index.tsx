import { NavLink } from "react-router-dom"
import { StyledSection } from "./section1_3"

interface InterSection1_3{
  id?: string,
  title: string,
  subTitle?: string,
  text: string,
  btnText: string,
  img1: string,
  img2: string
}
export const Section1_3 = ({ btnText, img1, img2, text, title, subTitle, id} : InterSection1_3) => {
  return(
    <StyledSection id={id}>     
      <img  src={img1} /> 
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
      <img  src={img2} />
    </StyledSection>
  )
}