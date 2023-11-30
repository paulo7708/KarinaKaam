import styled from 'styled-components'

export const PortStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 3rem 0 0 0;
`

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`
export const Card = styled.div`
  
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 2px black;
    border-radius: 2px;
    

    a{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: black;
      img{
        width: 258px;
        height: 172px;
      }
    }
  

  
`