import styled from "styled-components"

export const FirstStyle = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  height:60vh;

  
  
  @media (max-width: 1280px) {
  }

  @media (max-width: 800px) {
    display: none;
  }
 
  

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 25%;
    min-height: 20rem;
    gap: 1rem;

    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    background-color: ${props => props.theme['gray-600']};
    opacity: 70%;


    padding: 2rem;
    border-radius: 10px;
    
    h1 {
      font-size: 1.3rem;
      color: ${props => props.theme['rb-papaia']};
    }
    h2{
      font-family: 'Oldenburg', cursive;
      color: ${props => props.theme['rb-papaia']};
    }
    h3 {
      font-size: 1rem;
    }
    p{
      font-size: 1.1rem
    }

    
  }
  
  img {
    display: flex;
    align-items: center;
    justify-content: center;    
    background-color: transparent;
    width: 7rem;
    height: 7rem;
    transition: all .2s ease-in-out; 

    &:hover { 
      transform: scale(1.1);      
    }
  }
  
  h2{
      color: ${props => props.theme['gray-600']};
      opacity: 0.9;
      font-size: 2.1rem;
      font-size: 1.5rem;
    }
    span{
      color: ${props => props.theme['blue-500']};
    }

    p{
      color: ${props => props.theme['gray-500']};
      font-weight: bold;
      opacity: 0.9;
    }
  
`