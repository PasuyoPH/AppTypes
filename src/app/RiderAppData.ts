import RiderAccountData from '../account/RiderAccountData'
import AppState from './AppState'

interface RiderAppData {
  token?: string
  data?: RiderAccountData
  state?: AppState
}

export default RiderAppData