import ListRestaurant from '../../Containers/ListRestaurant'
import Hero from '../../Containers/Hero'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Hero />
        <ListRestaurant restaurants={restaurants} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
