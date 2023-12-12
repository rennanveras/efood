import styled from 'styled-components'

import { colors } from '../../styles/styles'
import { ButtonContainer } from '../../components/Button/styles'

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 2;

  .overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
  }

  &.visible {
    display: flex;
  }

  .container {
    background-color: ${colors.lightPink};
    padding: 32px;
    position: relative;
    color: ${colors.white};
    max-height: 344px;
    z-index: 3;
  }
  .button-close {
    display: block;
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
  }
`

export const ContentModal = styled.div`
  display: flex;
  gap: 24px;

  > img {
    display: block;
    max-width: 280px;
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
`

export const InfosModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;

    span {
      display: block;
      margin-top: 20px;
    }
  }

  ${ButtonContainer} {
    width: initial;
    display: block;
    align-self: flex-start;
  }
`
