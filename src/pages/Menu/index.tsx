import { useParams } from 'react-router-dom'

import Header from '../../Containers/Header'
import Banner from '../../Containers/Banner'
import ListMenu from '../../Containers/ListMenu'

import { useGetMenuQuery } from '../../services/api'
import Loader from '../../components/Loader'

type MenuParams = {
  id: string
}

const Menu = () => {
  const { id } = useParams() as MenuParams

  const { data: restaurant, isLoading } = useGetMenuQuery(id)

  if (!restaurant) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <Banner
        imageBanner={restaurant.capa}
        tipo={restaurant.tipo}
        title={restaurant.titulo}
      />
      <ListMenu isLoading={isLoading} />
    </>
  )
}

export default Menu
