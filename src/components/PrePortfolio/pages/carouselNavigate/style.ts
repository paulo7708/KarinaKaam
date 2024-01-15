import { styled } from "styled-components"

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1400px;
  margin: 3rem 2rem 3rem 2rem;
  @media(max-width: 430px){
      h1{
        font-size: 1.7rem;
      }
    }

`

export const Card = styled.div`
  
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    border-radius: 2px;
    gap: 2rem;
    @media(max-width: 430px){
      width: 320px;
      height: 450px;
      margin-left: 5rem;
    }
    
    img{
        box-shadow: #B09987 -5px 5px, #D3BAA6 -10px 10px, #FFDDBD -15px 15px, #F5F2F0 -20px 20px, rgba(102, 40, 143, 0.05) -25px 25px;
        width: 40rem;
        height: 22rem;
        border-radius: 10px;
        object-fit: cover;
      }

    a{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: black;
      transition: 0.2s;
      &:hover {
        scale: 1.04;
      }
      .h2{
        font-size: 1rem;        
      }
    }
  

  
`