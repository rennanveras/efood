import styled from 'styled-components'
import background from '../../assets/img/background.png'
import { breakPoints, colors } from '../../styles/styles'

export const Hero = styled.header`
  background-image: url(${background});
  padding-top: 44px;
  padding-bottom: 40px;
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    gap: 138px;
    justify-content: center;
    align-items: center;

    @media (max-width: ${breakPoints.tablet}) {
      gap: 80px;
    }
  }
  img {
    width: 124px;
  }
`

export const Title = styled.h2`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: ${colors.lightPink};
  width: 540px;

  @media (max-width: ${breakPoints.tablet}) {
    width: 300px;
    font-size: 26px;
  }
`
