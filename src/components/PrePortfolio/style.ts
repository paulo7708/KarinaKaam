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

  .title{
    padding: 2rem 0;
    font-size:1.5rem;
    border:none;
    color:#E1E1E6;
  }

  span{
    color:#E1E1E6;
    font-size:1.5rem;
    color: #E1E1E6;
    font-weight: 600;
    text-shadow: 1px 0px 0px #E1E1E6;
  }

  h2{
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-align: center;
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
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: solid 2px transparent;
    border-radius: 2px;
    gap: 2rem;

    width: 438px;
    

    a{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: black;
      transition: 0.2s;
      
      img{
        width: 428px;
        height: 222px;
        @media(max-width: 430px){
          width: 328px;
          height: 182px;
        }
      }

      &:hover {
        scale: 1.04;
      }
      h1{
        font-size: 1.2rem;
      }
    }
  

  
`