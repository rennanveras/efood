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

  @media (max-width: ${breakPoints.tablet}) {
    display: none;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderLink = styled(Link)`
  color: ${colors.lightPink};
`

export const ButtonCart = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;
`
