import RestaurantFilterTypes from './RestaurantFilterTypes'

interface RestaurantFilter {
  name: string
  type: RestaurantFilterTypes
  icon?: any
}

export default RestaurantFilter