import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: ReactNode
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </S.ButtonContainer>
    )
  } else {
    return (
      <S.ButtonLink type="button" title={title} to={to as string}>
        {children}
      </S.ButtonLink>
    )
  }
}

export default Button
