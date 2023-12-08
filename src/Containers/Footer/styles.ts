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

export const ListRedeSocial = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 8px;
  justify-content: center;
`

export const InfoFooter = styled.p`
  margin-top: 80px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  max-width: 480px;
  width: 100%;
`
