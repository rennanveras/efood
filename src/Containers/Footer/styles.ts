import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.SecundaryColor};
  padding: 40px 0;
  color: ${colors.PrimaryColor};

  .logo {
    height: 140px;
  }

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

  svg {
    cursor: pointer;
  }
`

export const InfoFooter = styled.p`
  margin-top: 80px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  max-width: 480px;
  width: 100%;
`
