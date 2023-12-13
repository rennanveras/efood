import * as S from './styles'

type Props = {
  imageBanner: string
  tipo: string
  title: string
}

const Banner = ({ imageBanner, tipo, title }: Props) => {
  return (
    <S.BannerContainer style={{ backgroundImage: `url(${imageBanner})` }}>
      <div className="container">
        <h3>{tipo}</h3>
        <S.Title>{title}</S.Title>
      </div>
    </S.BannerContainer>
  )
}

export default Banner
