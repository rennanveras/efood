import styled from 'styled-components'
import background from '../../assets/img/background.png'
import { Title } from '../../styles/styles'

export const Hero = styled.header`
  background-image: url(${background});
  padding-top: 34px;
  padding-bottom: 40px;
  text-align: center;

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

  ${Title} {
    width: 540px;
  }
`
