const initialState = {
  isShow: false
}

export default function dropdownReducer(state = initialState, action) {
  switch (action.type) {
    case 'DROPDOWN_SHOW':
      return { ...state, isShow: action.isShow }

    case 'DROPDOWN_HIDE':
      return { ...state, isShow: action.isShow }

    default:
      return state;
  }
}
