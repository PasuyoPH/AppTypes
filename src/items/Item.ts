import ItemTypes from './ItemTypes'

interface Item {
  uid: string
  merchant: string
  name: string
  price: number
  image?: string
  stock: number
  type: ItemTypes
  banner?: string
  addedAt: number
}

export default Item