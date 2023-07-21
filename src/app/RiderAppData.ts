import RiderAccountData from '../account/RiderAccountData'
import AppState from './AppState'

interface RiderAppData {
  token?: string
  data?: RiderAccountData
  appState?: AppState
}

export default RiderAppData