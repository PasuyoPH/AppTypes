import DeliveryStatus from './Status'

// new interface for ordering items
interface Delivery {
  uid: string // id of the delivery
  weight: number // weight of the delivery
  name: string // name of the item to deliver
  
  createdAt: number // when the order was created
  user: string // user who made the order
  deliverTo: string // uid of the address to drop off

  startedAt?: number
  endedAt?: number

  distance?: number
  eta?: number
  
  proof?: string
  rider?: string // proof of who the rider is

  status: DeliveryStatus
  draft?: boolean // whether it's a draft or not

  // fees
  fee?: number
  riderFee?: number
}

export default Delivery
