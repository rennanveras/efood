import { useState } from 'react'
import TypeRestaurant from '../../types/restaurant'
import * as S from './styles'

const Banner = () => {
  /* const [restaurant, setRestaurant] = useState<TypeRestaurant>() */

  return (
    <S.BannerContainer /* style={{backgroundImage: `url(${})`}} */>
      <div className="container">
        <h3>Italiana</h3>
        <S.Title>La Dolce Vita Trattoria</S.Title>
      </div>
    </S.BannerContainer>
  )
}

export default Banner
