import * as Address from '../address'
import * as Items from '../items'
import * as Merchant from '../merchant'
import * as Account from '../account'
import * as Orders from '../orders'
import * as Deliveries from '../delivery'

interface JobData {
  addresses: {
    dropoff?: Address.AddressUsedData
    pickup?: Address.AddressUsedData
  }
  extra: {
    items: Record<string, { quantity: number, item: Items.Item }>
  }
  data: {
    delivery?: Deliveries.Data
    order?: Orders.Order
  }
  person: {
    merchant?: Merchant.MerchantData
    rider?: Account.RiderAccountData
    user?: Account.UserAccountData
  }
  uid: string
}

export default JobData