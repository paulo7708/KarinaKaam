import styled from 'styled-components'

export const PortStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  text-align: justify;

  /* config Rocket */
  width: 100%;
  max-width: 1120px;
  margin: 1rem auto 0;
  padding: 0 1.5rem 2rem 1.5rem;

  @media (max-width: 800px) {
    h2{
      font-size: 1.2rem;
    }
  }
  p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-size: 1.2rem;
      text-align: center;
      color: ${(props) => props.theme["gray-300"]};
      font-weight: 600;
      text-shadow: 1px 0px 0px #4B4B4D;
      text-align: justify;
      @media (max-width: 800px) {
        font-size: 1rem
      } 
  }

  .title{
    padding: 2rem 0;
    font-size:1.5rem;
    border:none;
    color:#E1E1E6;
    @media (max-width: 800px) {
      display: none;
    }
  }

  span{
    color:#E1E1E6;
    font-size:1.5rem;
    color: #E1E1E6;
    font-weight: 600;
    text-shadow: 1px 0px 0px #E1E1E6;
        
  }

  h2{
    -webkit-text-fill-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-align: center;
    @media (max-width: 800px) {
      padding-top: 1rem;
    }    
  }
  strong{
    font-size: 1.4rem;
    color: ${(props) => props.theme["gray-300"]};
    @media (max-width: 800px) {
        font-size: 1rem
      }
  }

  a{
    text-decoration: none;
    margin-top: 0.5rem;
    font-size: 2rem;
  }
`
export const PortBtn = styled.a`
  text-decoration: none;
    margin-top: 0.5rem;
    font-size: 2rem;
    border: 3px solid ${(props) => props.theme["gray-300"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 0.8rem 5rem;
    transition: 0.2s;
    @media (max-width: 800px) {
        font-size: 1rem
      }

    &:hover {
      scale: 1.04;
      background-color: ${(props) => props.theme['kam-blue']};
      color:  ${(props) => props.theme['kam-pink']};
      border: 3px solid ${(props) => props.theme["kam-pink"]};
    }

    
`

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2rem;

  @media(max-width:900px){
    display: flex;
    flex-direction: column;
  }

  
`
export const Card = styled.div`
  
  
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: solid 2px black; */
    border-radius: 2px;

    width: 25%;
    background-color: ${(props) => props.theme['gray-600']};
    
    padding: 1rem 2rem;
    p {
      text-align: center;
      @media (max-width: 800px) {
        font-size: 0.85rem
      }
    }
    
    @media(max-width:900px){
      width: 100%;
      height: 100px;
    }

    a{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      transition: 0.2s;
      
      

      &:hover {
        scale: 1.04;
      }

      
    }
  

  
`