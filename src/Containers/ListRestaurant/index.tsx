import * as S from './styles'

import Restaurant from '../../models/Restaurant'
import CardRestaurant from '../../components/CardRestaurant'

type Props = {
  restaurants: Restaurant[]
}

const ListRestarant = ({ restaurants }: Props) => {
  return (
    <div className="container">
      <S.AreaRestaurants>
        {restaurants.map((restaurant) => (
          <CardRestaurant
            key={restaurant.id}
            image={restaurant.image}
            description={restaurant.description}
            infos={restaurant.infos}
            note={restaurant.note}
            title={restaurant.title}
          />
        ))}
      </S.AreaRestaurants>
    </div>
  )
}

export default ListRestarant
