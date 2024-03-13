import { BsCart3 } from 'react-icons/bs'
import { IoArrowBack } from 'react-icons/io5'

import logo from '../../assets/img/logo.png'

import * as S from './styles'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/Cart'
import { RootReducer } from '../../store'

type Props = {
  enableButtonReturn: boolean
}

const Header = ({ enableButtonReturn }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer>
      <div className="container">
        {enableButtonReturn && (
          <S.HeaderLink
            title="Clique aqui para voltar para os restaurantes"
            to="/"
          >
            <p>Restaurantes</p>{' '}
            <span className="btn-back">
              <IoArrowBack />
            </span>
          </S.HeaderLink>
        )}
        <Link title="clique aqui para voltar a página ínicial" to="/">
          <h1>
            <img src={logo} alt="Efood" />
          </h1>
        </Link>
        <S.ButtonCart role="button" onClick={openCart}>
          {items.length}{' '}
          <span>{items.length > 1 ? 'Produtos' : 'Produto'}</span> <BsCart3 />
        </S.ButtonCart>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
