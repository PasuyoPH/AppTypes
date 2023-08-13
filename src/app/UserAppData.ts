import UserAccountData from '../account/UserAccountData'
import AppState from './AppState'

interface UserAppData {
  token?: string
  data?: UserAccountData
  appState?: AppState
}

export default UserAppData