import ListRestaurant from '../../Containers/ListRestaurant'
import Hero from '../../Containers/Hero'

import { useGetRestaurantsQuery } from '../../services/api'
import Header from '../../Containers/Header'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Header enableButtonReturn={false} />
      <Hero />
      <ListRestaurant isLoading={isLoading} restaurants={restaurants} />
    </>
  )
}

export default Home
