import styled from 'styled-components'

export const PortStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin:10rem 0 5rem 0;
  gap: 1rem;

  div{
    p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-size: 1.6rem;
      text-align: center;
      color: #4B4B4D;
      font-weight: 600;
      text-shadow: 1px 0px 0px #4B4B4D;
    }
  }

  a{
    text-decoration: none;
    margin-top: 0.5rem;
    color: black;
    font-size: 2rem;
    
  }
`

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1400px;

`
export const Card = styled.div`
  
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 2px transparent;
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