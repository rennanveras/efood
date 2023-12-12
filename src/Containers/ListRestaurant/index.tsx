import * as S from './styles'

import CardRestaurant from '../../components/CardRestaurant'
import TypeRestaurant from '../../types/restaurant'

type Props = {
  restaurants: TypeRestaurant[]
}

const ListRestarant = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurant: TypeRestaurant) => {
    const tags = []

    if (restaurant.destacado) {
      tags.push('Destaque da semana')
    }

    if (restaurant.tipo) {
      tags.push(restaurant.tipo)
    }

    return tags
  }

  return (
    <div className="container">
      <S.AreaRestaurants>
        {restaurants.map((restaurant) => (
          <CardRestaurant
            key={restaurant.id}
            image={restaurant.capa}
            description={restaurant.descricao}
            infos={getRestaurantTags(restaurant)}
            note={restaurant.avaliacao}
            title={restaurant.titulo}
            id={restaurant.id}
          />
        ))}
      </S.AreaRestaurants>
    </div>
  )
}

export default ListRestarant
