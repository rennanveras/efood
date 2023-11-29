import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.cream};
  padding: 40px 0;
  color: ${colors.lightPink};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ListRedeSocial = styled.ul`
  margin-top: 32px;
  display: flex;
  gap: 8px;
  justify-content: center;
`

export const ItemRedeSocial = styled.li`
  padding: 8px;
  padding-bottom: 6px;
  border-radius: 50%;
  background-color: ${colors.lightPink};
  color: ${colors.cream};
  font-size: 12px;
`

export const InfoFooter = styled.p`
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  padding-top: 80px;
  max-width: 480px;
  width: 100%;
`
