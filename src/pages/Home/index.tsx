import ListRestaurant from '../../Containers/ListRestaurant'
import Hero from '../../Containers/Hero'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Hero />
      <ListRestaurant isLoading={isLoading} restaurants={restaurants} />
    </>
  )
}

export default Home
