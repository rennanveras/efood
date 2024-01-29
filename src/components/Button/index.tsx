import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: ReactNode
  disabled?: boolean
}

const Button = ({ type, title, to, onClick, children, disabled }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </S.ButtonContainer>
    )
  } else {
    return (
      <S.ButtonLink type="link" title={title} to={to as string}>
        {children}
      </S.ButtonLink>
    )
  }
}

export default Button
