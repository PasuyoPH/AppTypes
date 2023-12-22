import { Geo } from '../address'
import ItemTypes from '../items/ItemTypes'

interface MerchantData extends Geo { // this would include lat & long due to it having specific branch locations
  uid: string

  // customizable data
  name: string
  banner?: string
  logo?: string
  bio?: string
  tags?: string[]
  priceLevels?: number
  accent?: string
  types?: ItemTypes[] // for filter
  
  // state data
  open?: boolean
  hide?: boolean
  sales?: number
}

export default MerchantData