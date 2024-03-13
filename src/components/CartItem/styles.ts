import styled from 'styled-components'
import { colors } from '../../styles/styles'

import trash from '../../assets/img/gadgets/trash.png'

export const ItemCart = styled.li`
  display: flex;
  gap: 8px;
  color: ${colors.PrimaryColor};
  background-color: ${colors.SecundaryColor};
  padding: 8px 8px 12px 8px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  > div {
    h4 {
      margin-bottom: 16px;
      font-size: 18px;
      font-weight: bold;
    }

    span {
      font-size: 14px;
    }
  }

  button {
    background-image: url(${trash});
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
