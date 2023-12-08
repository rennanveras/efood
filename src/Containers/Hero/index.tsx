import * as S from './styles'
import * as Sg from '../../styles/styles'

import logo from '../../assets/img/logo.svg'

const Hero = () => {
  return (
    <S.Hero>
      <div className="container">
        <img src={logo} alt="" />
        <S.Title>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
      </div>
    </S.Hero>
  )
}

export default Hero
