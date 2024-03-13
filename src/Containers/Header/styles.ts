import styled from 'styled-components'

import { breakPoints, colors } from '../../styles/styles'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  font-weight: bold;
  color: ${colors.PrimaryColor};
  font-size: 18px;
  background-color: ${colors.SecundaryColor};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    line-height: 0;

    img {
      height: 140px;
      object-fit: cover;
    }
  }

  @media (max-width: ${breakPoints.tablet}) {
    h1 {
      img {
        height: 110px;
      }
    }
  }
`

export const HeaderLink = styled(Link)`
  color: ${colors.PrimaryColor};

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
