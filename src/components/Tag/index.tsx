import * as S from './styles'

type Props = {
  children: string
}

const TagContainer = ({ children }: Props) => <S.Tag>{children}</S.Tag>

export default TagContainer
