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
  margin: 1rem auto 0;
  padding: 1rem 0;
  @media (max-width: 800px) {
    h2{
      font-size: 1.3rem;
    }
  }
  p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-size: 1.5rem;
      text-align: center;
      color: ${(props) => props.theme["gray-300"]};
      font-weight: 600;
      text-shadow: 1px 0px 0px #4B4B4D;
      @media (max-width: 800px) {
        display: none;
      }
  }

  h2{
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-align: center;
  }

  a{
    text-decoration: none;
    margin-top: 0.5rem;
    font-size: 2rem;
  }
`
export const PortBtn = styled.a`
    text-decoration: none;
    margin-top: 0.8rem;
    font-size: 2rem;
    border: 3px solid ${(props) => props.theme["gray-300"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 0.5rem 4rem;
    opacity: 0.9;
      transition: all 0.2s ease-in-out;
    @media (max-width: 800px){
      padding: 0.8rem 2rem;

        p{      
        font-size: 1.1rem;      
      };
    @media(max-width: 450px){
      padding: 0.8rem 2rem;
        span{      
          font-size: 1.5rem; 
      };
        width: 270px;
        height: 162px;
    }
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
  gap: 2.5rem;

  
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
      transition: 0.2s;
      
      .img1{
        box-shadow: #B09987 -5px 5px, #D3BAA6 -10px 10px, #FFDDBD -15px 15px, transparent -20px 20px, transparent -25px 25px;
        width: 328px;
        height: 172px;
        @media(max-width: 320px){
          width: 270px;
          height: 162px;
          margin-left: 0.9rem;
        }
      }
      .img2{
        box-shadow: #B09987 0px 5px, #D3BAA6 0px 10px, #FFDDBD 0px 15px, transparent 0px 20px, transparent 0px 25px;
        
        width: 328px;
        height: 172px;

        @media(max-width: 320px){
          width: 270px;
          height: 162px;
        }
      }
      .img3{
        box-shadow: #B09987 5px 5px, #D3BAA6 10px 10px, #FFDDBD 15px 15px, transparent 20px 20px;
        width: 328px;
        height: 172px;

        @media(max-width: 320px){
          width: 270px;
          height: 162px;
          margin-right: 0.9rem;
        }
      }

      &:hover {
        scale: 1.04;
      }
      h1{
        padding-top: 2rem;
        font-size: 1.2rem;
      }

      
    }
    .hiddenMob {
      @media(max-width:900px){
        
        display: none;
      }
    }
  

  
`