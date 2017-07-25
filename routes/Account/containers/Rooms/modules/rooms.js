// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_OPTIONS = 'SHOW_OPTIONS'
export const ADD_ROOM = 'ADD_ROOM'
export const REMOVE_ROOM = 'REMOVE_ROOM'
export const SHOW_CHILDREN = 'SHOW_CHILDREN'
export const HIDE_CHILDREN = 'HIDE_CHILDREN'

let nextTodoId = 1;

// ------------------------------------
// Actions
// ------------------------------------
export function showOptions () {
  return {
    type: SHOW_OPTIONS
  }
}

export function addRoom () {
  return {
    type: ADD_ROOM,
    id: nextTodoId++
  }
}

export function removeRoom (index) {
  return {
    type: REMOVE_ROOM,
    index: index
  }
}

export function showChildren (id, amount) {
  return {
    type: SHOW_CHILDREN,
    id: id,
    amount: amount
  }
}

export function hideChildren (id) {
  return {
    type: HIDE_CHILDREN,
    id: id
  }
}

export const actions = {
  showOptions,
  addRoom,
  removeRoom,
  showChildren,
  hideChildren
}
