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
  types: ItemTypes[] // for filters

  available?: boolean
  eta: number
}

export default Item