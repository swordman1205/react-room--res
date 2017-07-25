const initialState = 0

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'COUNTER_INCREMENT':
      return state + action.payload

    case 'COUNTER_DECREMENT':
      if (state > 0) {
        return state - action.payload
      }

    default:
      return state;
  }
}
