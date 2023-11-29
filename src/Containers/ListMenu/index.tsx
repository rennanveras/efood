import CardMenu from '../../components/CardMenu'
import * as S from './styles'

import MenuModel from '../../models/Menu'

type Props = {
  Menus: MenuModel[]
}

const ListMenu = ({ Menus }: Props) => {
  return (
    <S.ContainerListMenu>
      <div className="container">
        <S.ListMenu>
          {Menus.map((item) => (
            <CardMenu
              key={item.id}
              image={item.image}
              description={item.description}
              title={item.title}
            />
          ))}
        </S.ListMenu>
      </div>
    </S.ContainerListMenu>
  )
}

export default ListMenu
