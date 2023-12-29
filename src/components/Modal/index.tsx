import * as S from './styles'

import close from '../../assets/img/gadgets/close.png'

import Button from '../../components/Button'
import TypeMenu from '../../types/menu'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/Cart'

type Props = {
  isOpen: boolean
  closeModal: () => void
  item?: TypeMenu
}
export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Modal = ({ isOpen, closeModal, item }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(item!))
    dispatch(open())
  }

  return (
    <S.Modal className={isOpen ? 'visible' : ''}>
      <div className="container">
        <img
          className="button-close"
          src={close}
          alt=""
          onClick={() => closeModal()}
        />
        <S.ContentModal>
          <img src={item?.foto} alt="" />
          <S.InfosModal>
            <h3>{item?.nome}</h3>
            <p>
              {item?.descricao}
              <span>serve: {item?.porcao}</span>
            </p>
            <Button
              title="Adicione agora este produto ao carrinho"
              type="button"
              onClick={addToCart}
            >
              Adicionar ao carrinho - {formatPrice(item?.preco)}
            </Button>
          </S.InfosModal>
        </S.ContentModal>
      </div>
      <div className="overlay" onClick={() => closeModal()}></div>
    </S.Modal>
  )
}

export default Modal
