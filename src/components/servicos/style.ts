import styled from 'styled-components'

export const PortStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 1rem;

  /* config Rocket */
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

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
  }

  .title{
    font-size: 1.5rem;
  }

  h2{
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    text-align: center;
  }
  strong{
    font-size: 1.4rem;
    color: ${(props) => props.theme["gray-300"]};
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
    @media (max-width: 800px){
      padding: 0.8rem 2rem;

        p{      
        font-size: 1.1rem;      
      };
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
  flex-wrap: wrap;
  gap: 2rem;

  
`
export const Card = styled.div`
  
  
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: solid 2px black; */
    border-radius: 2px;

    width: 258px;
    height: 172px;
    background-color: ${(props) => props.theme['gray-600']};
    padding: 1rem;
    

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