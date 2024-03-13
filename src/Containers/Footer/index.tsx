import logo from '../../assets/img/logo.png'

import {
  FaInstagram,
  FaSquareFacebook,
  FaSquareXTwitter
} from 'react-icons/fa6'

import * as S from './styles'
import { Link } from 'react-router-dom'

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <div>
        <Link title="Clique para voltar para a página principal" to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <S.ListRedeSocial>
        <FaInstagram size={30} />
        <FaSquareFacebook size={30} />
        <FaSquareXTwitter size={30} />
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
