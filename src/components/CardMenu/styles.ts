import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const CardMenuContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${colors.SecundaryColor};
  background-color: ${colors.PrimaryColor};

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
