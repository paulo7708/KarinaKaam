import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
  /* background-color: ${props => props.theme['white']}; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-top: 4px solid ${props => props.theme["kam-blue"]};

  @media (max-width: 1500px) {
    padding-right: 2rem;
    padding-left: 3rem;
  }
  
  /* @media (max-width: 1200px) {
    display: none;
  } */
`

export const RowSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 6rem;

  @media (min-width: 1441px) {    
    gap: 12.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${props => props.theme["rb-blue"]};

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    span {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
    }
    p {      
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      transition: all .2s ease-in-out; 
        
      &:hover { 
        transform: scale(1.1);      
      }
    }
    
    h1{
      font-size: 1.2rem;
    }

    img {
      width: 18rem;
    }
    a {
      text-decoration: none;
      color: ${props => props.theme["rb-blue"]};
      transition: all .2s ease-in-out; 

      &:hover { 
        transform: scale(1.1);
      }
    }
  }
`

