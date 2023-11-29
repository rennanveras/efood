import styled from 'styled-components'
import background from '../../assets/img/background.png'

export const Hero = styled.header`
  background-image: url(${background});
  padding-top: 64px;
  padding-bottom: 40px;

  .container {
    display: flex;
    flex-direction: column;
    gap: 140px;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 124px;
  }
`
