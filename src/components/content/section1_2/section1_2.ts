import styled from "styled-components";

export const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem 10rem;
  width: 100%;
  height: 80vh;
  z-index: 2;

  @media (min-width: 1500px) {
    padding: 0;
    height: 60vh;

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

  @media (min-width: 1500px) {
    padding: 2rem 0;
    height: 60vh;
  }

  @media (min-width: 1300px) {
    /* padding: 0 5rem; */
    height: 70vh;
  }

  

  img {
    object-position: top;
    width: 35%;
    object-fit: cover;
    border-radius: 10px ;
  }   

    

  @media (max-width: 1440px) {
    /* margin-bottom: -9.8rem; */
    
  }

  

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;

    img {
      width: 100%;
      min-height: 18rem;
      object-position: top;
    }
  }
  
  div{
    display: flex;
    justify-content: center;
    flex-direction: column;    
    gap: 1rem;
    max-width: 75%;
    height: 100%;
    /* box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -35px; */
    padding: 0 4rem;
    
    
    @media (max-width: 800px) {
      width: 80%;
      padding: 1rem 0;
      margin: 01rem 0 1rem 3rem;

      h1 {
        font-size: 0.8rem;
      }
      h3 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.8rem;
      }
      
    }
    
    h1{
      font-size: 2.3rem;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      opacity: 0.9;

      @media (max-width: 800px) {
        font-size: 1.5rem;
      }
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
      border: 1px solid ${props => props.theme['rb-papaia2']};;
      border-radius: 15px;
      color: ${props => props.theme['rb-papaia']};;
      font-weight: bold;
      font-size:1.1rem;
      background-color: transparent;
      opacity: 0.9;
      transition: all 0.2s ease-in-out;

      &:hover { 
          transform: scale(1.1);
          color: ${props => props.theme['rb-papaia']};     
          border-color: ${props => props.theme['rb-papaia2']};     
        }

        @media (max-width: 800px) {
        font-size: 0.8rem;
        height: 2rem;
        width: 8rem;
      }
    }
  }
  
`