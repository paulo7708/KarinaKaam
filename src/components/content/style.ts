import styled from 'styled-components'

import endSectionBg from "../../assets/endSectionBg.jpg"
import abstrato from '../../assets/abstrato.png'

export const BodyContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  

  width: 100%;
  max-width: 1280px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

`
export const ImgIcon = styled.div`
  @media (min-width: 800px) {
    margin: 3rem;
  }
  @media (max-width: 800px) {    
    margin: 3rem;
  
}
`
export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 10rem;
  height: 50vh;

  background-image: url(${abstrato});
  background-repeat: no-repeat;
  background-size: cover;  

  img {
    min-width: 35%;
    border-radius: 20px;
    transition: all .2s ease-in-out;

    &:hover { 
      transform: scale(1.1);      
    }
  }

  @media (min-width: 801px) {
    display: none;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    height: 45vh;

    img {
      display: none;
    }

    div {
      h1 {
        font-size: 1rem;
      }
      h3 {        
        font-size: 0.8rem;
      }
      p {
        font-size: 0.8rem;
      }
    }

    
    
    article {
        a {
          color: ${props => props.theme['gray-600']};
          background: transparent;
        }
      }
  }

  

  
  div{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 75%;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -35px;
    border-radius: 10px;
    padding: 5rem 0;
    margin: 3rem 5rem;


    @media (max-width: 768px) {
      width: 100%;
      padding: 1rem 0;
    }

    h1{
      color: ${props => props.theme['gray-600']};
      opacity: 0.9;
    }
    span{
      color: ${props => props.theme['blue-500']};
    }
    h3 {
      font-family: Eras;
      color: ${props => props.theme['gray-400']};
    }

    p{
      color: ${props => props.theme['gray-500']};
      font-weight: bold;
      opacity: 0.9;
    }

    a{
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      width: 10rem;
      height: 2.2rem;
      border-radius: 20px;
      border: 1px solid ${props => props.theme['green-100']};
      color: ${props => props.theme['green-100']};
      text-decoration: none;
      background-color: transparent;
      opacity: 0.9;
      transition: all 0.2s ease-in-out;

        &:hover { 
          transform: scale(1.1);
          background-color: ${props => props.theme['blue-light']};     
        }
    }
    
  }

  
`
export const StartSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 0 6rem;
  height: 80vh;
  width: 100%;

  background-image: url(${abstrato});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  

  
  

  img {
    min-width: 28%;
    border-radius: 20px;
    transition: all .2s ease-in-out;
    margin-left: 5rem ;

    &:hover { 
      transform: scale(1.01);      
    }
  }
  @media (min-width: 1400px) {
    
    img {
      margin-left: 10rem;
    }
    article{
        display: none;
      }

  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    height: 80vh;
    

    div {
      
      h1 {
        font-size: 1.2rem;
      }
      h3 {
        font-size: 1.2rem;
      }
      p {
        font-size: 1rem;
      }
    }
    
    img {
      display: none;
    }
    article {
        a {
          color: ${props => props.theme['gray-600']};
          background: transparent;
        }
      }
    div {
      h1 {
        font-size: 1.3rem;
      }
    }
  }
  
  div{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 75%;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -35px;
    border-radius: 10px;
    padding: 5rem 0;
    margin: 3rem 9.5rem;

    @media (min-width: 1500px) {
      h1 {
        font-size: 3rem;
      }
      h3 {
        font-size: 1.2rem;
      }
      p {
        font-size: 2rem;
      }
      width: 30%;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 1rem 0;      
      
    }
    
    h1{
      font-family: 'Eras';
      color: ${props => props.theme['gray-100']};
      opacity: 0.9;
      text-shadow: -2px 1px 2px black;
    }
    span{
      color: ${props => props.theme['white']};
      text-shadow: -2px 1px 2px black;
    }

    p{
      color: ${props => props.theme['gray-100']};
      font-weight: bold;
      opacity: 0.9;
      
    }

    a{
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      width: 10rem;
      height: 2.2rem;
      border-radius: 20px;
      border: 1px solid ${props => props.theme['gray-400']};
      color: #fff;
      text-decoration: none;
      opacity: 0.9;
      transition: all 0.2s ease-in-out;

        &:hover { 
          transform: scale(1.1);
          background-color: ${props => props.theme['blue-light']};     
        }
    }
  }
  
  
