import Button from '../Button'
import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
  onClick: () => void
}

const CardMenu = ({ image, title, description, onClick }: Props) => {
  return (
    <S.CardMenuContainer>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Button title="Ver produto" type="button" onClick={() => onClick()}>
        Adicionar ao carrinho
      </Button>
    </S.CardMenuContainer>
  )
}

export default CardMenu
