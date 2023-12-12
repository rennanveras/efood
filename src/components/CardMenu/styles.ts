import styled from 'styled-components'
import { colors } from '../../styles/styles'
import { Link } from 'react-router-dom'

export const CardMenuContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${colors.cream};
  background-color: ${colors.lightPink};

  img {
    width: 100%;
    height: 166px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
  }
`
