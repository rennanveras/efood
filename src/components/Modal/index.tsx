import { useState } from 'react'

import * as S from './styles'

import foto from '../../assets/img/menu/pizza.png'
import close from '../../assets/img/gadgets/close.png'

import Button from '../../components/Button'

type Props = {
  isOpen: boolean
  closeModal: () => void
}
const Modal = ({ isOpen, closeModal }: Props) => {
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
          <img src={foto} alt="" />
          <S.InfosModal>
            <h3>Pizza de presunto</h3>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
              <span>Serve: de 2 a 3 pessoas</span>
            </p>
            <Button
              title="Adicione agora este produto ao carrinho"
              type="button"
              onClick={() => console.log}
            >
              Adicionar ao carrinho - R$ 60,90
            </Button>
          </S.InfosModal>
        </S.ContentModal>
      </div>
      <div className="overlay" onClick={() => closeModal()}></div>
    </S.Modal>
  )
}

export default Modal
