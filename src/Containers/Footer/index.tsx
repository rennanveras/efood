import logo from '../../assets/img/logo.svg'
import insta from '../../assets/img/gadgets/instagram.png'
import face from '../../assets/img/gadgets/facebook.png'
import twitter from '../../assets/img/gadgets/twitter.png'

import * as S from './styles'
import { Link } from 'react-router-dom'

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <div>
        <Link title="Clique para voltar para a página principal" to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <S.ListRedeSocial>
        <img src={insta} alt="" />
        <img src={face} alt="" />
        <img src={twitter} alt="" />
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
