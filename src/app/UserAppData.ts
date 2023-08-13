import UserAccountData from '../account/UserAccountData'
import AppState from './AppState'
import CartData from './CartData'

interface UserAppData {
  token?: string
  data?: UserAccountData
  appState?: AppState
  cart?: Map<string, CartData>
}

export default UserAppData