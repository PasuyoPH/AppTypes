import ItemTypes from './ItemTypes'

interface Item {
  uid: string
  merchant: string
  name: string
  price: number
  image?: string
  stock: number
  type: ItemTypes
}

export default Item