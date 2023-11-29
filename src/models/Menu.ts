class MenuModel {
  image: string
  description: string
  title: string
  id: number

  constructor(image: string, description: string, title: string, id: number) {
    this.image = image
    this.description = description
    this.title = title
    this.id = id
  }
}

export default MenuModel
