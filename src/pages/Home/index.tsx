import { useEffect, useState } from 'react'

import ListRestarant from '../../Containers/ListRestaurant'
import Hero from '../../Containers/Hero'
import TypeRestaurant from '../../types/restaurant'

const Home = () => {
  const [restaurants, setRestaurants] = useState<TypeRestaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
  }, [])

  return (
    <>
      <Hero />
      <ListRestarant restaurants={restaurants} />
    </>
  )
}

export default Home
