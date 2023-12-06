import styled from "styled-components";

export const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 2;

  @media (min-width: 1500px) {
    margin: 10rem 5rem 10rem 0rem;
    padding: 0;

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
  }

  @media (max-width: 1280px) {
    padding: 10rem 0;
  }
  

  img {
    object-position: top;
    width: 35%;
    object-fit: cover;
    border-radius: 10px ;
  }   


  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 0;
    img {
      width: 100%;
      object-position: top;
      height: 350px;
    }
  }
  
  div{
    display: flex;
    justify-content: center;
    flex-direction: column;    
    gap: 1rem;
    
    /* box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -35px; */
    
    
    @media (min-width: 1281px) {
      max-width: 75%;
      padding: 0 4rem;
    }

    @media (max-width: 1280px) {
      margin: 0 2rem;
    }
      
    @media (max-width: 800px) {
      width: 100%;
      padding: 1rem 0;
      margin: 0;

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
    color:#E1E1E6;
    font-size:1.5rem;
    color: #E1E1E6;
    font-weight: 600;
    text-shadow: 1px 0px 0px #E1E1E6;
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