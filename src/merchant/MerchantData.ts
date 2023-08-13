import { Geo } from '../address'

interface MerchantData extends Geo { // this would include lat & long due to it having specific branch locations
  uid: string
  createdAt: number
  banner?: string
  logo?: string
  name: string
  bio?: string
  sales?: number
}

export default MerchantData