import { AddressData } from '../address'
import { Item } from '../items'
import MerchantData from './MerchantData'

interface FullMerchantData {
  data: MerchantData
  items: Item[]
  likes: number
  address: AddressData
}

export default FullMerchantData