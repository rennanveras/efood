class Restaurant {
  image: string
  description: string
  infos: string[]
  note: number
  title: string
  id: number

  constructor(
    image: string,
    description: string,
    infos: string[],
    note: number,
    title: string,
    id: number
  ) {
    this.image = image
    this.description = description
    this.infos = infos
    this.note = note
    this.title = title
    this.id = id
  }
}

export default Restaurant