`

export const Section2_1 = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 6rem;
  height: 50vh;
  


  img {
      min-width: 32%;
      border-radius: 20px;
      transition: all .2s ease-in-out; 
      margin-right: 3rem ;
      
      &:hover { 
        transform: scale(1.1);      
      }
  }

  @media (min-width: 800px) {
    display: none;
    /* img {
      margin-right: 10rem;
    }
    div {
      margin: 3rem 9rem;
    } */
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    height: 40vh;

    div {
      h1 {
        font-size: 1rem;
      }
      h3 {
        font-size: 0.8rem;
      }
      p {
        font-size: 0.8rem;
      }
      article {
        a {
          background: transparent;
        }
      }
    }

    img {
      display: none;
    }
  }
  
  div{
    display: flex;
    flex-direction: column;    
    gap: 2rem;
    max-width: 75%;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -35px;
    border-radius: 10px;
    padding: 5rem 0;
    margin: 3rem 5rem;
    
    @media (max-width: 768px) {
      width: 100%;
      padding: 1rem 0;
    }
    
    h1{
      color: ${props => props.theme['gray-600']};
      opacity: 0.9;
    }
    span{
      color: ${props => props.theme['blue-500']};
    }
    h3 {
      font-family: Eras;
      color: ${props => props.theme['gray-400']};
    }

    p{
      color: ${props => props.theme['gray-500']};
      font-weight: bold;
      opacity: 0.9;
    }

    a{
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      width: 10rem;
      height: 2.2rem;
      border-radius: 20px;
      border: 1px solid ${props => props.theme['green-100']};
      color: ${props => props.theme['green-100']};
      text-decoration: none;
      opacity: 0.9;
      transition: all 0.2s ease-in-out;

        &:hover { 
          transform: scale(1.1);   
        }
    }
  }

`

export const Section3_1 = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 0 6rem;
  height: 70vh;
  
  img {
    width: 30%;
    border-radius: 20px;
    transition: all .2s ease-in-out; 
    margin-left: 5rem ;

    &:hover { 
      transform: scale(1.1);      
    }
  }

  @media (min-width: 800px) {
    display: none;
    /* img {
      margin-left: 10rem;
    }
    div {
      margin: 3rem 10rem;
    } */
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    height: 55vh;

    img {
      display: none;
    }

    div {
      h1 {
        font-size: 1rem;
      }
      h3 {
        font-size: 0.8rem;
      }
      p {
        font-size: 0.8rem;
      }
    }    
    
    article {
        a {
          color: ${props => props.theme['gray-600']};
          background: transparent;
        }
      }
  }

  

  div{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 75%;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -35px;
    border-radius: 10px;
    padding: 5rem 0;
    margin: 3rem 5rem;

    @media (max-width: 768px) {
      width: 100%;
      padding: 1rem 0;
    }

    h1{
      color: ${props => props.theme['gray-600']};
      opacity: 0.9;
    }
    span{
      color: ${props => props.theme['blue-500']};
    }
    h3 {
      font-family: Eras;
      color: ${props => props.theme['gray-400']};
    }

    p{
      color: ${props => props.theme['gray-500']};
      font-weight: bold;
      opacity: 0.9;
    }

    a{
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      width: 10rem;
      height: 2.2rem;
      border-radius: 20px;
      border: 1px solid ${props => props.theme['green-100']};
      color: ${props => props.theme['green-100']};
      text-decoration: none;
      background-color: transparent;
      opacity: 0.9;
      transition: all 0.2s ease-in-out;

        &:hover { 
          transform: scale(1.1);
             
        }
    }
  }
  
`
export const EndSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  /* background-image: url(${endSectionBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center; */
  background-color: ${(props) => props.theme["rb-cream"]};
  height: 75vh;
  width: 100%;

  img {
    width: 20%;
    height: 20%;
    border-radius: 20px;
  }

  @media (min-width: 1400px) {
    img {
      margin-right: 10rem;
    }
    div {
      margin: 3rem 10rem;
    }
  }
  @media (max-width: 1400px) {
    
    div {
      h1 {
        font-size: 1.8rem;
      }
    }
  }

  @media (max-width: 850px) {    
      display: none;    
  }
  
  div{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 35%;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -35px;
    border-radius: 10px;
    padding: 4rem 0;
    margin: 3rem 5rem;

    @media (max-width: 768px) {
      width: 80%;
      padding: 1rem 0;
    }

    h1{
      font-family: 'Oldenburg', cursive;
      color: ${props => props.theme['white']};
      text-shadow: -2px 1px 2px black;
    }
    span{
      color: ${props => props.theme['gray-100']};
      text-shadow: -2px 1px 2px black;
    }

    p{
      color: ${props => props.theme['gray-100']};
      text-shadow: -2px 1px 2px black;
      font-weight: bold;
      opacity: 0.9;
    }

    a{
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      width: 10rem;
      height: 2.2rem;
      border-radius: 20px;
      border: 1px solid ${props => props.theme['gray-400']};
      color: #fff;
      text-decoration: none;
      background-color: #00958f;
      opacity: 0.9;
      transition: all 0.2s ease-in-out;

        &:hover { 
          transform: scale(1.1);
          background-color: ${props => props.theme['blue-light']};     
        }
    }
  }
`