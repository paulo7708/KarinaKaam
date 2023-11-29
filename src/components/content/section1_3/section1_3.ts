import styled from "styled-components";

export const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 80vh;
  z-index: 1;

  img {
    width: 30%;
    height: 100%;
  }


  @media (max-width: 768px) {
  display: none;
  } 

  @media (min-width: 1441px) {
    /* margin-bottom: -12.15rem; */
  }
  

  @media (max-width: 1440px) {
    /* margin-bottom: -9.8rem;
    margin-top: -0.15rem; */
  }

  @media (max-width: 800px) {
  display: none;
  }

  /* @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 0;

    div {
      h1 {
        font-size: 1.3rem;
      }
      h3 {
        font-size: 1rem;
      }
    }

    img {
      display: none;
    }
  } */
  
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;    
    gap: 1rem;
    max-width: 50%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -35px;
    padding: 0 3rem;
    
    @media (max-width: 768px) {
      width: 100%;
      padding: 1rem 0;
    }
    
    h1{
      font-size: 2rem;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
      text-decoration: none;
      gap: 0.5rem;
      width: 12rem;
      height: 3rem;
      border: 1px solid ${props => props.theme['green-100']};;
      border-radius: 30px;
      color: ${props => props.theme['green-100']};;
      font-weight: bold;
      font-size:1.1rem;
      background-color: transparent;
      opacity: 0.9;
      transition: all 0.2s ease-in-out;

      &:hover { 
          transform: scale(1.1);
          color: ${props => props.theme['green-400']};     
          border-color: ${props => props.theme['green-400']};     
        }
    }
  }
  
`