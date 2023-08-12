import RiderAccountData from '../account/RiderAccountData'
import AppState from './AppState'
import GatewayState from './GatewayState'
import Geo from './Geo'

interface RiderAppData {
  token?: string
  data?: RiderAccountData
  appState?: AppState
  websocket?: WebSocket
  gatewayState?: GatewayState
  geo?: Geo
}

export default RiderAppData