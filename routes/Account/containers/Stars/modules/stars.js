// ------------------------------------
// Constants
// ------------------------------------
export const SET_VALUE = 'SET_VALUE'
export const SHOW_DROPDOWN = 'SHOW_DROPDOWN'
export const HIDE_DROPDOWN = 'HIDE_DROPDOWN'

// ------------------------------------
// Actions
// ------------------------------------

export function setValue (val) {
  return {
    type: SET_VALUE,
    val: val
  }
}

export function showDropdown () {
  return {
    type: SHOW_DROPDOWN,
    isOpened: true
  }
}

export function hideDropdown () {
  return {
    type: HIDE_DROPDOWN,
    isOpened: false
  }
}



export const actions = {
  setValue,
  showDropdown,
  hideDropdown
}
