import Button from '../Button'

import * as S from './styles'

import ItemCart from '../CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/Cart'
import { useState } from 'react'
import Checkout from '../Checkout'
import { formatToBrl } from '../../utils'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [inCheckout, setInCheckout] = useState(false)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((total, valueCurrent) => {
      if (valueCurrent.preco) {
        return (total += valueCurrent.preco)
      }
      return 0
    }, 0)
  }

  return (
    <S.ContainerCart className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {inCheckout ? (
          <>
            <Checkout setInCheckout={setInCheckout} />
          </>
        ) : (
          <>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((product) => (
                    <ItemCart
                      key={product.id}
                      title={product.nome}
                      image={product.foto}
                      id={product.id}
                      price={formatToBrl(product.preco)}
                    />
                  ))}
                </ul>
                <div className="total-price">
                  <p>Valor total</p>
                  <span>{formatToBrl(getTotalPrice())}</span>
                </div>
                <Button
                  title="Finalize o seu pedido"
                  type="button"
                  onClick={() => setInCheckout(true)}
                >
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <p className="empty-message">
                O carrinho está vazio, adicione pelo menos um produto para
                continuar a compra
              </p>
            )}
          </>
        )}
      </S.SideBar>
    </S.ContainerCart>
  )
}

export default Cart
