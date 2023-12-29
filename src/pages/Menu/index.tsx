import { useParams } from 'react-router-dom'

import Header from '../../Containers/Header'
import Banner from '../../Containers/Banner'
import ListMenu from '../../Containers/ListMenu'

import { useGetMenuQuery } from '../../services/api'

const Menu = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetMenuQuery(id!)

  if (!restaurant) {
    return <h1>carregando...</h1>
  }

  return (
    <>
      <Header />
      <Banner
        imageBanner={restaurant.capa}
        tipo={restaurant.tipo}
        title={restaurant.titulo}
      />
      <ListMenu />
    </>
  )
}

export default Menu
