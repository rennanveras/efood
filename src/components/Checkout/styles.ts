import styled from 'styled-components'
import { breakPoints, colors } from '../../styles/styles'
import { ButtonContainer } from '../Button/styles'

type InputGroupProps = {
  maxwidth?: string
}

export const ContentCheckout = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.cream};

  h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }
  .margin-top {
    margin-top: 8px;
  }

  .text-confirmed {
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 24px;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`

export const ContainerBtn = styled.div`
  margin-top: 24px;

  ${ButtonContainer} {
    margin-top: 8px;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxwidth || 'auto'};

  label {
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${colors.cream};
    color: black;
    padding: 8px 6px;
    border: 2px solid ${colors.cream};
    width: 100%;

    &.error {
      border: 2px solid red;
    }
  }

  @media (max-width: ${breakPoints.tablet}) {
  }
`
