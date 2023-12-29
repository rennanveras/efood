import styled from 'styled-components'
import { breakPoints } from '../../styles/styles'

export const AreaRestaurants = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 48px;
  column-gap: 80px;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
