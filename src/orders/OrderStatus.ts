enum OrderStatus {
  ORDER_PROCESSED, // order is being processed by merchant
  ORDER_CREATING, // order is being created
  READY_TO_PICKUP, // ready to pickup from merchant
  HOME_RUN, // going home
  GOAL // arrived, ( done )
}

export default OrderStatus