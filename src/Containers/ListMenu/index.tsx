import CardMenu from '../../components/CardMenu'
import * as S from './styles'

import Modal from '../../components/Modal'
import { useState } from 'react'
import TypeRestaurant from '../../types/restaurant'

type Props = {
  cardapio: TypeRestaurant[]
}

const ListMenu = ({ cardapio }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <S.ContainerListMenu>
      <div className="container">
        <S.ListMenu>
          {cardapio.map((item) => (
            <li key={item.id}>
              <CardMenu
                image={item.capa}
                description={item.descricao}
                title={item.titulo}
                onClick={() => setModalIsOpen(true)}
              />
            </li>
          ))}
        </S.ListMenu>
        <Modal isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} />
      </div>
    </S.ContainerListMenu>
  )
}

export default ListMenu
