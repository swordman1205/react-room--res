require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------

export const GET_HOTELS = 'GET_HOTELS'
export const LIST_VIEW = 'LIST_VIEW'
export const MAP_VIEW = 'MAP_VIEW'
export const SHOW_FILTERS = 'SHOW_FILTERS'
export const HIDE_FILTERS = 'HIDE_FILTERS'

// ------------------------------------
// Actions
// ------------------------------------

// fetch('//offline-news-api.herokuapp.com/stories')
//     .then(function(response) {
//         if (response.status >= 400) {
//             throw new Error("Bad response from server");
//         }
//         return response.json();
//     })
//     .then(function(stories) {
//         console.log(stories);
//     });

export function getHotels () {
  return {
    type: GET_HOTELS
  }
}

export function listView () {
  return {
    type: LIST_VIEW
  }
}

export function mapView () {
  return {
    type: MAP_VIEW
  }
}

export function showFilters () {
  return {
    type: SHOW_FILTERS
  }
}

export function hideFilters () {
  return {
    type: HIDE_FILTERS
  }
}

export const actions = {
  getHotels,
  listView,
  mapView,
  showFilters,
  hideFilters
}

// ------------------------------------
// Reducers
// ------------------------------------

import data from 'static/data/hotels.json'

const initialState = {
  hotels: data,
  isListView: true,
  showMobileFilters: false
}

export default function searchResultsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOTELS:
      return { ...state, hotels: data }

      case LIST_VIEW:
        return { ...state, isListView: true }

      case MAP_VIEW:
        return { ...state, isListView: false }

      case SHOW_FILTERS:
        document.getElementsByTagName('html')[0].classList.add('showed-filter');
        return { ...state, showMobileFilters: true }

      case HIDE_FILTERS:
        document.getElementsByTagName('html')[0].classList.remove('showed-filter');
        return { ...state, showMobileFilters: false }

    default:
      return state;
  }
}
