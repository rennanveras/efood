import * as S from './styles'

type Props = {
  imageBanner: string
}

const Banner = ({ imageBanner }: Props) => {
  return (
    <S.BannerContainer style={{ backgroundImage: `url(${imageBanner})` }}>
      <div className="container">
        <h3>Italiana</h3>
        <S.Title>La Dolce Vita Trattoria</S.Title>
      </div>
    </S.BannerContainer>
  )
}

export default Banner
