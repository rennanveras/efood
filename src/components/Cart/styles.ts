import styled from 'styled-components'
import { breakPoints, colors } from '../../styles/styles'

export const ContainerCart = styled.div`
  display: none;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  z-index: 3;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.lightPink};
  padding: 32px 8px;

  @media (max-width: ${breakPoints.tablet}) {
    max-width: 280px;
  }

  ul {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .total-price {
    display: flex;
    justify-content: space-between;
    color: ${colors.cream};
    margin-bottom: 16px;
  }
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: #000;
  opacity: 0.8;
`
