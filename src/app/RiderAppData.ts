import RiderAccountData from '../account/RiderAccountData'
import AppState from './AppState'
import GatewayState from './GatewayState'

interface RiderAppData {
  token?: string
  data?: RiderAccountData
  appState?: AppState
  websocket?: WebSocket
  gatewayState?: GatewayState
}

export default RiderAppData