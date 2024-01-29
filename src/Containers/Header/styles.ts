import styled from 'styled-components'

import background from '../../assets/img/background.png'
import { breakPoints, colors } from '../../styles/styles'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  background-image: url(${background});
  padding-top: 44px;
  padding-bottom: 66px;
  font-weight: bold;
  color: ${colors.lightPink};
  font-size: 18px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    line-height: 0;
  }

  @media (max-width: ${breakPoints.tablet}) {
    h1 {
      img {
        width: 90px;
      }
    }
  }
`

export const HeaderLink = styled(Link)`
  color: ${colors.lightPink};

  .btn-back {
    display: none;
    font-size: 24px;
  }
  @media (max-width: ${breakPoints.tablet}) {
    p {
      display: none;
    }
    .btn-back {
      display: block;
    }
  }
`

export const ButtonCart = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;

  @media (max-width: ${breakPoints.tablet}) {
    span {
      display: none;
    }
  }
`
