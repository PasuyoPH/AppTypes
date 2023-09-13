import OrderStatus from './OrderStatus'

// new interface for ordering items
interface Order {
  uid: string // id of the order
  items: string[] // array of "id-quantity"
  merchant: string // id of the merchant
  total: number // total price
  createdAt: number // when the order was created
  user: string // user who made the order
  deliverTo: string // uid of the address to drop off

  startedAt?: number
  endedAt?: number

  distance?: number
  eta?: number
  
  proof?: string
  rider?: string // proof of who the rider is

  status: OrderStatus
}

export default Order