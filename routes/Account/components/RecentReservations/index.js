import RecentReservations from './RecentReservations'

export default () => ({
  path: 'account/reservations',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Return getComponent   */
      cb(null, RecentReservations)

    /* Webpack named bundle   */
    }, 'RecentReservations')
  }
})
