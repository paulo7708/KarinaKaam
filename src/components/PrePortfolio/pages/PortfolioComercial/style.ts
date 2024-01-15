import { styled } from "styled-components";


export const StyleContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  width: 100%;
  max-width: 1280px;
  margin: 1rem auto 0;
  padding: 10rem 0 0 0;
  gap: 3rem;
  @media(max-width: 450px){
    
  }
  img{
    max-width: 80%;    
  }  
`