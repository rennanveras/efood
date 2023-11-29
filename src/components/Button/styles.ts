import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const ButtonContainer = styled.button`
  padding: 4px 6px;
  color: ${colors.lightPink};
  background-color: ${colors.cream};
  display: inline-block;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  width: 100%;
`

export const ButtonLink = styled(Link)`
  padding: 4px 6px;
  background-color: ${colors.lightPink};
  color: ${colors.cream};
  display: inline-block;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`
