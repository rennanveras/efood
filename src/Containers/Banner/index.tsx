import * as S from './styles'
import * as Sg from '../../styles/styles'

const Banner = () => {
  return (
    <S.BannerContainer>
      <div className="container">
        <h3>
          <em>Italiana</em>
        </h3>
        <Sg.Title whatcolor="white">La Dolce Vita Trattoria</Sg.Title>
      </div>
    </S.BannerContainer>
  )
}

export default Banner
