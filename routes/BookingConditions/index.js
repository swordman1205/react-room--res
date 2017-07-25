import BookingConditions from './BookingConditions'

export default (store) => ({
  path: 'booking_conditions',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Return getComponent   */
      cb(null, BookingConditions)

    /* Webpack named bundle   */
    }, 'BookingConditions')
  }
})
