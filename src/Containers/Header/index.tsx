import { BsCart3 } from 'react-icons/bs'

import logo from '../../assets/img/logo.svg'

import * as S from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <S.HeaderContainer>
      <div className="container">
        <S.HeaderLink to="/">Restaurantes</S.HeaderLink>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div>
          0 produtos <BsCart3 />
        </div>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
