import styled from 'styled-components'

import background from '../../assets/img/background.png'
import { colors } from '../../styles/styles'
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
`

export const HeaderLink = styled(Link)`
  color: ${colors.lightPink};
`
