import React from 'react'
import SearchResultsMap from './SearchResultsMap'
import SearchResultsList from './SearchResultsList'

export const SearchResults = (props) => (
  props.isListView ?
  <SearchResultsList
    hotels={props.hotels}
    mapView={props.mapView}
    showFilters={props.showFilters}
    hideFilters={props.hideFilters}
    showMobileFilters={props.showMobileFilters}
   /> :
  <SearchResultsMap
    hotels={props.hotels}
    listView={props.listView}
    showFilters={props.showFilters}
    hideFilters={props.hideFilters}
    showMobileFilters={props.showMobileFilters}
  />
)

export default SearchResults
