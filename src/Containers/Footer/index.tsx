import { BsTwitterX, BsInstagram, BsFacebook } from 'react-icons/bs'

import logo from '../../assets/img/logo.svg'

import * as S from './styles'
import { Link } from 'react-router-dom'

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <S.ListRedeSocial>
        <S.ItemRedeSocial>
          <BsInstagram />
        </S.ItemRedeSocial>
        <S.ItemRedeSocial>
          <BsFacebook />
        </S.ItemRedeSocial>
        <S.ItemRedeSocial>
          <BsTwitterX />
        </S.ItemRedeSocial>
      </S.ListRedeSocial>
      <S.InfoFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.InfoFooter>
    </div>
  </S.FooterContainer>
)

export default Footer
