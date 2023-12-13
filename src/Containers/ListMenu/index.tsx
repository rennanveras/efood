import CardMenu from '../../components/CardMenu'
import * as S from './styles'

import Modal from '../../components/Modal'
import { useState } from 'react'
import TypeMenu from '../../types/menu'

type Props = {
  product: TypeMenu[]
}

const ListMenu = ({ product }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [productSelected, setproductSelected] = useState<TypeMenu>()

  const openModal = (id: number) => {
    const itemMenu = product.find((item) => item.id === id)

    if (itemMenu) {
      setproductSelected(itemMenu)
      setModalIsOpen(true)
    }
  }

  return (
    <S.ContainerListMenu>
      <div className="container">
        <S.ListMenu>
          {product.map((item) => (
            <li key={item.id}>
              <CardMenu
                image={item.foto}
                description={item.descricao}
                title={item.nome}
                id={item.id}
                onClick={() => openModal(item.id)}
              />
            </li>
          ))}
        </S.ListMenu>
        <Modal
          isOpen={modalIsOpen}
          closeModal={() => setModalIsOpen(false)}
          item={productSelected}
        />
      </div>
    </S.ContainerListMenu>
  )
}

export default ListMenu
