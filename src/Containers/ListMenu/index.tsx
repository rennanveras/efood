import CardMenu from '../../components/CardMenu'
import * as S from './styles'

import Modal from '../../components/Modal'
import { useState } from 'react'
import TypeMenu from '../../types/menu'
import { useGetMenuQuery } from '../../services/api'
import { useParams } from 'react-router-dom'

const ListMenu = () => {
  const { id } = useParams()

  const { data: product } = useGetMenuQuery(id!)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [productSelected, setproductSelected] = useState<TypeMenu>()

  const openModal = (id: number) => {
    if (product) {
      const itemMenu = product.cardapio.find((item) => item.id === id)

      if (itemMenu) {
        setproductSelected(itemMenu)
        setModalIsOpen(true)
      }
    }
  }

  return (
    <S.ContainerListMenu>
      <div className="container">
        <S.ListMenu>
          {product?.cardapio.map((item) => (
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
