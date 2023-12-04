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
      font-size: 1.5rem;
      text-align: center;
      color: #4B4B4D;
      font-weight: 600;
      text-shadow: 1px 0px 0px #4B4B4D;
  }

  h2{
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
  }

  a{
    text-decoration: none;
    margin-top: 0.5rem;
    color: black;
    font-size: 2rem;
  }
`
export const PortBtn = styled.a`
  text-decoration: none;
    margin-top: 0.5rem;
    color: black;
    font-size: 2rem;
    border: 3px solid #4b4b4d;
    padding: 0.8rem 5rem;
    transition: 0.2s;

    &:hover {
      scale: 1.04;
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
    

    a{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: black;
      transition: 0.2s;
      
      img{
        width: 258px;
        height: 172px;
      }

      &:hover {
        scale: 1.04;
      }
    }
  

  
`