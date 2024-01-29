import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetMenuQuery } from '../../services/api'

import CardMenu from '../../components/CardMenu'
import Modal from '../../components/Modal'

import TypeMenu from '../../types/menu'

import * as S from './styles'
import Loader from '../../components/Loader'

type Props = {
  isLoading: boolean
}

type MenuParams = {
  id: string
}

const ListMenu = ({ isLoading }: Props) => {
  const { id } = useParams() as MenuParams

  const { data: product } = useGetMenuQuery(id)

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

  if (isLoading) return <Loader />

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
