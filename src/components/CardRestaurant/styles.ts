import styled from 'styled-components'

import { colors } from '../../styles/styles'
import { Tag } from '../Tag/styles'

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${colors.lightPink};
  border-radius: 6px;
`

export const Img = styled.img`
  width: 100%;
  height: 216px;
  object-fit: cover;
`
export const AreaDestaque = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;

  ${Tag} {
    margin-right: 8px;
  }
`

export const AreaInfos = styled.div`
  padding: 8px;
  border: 1px solid ${colors.lightPink};
  border-top: none;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 18px;
`
export const Centralizer = styled.div`
  display: flex;
  align-items: center;
`

export const AreaTitle = styled(Centralizer)`
  justify-content: space-between;
  margin-bottom: 16px;

  svg {
    margin-bottom: 3px;
    path {
      color: orange;
    }
  }
`
export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  text-overflow: ellipsis;
  line-height: 22px;
  overflow: hidden;
  height: 66px;
`