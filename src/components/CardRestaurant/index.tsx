import { FaStar } from 'react-icons/fa'

import * as S from './styles'
import TagContainer from '../Tag'
import Button from '../Button'

type Props = {
  image: string
  title: string
  infos: string[]
  description: string
  note: number
}

const Card = ({ image, title, infos, description, note }: Props) => {
  return (
    <S.Card>
      <S.Img src={image} alt="" />
      <S.AreaDestaque>
        {infos.map((info) => (
          <TagContainer key={info}>{info}</TagContainer>
        ))}
      </S.AreaDestaque>
      <S.AreaInfos>
        <S.AreaTitle>
          <S.Title>{title}</S.Title>
          <S.AreaNote>
            <span>{note.toFixed(1)}</span>
            <FaStar size={20} />
          </S.AreaNote>
        </S.AreaTitle>
        <S.Description>{description}</S.Description>
        <div className="teste">
          <Button
            type="link"
            to="/cardapio"
            title="Clique aqui para ver o cardápio"
          >
            Saiba mais
          </Button>
        </div>
      </S.AreaInfos>
    </S.Card>
  )
}

export default Card
