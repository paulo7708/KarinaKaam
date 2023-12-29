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
  max-width: 1280px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  

  p {
      
      font-size: 1.5rem;
      text-align: center;
      color: ${(props) => props.theme["gray-300"]};
      font-weight: 600;
      text-shadow: 1px 0px 0px #4B4B4D;
      
  }

  h2{
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    text-align: center;
    
  }
  h3{
    color: ${(props) => props.theme["gray-300"]};
    padding-bottom: 2rem;
  }

  a{
    text-decoration: none;
    margin-top: 0.5rem;
    font-size: 2rem;
  }
`

export const PortBtn = styled.p`
  text-decoration: none;
    margin-top: 0.5rem;
    font-size: 2rem;
    border: 3px solid ${(props) => props.theme["gray-300"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 0.01rem 5rem;
    transition: all 0.2s ease-in-out;
    @media (max-width: 800px){
      padding: 0.8rem 2rem;

        p{      
        font-size: 1.1rem;      
      };
    }

    &:hover { 
      transform: scale(1.1);
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
  gap: 4rem;

  
`
export const Card = styled.div`
  
  @media (max-width: 1180px) {
    width: 100%;
  }
  
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: solid 2px black; */
    border-radius: 2px;
    width: 40%;
    
    

    a{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      transition: 0.2s;      
      p{
      font-size: 1.1rem;
        
      }
      

      .img1{
        box-shadow: #B09987 -5px -5px, #D3BAA6 -10px -10px, #FFDDBD -15px -15px, transparent -20px -20px;
        width: 358px;
        height: 172px;
      }
      .img2{
        box-shadow: #B09987 5px -5px, #D3BAA6 10px -10px, #FFDDBD 15px -15px, transparent 20px -20px;
        width: 358px;
        height: 172px;
      }
      .img3{
        box-shadow: #B09987 -5px 5px, #D3BAA6 -10px 10px, #FFDDBD -15px 15px, transparent -20px 20px;
        width: 358px;
        height: 172px;
      }
      .img4{
        box-shadow: #B09987 5px 5px, #D3BAA6 10px 10px, #FFDDBD 15px 15px, transparent 20px 20px;
        width: 358px;
        height: 172px;
      }

      &:hover {
        scale: 1.04;
      }

      
    }
    
    h1{
      font-size: 2rem;
      padding-top: 1rem;
    }

  
`