import Button from '../Button'

import * as S from './styles'

import ItemCart from '../CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/Cart'
import { formatPrice } from '../Modal'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((total, valueCurrent) => {
      return (total += valueCurrent.preco)
    }, 0)
  }

  return (
    <S.ContainerCart className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <ul>
          {items.map((product) => (
            <ItemCart
              key={product.id}
              title={product.nome}
              image={product.foto}
              id={product.id}
              price={formatPrice(product.preco)}
            />
          ))}
        </ul>
        <div className="total-price">
          <p>Valor total</p>
          <span>{formatPrice(getTotalPrice())}</span>
        </div>
        <Button title="Finalize o seu pedido" type="button">
          Continuar com a entrega
        </Button>
      </S.SideBar>
    </S.ContainerCart>
  )
}

export default Cart
