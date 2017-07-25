const initialState = {
  options: false,
  roomsList: [
    {
      id: 0,
      withChildren: false,
      childrenList: 0
    }
  ]
}

const room = (state, action) => {
  switch (action.type) {
    case 'ADD_ROOM':
      return {
        id: action.id,
        withChildren: false,
        childrenList: 0
      }

    case 'SHOW_CHILDREN':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        withChildren: true,
        childrenList: action.amount
      });

    case 'HIDE_CHILDREN':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        withChildren: false,
        childrenList: action.amount
      });

    default:
      return state;
  }
};

export default function roomsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_OPTIONS':
      return { ...state, options: true }

    case 'ADD_ROOM':
      return {...state, roomsList: [...state.roomsList, room(state.roomsList, action)]}

    case 'REMOVE_ROOM':
      return {
          ...state, roomsList: [
            ...state.roomsList.slice(0, action.index - 1),
            ...state.roomsList.slice(action.index)
        ]
      }

    case 'SHOW_CHILDREN':
      return {...state, roomsList: state.roomsList.map(t =>
        room(t, action)
      )}

    case 'HIDE_CHILDREN':
      return {...state, roomsList: state.roomsList.map(t =>
        room(t, action)
      )}

    default:
      return state;
  }
}
