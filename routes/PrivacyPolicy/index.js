import PrivacyPolicy from './PrivacyPolicy'

export default (store) => ({
  path: 'privacy_policy',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Return getComponent   */
      cb(null, PrivacyPolicy)

    /* Webpack named bundle   */
    }, 'PrivacyPolicy')
  }
})
