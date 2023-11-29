import foto from '../../assets/img/menu/pizza.png'
import Header from '../../Containers/Header'
import Banner from '../../Containers/Banner'
import ListMenu from '../../Containers/ListMenu'
import MenuModel from '../../models/Menu'

const menus: MenuModel[] = [
  {
    image: foto,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    id: 2
  },
  {
    image: foto,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    id: 3
  },
  {
    image: foto,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    id: 4
  },
  {
    image: foto,
    description:
      'loren A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    id: 5
  },
  {
    image: foto,
    description:
      'loren A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    id: 6
  },
  {
    image: foto,
    description:
      'loren A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    id: 7
  }
]

const Menu = () => (
  <>
    <Header />
    <Banner />
    <ListMenu Menus={menus} />
  </>
)

export default Menu
