const initialState = {
  isOpen: false
}

export default function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isOpen: !state.isOpen }

    default:
      return state;
  }
}
