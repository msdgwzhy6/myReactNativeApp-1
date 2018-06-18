import { createMaterialTopTabNavigator } from 'react-navigation'
import Echarts from './Charts/Echarts'
import SEcharts from './Charts/SEcharts'

export default createMaterialTopTabNavigator({
  Echarts,
  SEcharts,
}, {
  initialRouteName: 'Echarts',
})
