const initialState = {
  customerView: JSON.parse(localStorage.state || false)
}

export default function switcherReducer(state = initialState, action) {
  switch (action.type) {
    case 'SWITCH_VIEW':
      localStorage.state = !state.customerView;

      return { ...state, customerView: !state.customerView }

    default:
      return state;
  }
}
