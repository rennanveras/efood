import Button from '../Button'
import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
  onClick: (id: number) => void
  id: number
}

const CardMenu = ({ image, title, description, onClick, id }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 110) {
      return `${description.slice(0, 100)}...`
    }
    return description
  }
  return (
    <S.CardMenuContainer>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{getDescription(description)}</p>
      <Button title="Ver produto" type="button" onClick={() => onClick(id)}>
        Adicionar ao carrinho
      </Button>
    </S.CardMenuContainer>
  )
}

export default CardMenu
