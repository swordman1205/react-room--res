const initialState = {
  value: 0,
  isOpened: false
}

export default function starsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, value: +action.val }

    case 'SHOW_DROPDOWN':
      return { ...state, isOpened: true }

    case 'HIDE_DROPDOWN':
      return { ...state, isOpened: false }

    default:
      return state;
  }
}
