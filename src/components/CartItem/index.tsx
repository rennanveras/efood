import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'

import { remove } from '../../store/reducers/Cart'

type Props = {
  image: string
  title: string
  price: string
  id: number
}

const ItemCart = ({ image, title, price, id }: Props) => {
  const dispatch = useDispatch()

  const { quantity } = useSelector((state: RootReducer) => state.cart)

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <S.ItemCart>
      <img src={image} alt="" />
      <div>
        <h4>{title}</h4>
        <span>{price}</span>
        <br />
        <span>{quantity} Itens</span>
      </div>
      <button onClick={() => removeItem(id)} type="button" />
    </S.ItemCart>
  )
}

export default ItemCart
