// ------------------------------------
// Constants
// ------------------------------------
export const DROPDOWN_SHOW = 'DROPDOWN_SHOW'
export const DROPDOWN_HIDE = 'DROPDOWN_HIDE'

// ------------------------------------
// Actions
// ------------------------------------
export function show () {
  return {
    type: DROPDOWN_SHOW,
    isShow: true
  }
}

export function hide () {
  return {
    type: DROPDOWN_HIDE,
    isShow: false
  }
}

export const actions = {
  show,
  hide
}
