import { styled } from "styled-components"

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1400px;
  margin: -3rem 2rem 3rem 2rem;

`
export const Card = styled.div`
  
  
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
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
        box-shadow: #B09987 -5px 5px, #D3BAA6 -10px 10px, #FFDDBD -15px 15px, #F5F2F0 -20px 20px, rgba(102, 40, 143, 0.05) -25px 25px;
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