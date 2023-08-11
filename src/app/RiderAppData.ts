import RiderAccountData from '../account/RiderAccountData'
import AppState from './AppState'

interface RiderAppData {
  token?: string
  data?: RiderAccountData
  appState?: AppState
  websocket?: WebSocket
}

export default RiderAppData