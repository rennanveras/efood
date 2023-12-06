import ListRestarant from '../../Containers/ListRestaurant'
import Hero from '../../Containers/Hero'
import Restaurant from '../../models/Restaurant'

import foto from '../../assets/img/restaurant/shushi.png'
import foto2 from '../../assets/img/restaurant/macarrao.png'

const restaurants: Restaurant[] = [
  {
    image: foto,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit magnam dolorem quibusdam eum tenetur iste ut, ducimus, culpa id aspernatur voluptatibus dolor nemo alias dolorum rem recusandae cum aliquam.',
    infos: ['melhor', 'japa'],
    note: 2,
    title: 'Restaurante japones',
    id: 1
  },
  {
    image: foto2,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit magnam dolorem quibusdam eum tenetur iste ut, ducimus, culpa id aspernatur voluptatibus dolor nemo alias dolorum rem recusandae cum aliquam.',
    infos: ['melhor', 'japa'],
    note: 5.0,
    title: 'Restaurante indoneso',
    id: 2
  },
  {
    image: foto2,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit magnam dolorem quibusdam eum tenetur iste ut, ducimus, culpa id aspernatur voluptatibus dolor nemo alias dolorum rem recusandae cum aliquam.',
    infos: ['melhor', 'japa'],
    note: 5.0,
    title: 'Restaurante indoneso',
    id: 3
  },
  {
    image: foto,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit magnam dolorem quibusdam eum tenetur iste ut, ducimus, culpa id aspernatur voluptatibus dolor nemo alias dolorum rem recusandae cum aliquam.',
    infos: ['melhor', 'japa'],
    note: 2.0,
    title: 'Restaurante ',
    id: 4
  },
  {
    image: foto2,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit magnam dolorem quibusdam eum tenetur iste ut, ducimus, culpa id aspernatur voluptatibus dolor nemo alias dolorum rem recusandae cum aliquam.',
    infos: ['melhor', 'japa'],
    note: 5.0,
    title: 'Restaurante indoneso',
    id: 5
  },
  {
    image: foto,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit magnam dolorem quibusdam eum tenetur iste ut, ducimus, culpa id aspernatur voluptatibus dolor nemo alias dolorum rem recusandae cum aliquam.',
    infos: ['melhor', 'japa'],
    note: 2.0,
    title: 'Restaurante ',
    id: 6
  }
]

const Home = () => (
  <>
    <Hero />
    <ListRestarant restaurants={restaurants} />
  </>
)

export default Home
