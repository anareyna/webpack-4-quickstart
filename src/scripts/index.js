import '../styles/main.scss'

import Landing from './landing'
import Tracking from './tracking'
// import Sailthru from './sailthru'

const landing = new Landing()
const tracking = new Tracking()
// const sailthru = new Sailthru()

landing.init()
tracking.init()
// sailthru.init()
