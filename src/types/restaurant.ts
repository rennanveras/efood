import TypeMenu from './menu'

type TypeRestaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: TypeMenu[]
}

export default TypeRestaurant
