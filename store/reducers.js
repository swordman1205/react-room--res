import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import dropdownReducer from './reducers/dropdown'
import counterReducer from './reducers/counter'
import switcherReducer from './reducers/switcher'
import navigationReducer from './reducers/navigation'
import roomsReducer from './reducers/rooms'
import starsReducer from './reducers/stars'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    dropdownReducer,
    counterReducer,
    switcherReducer,
    navigationReducer,
    roomsReducer,
    starsReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
