import styled from 'styled-components'
import { breakPoints } from '../../styles/styles'

export const ContainerListMenu = styled.section`
  padding-top: 58px;
  padding-bottom: 120px;
`

export const ListMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakPoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
