import { Item } from '../items'
import { JobTypes } from '../job'

interface PaymentMethodProps {
  total: number
  items: Item[]
  type: JobTypes
}

export default PaymentMethodProps