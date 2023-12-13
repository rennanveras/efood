import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Header from '../../Containers/Header'
import Banner from '../../Containers/Banner'
import ListMenu from '../../Containers/ListMenu'

import TypeRestaurant from '../../types/restaurant'

const Menu = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<TypeRestaurant | undefined>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
  }, [])

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
      <ListMenu product={restaurant.cardapio} />
    </>
  )
}

export default Menu
