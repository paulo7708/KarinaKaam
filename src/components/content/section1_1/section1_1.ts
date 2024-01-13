import styled from "styled-components";
import imgRight from '../../../assets/quadrado1.png'


export const VideoSection = styled.div`
  /* box-shadow: 10px 10px 50px -20px #202024; */
  display: flex;
  width: 100%;
  background-color: transparent;


  @media (min-width: 1500px) {
    padding: 0rem 0rem 0rem 4rem ;

    div {
      h1{
          font-size: 2.5rem;
        }
      h3 {
        font-size: 2rem;
      }
      p{
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 1300px) {
    padding: 0rem 0rem 0rem 1rem ;
  }

  video {
    object-position: center;
    width: 50%;
    height: 100%;
    object-fit: cover;
  }  

  img {
    object-position: top;
    width: 35%;
    object-fit: cover;
    border-radius: 0 20px 20px 0 ;
  }
  
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    img{
      width: 100%;
      max-height: 20rem;
      object-position: top;
    }
    
  }   

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
    
    gap: 1rem;
    max-width: 65%;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -35px;
    border-radius: 10px;
    

    @media (min-width: 1301px) {
      margin: 0 5rem;
    }

    @media (max-width: 1280px) {
      margin: 0 2rem;
    }

    @media (max-width: 800px) {
      margin: 0;
      max-width: 100%;
      padding: 2rem 0;

      h1 {
        font-size: 0.8rem;
      }
      h3 {
        font-size: 1.2rem;
      }
      p {
        font-size: 1.1rem;
      }
      
    }

    h1{ 
      opacity: 0.9;
      font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

      /* @media (min-width: 1500px) {
        h1{
          font-size: 5rem;
        }
      } */

      @media (max-width: 1499px) {
        font-size: 2.3rem;
      }

      @media (max-width: 800px) {
        font-size: 1.5rem;        
      }
    }
    span{
    }
    h3 {
      font-family: Eras;
      color: ${props => props.theme['gray-400']};
    }

    p{
      color: ${props => props.theme['gray-500']};
      font-weight: bold;
      opacity: 0.9;
      text-align: justify;
    }

    a{
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      gap: 0.5rem;
      width: 12rem;
      height: 3rem;
      border: 2px solid ${props => props.theme['gray-300']};;
      border-radius: 5px;
      color: ${props => props.theme['gray-300']};;
      font-weight: bold;
      font-size:1.1rem;
      background-color: transparent;
      opacity: 0.9;
      transition: all 0.2s ease-in-out;

      &:hover { 
          transform: scale(1.1);
          color: ${props => props.theme['kam-pink']};     
          border-color: ${props => props.theme['kam-pink']};
          background-color: ${props => props.theme["kam-blue"]} ;
        }

      @media (max-width: 800px) {
        font-size: 0.8rem;
        height: 2rem;
        width: 8rem;
      }
    }
  }
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80%;
    padding: 8rem;
    gap: 2rem;

    background-image: url(${imgRight});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    

    @media (max-width: 768px) {
    display: none;
  }} */
  
`