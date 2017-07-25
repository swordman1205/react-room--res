import Tools from './Tools'

export default (store) => ({
  path: '/account',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Return getComponent   */
      cb(null, Tools)

    /* Webpack named bundle   */
    }, 'Tools')
  }
})
