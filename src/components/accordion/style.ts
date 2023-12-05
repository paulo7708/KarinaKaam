import styled from "styled-components";

export const Contato = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding-top: 3rem;
  
  p{
    color: #E1E1E6;
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