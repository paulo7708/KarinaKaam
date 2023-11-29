import styled from "styled-components";
import bgImg from '../../assets/backgroundFull.png'

export const Contact = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8rem;
  height: 110vh;
  padding-top: 8rem;

  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;

  
  @media (max-width: 1072px) {
    background-position-x: right;
    div {
      display: none;
    }
    
    section {
      width: 90%;
      height: 80vh;
    }
  }

  div {
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    width: 30rem;
        
    img {
      display: none;
      width: 30rem;
      margin-bottom: 3rem;
      border-radius: 10px;
    }
    h1{
      font-family: 'Oldenburg', cursive;
      color: ${props => props.theme['rb-blue']};
      opacity: 0.9;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    span{
      color: ${props => props.theme["rb-gold"]};
    }
    h3 {      
      color: ${props => props.theme['gray-600']};
      font-size: 1.6rem;
    }
    a {
      color: ${props => props.theme['blue-500']};
      transition: all .2s ease-in-out;

      &:hover {
        transform: scale(1.1);
        color: ${props => props.theme['blue-light']};
      }
    }
  }
  
`

export const FormContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
  margin: 1rem 0;
  background-color: #fff;
  background-color: white;

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  @media (max-width: 2560px) {
    padding: 2rem;
  }

  @media (max-width: 1072px) {
    box-shadow: none;    
    background: transparent;
    
    form {
      padding: 3rem;
      label {
      color: black;
    }
    }
  }
  

  h1 {
    margin-bottom: 14px;
    color: ${props => props.theme["gray-500"]};
    font-family: Eras;

  }

  form {
    max-width: 600px;
    width: 25rem;
    display: flex;
    flex-direction: column;
    
  }

  label {
    margin-bottom: 0.125rem;
    color: ${props => props.theme["white"]};
  }

  input { 
    margin-bottom: 14px;
    height: 34px;
    border: 1px solid ${props => props.theme["gray-400"]};
    border-radius: 8px;
    padding: 0 8px;
  }

  select {
    margin-bottom: 14px;
    height: 34px;
    border-radius: 8px;
    padding: 0 8px;
    color: ${props => props.theme["gray-400"]};
  }

  textarea {
    margin-bottom: 14px;
    border-radius: 8px;
    padding: 8px;
    height: 94px;
    resize: none;
    border: 1px solid ${props => props.theme["gray-400"]};
  }

  .button {
    height: 34px;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    background-color: ${props => props.theme["rb-papaia"]};
    font-size: 18px;
    color: #fff;
    transition: background-color, transform 0.8s;

    &:hover {
      background-color:${props => props.theme["rb-papaia2"]};
      transform: scale(1.01);
  }
  }
`;

