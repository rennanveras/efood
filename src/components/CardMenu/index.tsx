import Button from '../Button'
import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const CardMenu = ({ image, title, description }: Props) => {
  return (
    <S.CardMenuContainer>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Button
        title="Ver produto"
        type="button"
        onClick={() => console.log('la')}
      >
        Adicionar ao carrinho
      </Button>
    </S.CardMenuContainer>
  )
}

export default CardMenu
