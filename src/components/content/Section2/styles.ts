import styled from 'styled-components';

export const HexTitles = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  color: ${props => props.theme['gray-500']};
  opacity: 0.9;
  

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.3rem;
    font-family: 'Oldenburg', cursive;
  }
  @media (max-width: 768px) {
    display: none;
  }
  p {
    font-size: 1rem;
    max-width: 55rem;
  }
  span{
    color: ${props => props.theme['blue-500']};
  }
`
// export const BackHexagon = styled.div`
//   background-image:  url(${hexagon});
//   background-repeat: no-repeat;
//   background-size: 10%;
//   background-position: initial;
//   min-width:100%;
//   position: absolute;

// `
