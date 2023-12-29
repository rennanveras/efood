import { BsCart3 } from 'react-icons/bs'

import logo from '../../assets/img/logo.svg'

import * as S from './styles'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open, close } from '../../store/reducers/Cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer>
      <div className="container">
        <S.HeaderLink to="/">Restaurantes</S.HeaderLink>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <S.ButtonCart onClick={openCart}>
          {items.length} {items.length > 1 ? 'Produtos' : 'Produto'} <BsCart3 />
        </S.ButtonCart>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
