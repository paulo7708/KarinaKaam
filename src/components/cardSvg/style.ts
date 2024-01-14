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
    padding-bottom: 1.5rem;
    @media(max-width: 320px){
      font-size: 1.5rem;
    }
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
    @media (max-width: 450px){
      padding: 0.7rem 2rem;
      span{      
        font-size: 1.2rem;      
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
        @media(max-width: 320px){
          font-size: 0.9rem;
        }
      }
      

      .img1{
        box-shadow: #B09987 -5px -5px, #D3BAA6 -10px -10px, #FFDDBD -15px -15px, transparent -20px -20px;
        width: 358px;
        height: 172px;

        @media(max-width: 320px){
          width: 270px;
          height: 162px;
          margin-left: 1rem;
        }
      }
      .img2{
        box-shadow: #B09987 5px -5px, #D3BAA6 10px -10px, #FFDDBD 15px -15px, transparent 20px -20px;
        width: 358px;
        height: 172px;

        @media(max-width: 320px){
          width: 270px;
          height: 162px;
          margin-right: 1rem;
        }
      }
      .img3{
        box-shadow: #B09987 -5px 5px, #D3BAA6 -10px 10px, #FFDDBD -15px 15px, transparent -20px 20px;
        width: 358px;
        height: 172px;

        @media(max-width: 320px){
          width: 270px;
          height: 162px;
          margin-left: 0.9rem;
          margin-bottom: 1rem;
        }
      }
      .img4{
        box-shadow: #B09987 5px 5px, #D3BAA6 10px 10px, #FFDDBD 15px 15px, transparent 20px 20px;
        width: 358px;
        height: 172px;

        @media(max-width: 320px){
          width: 270px;
          height: 162px;
          margin-right: 0.9rem;
          margin-bottom: 1rem;
        }
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