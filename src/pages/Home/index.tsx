import ListRestarant from '../../Containers/ListRestaurant'
import Hero from '../../Containers/Hero'
import Restaurant from '../../models/Restaurant'

import foto from '../../assets/img/restaurant/shushi.png'
import foto2 from '../../assets/img/restaurant/macarrao.png'

const restaurants: Restaurant[] = [
  {
    image: foto,
    description:
      'loren loren loren loren loren loren loren loren loren loren loren loren loren loren loren',
    infos: ['melhor', 'japa'],
    note: 2,
    title: 'Restaurante japones',
    id: 1
  },
  {
    image: foto2,
    description:
      'loren loren loren loren loren loren loren loren loren loren loren loren loren loren loren',
    infos: ['melhor', 'japa'],
    note: 5.0,
    title: 'Restaurante indoneso',
    id: 2
  },
  {
    image: foto2,
    description:
      'loren loren loren loren loren loren loren loren loren loren loren loren loren loren loren',
    infos: ['melhor', 'japa'],
    note: 5.0,
    title: 'Restaurante indoneso',
    id: 3
  },
  {
    image: foto,
    description:
      'loren loren loren loren loren loren loren loren loren loren loren loren loren loren loren',
    infos: ['melhor', 'japa'],
    note: 2.0,
    title: 'Restaurante ',
    id: 4
  }
]

const Home = () => (
  <>
    <Hero />
    <ListRestarant restaurants={restaurants} />
  </>
)

export default Home
