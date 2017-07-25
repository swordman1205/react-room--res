import React from 'react'
import { connect } from 'react-redux'
import { listView, mapView, showFilters, hideFilters } from './modules/searchResults'
import SearchResults from '../../components/SearchResults'

const mapActionCreators = {
  listView: () => listView(),
  mapView: () => mapView(),
  showFilters: () => showFilters(),
  hideFilters: () => hideFilters()
}

const mapStateToProps = (state) => ({
  hotels: state.searchResults.hotels,
  isListView: state.searchResults.isListView,
  showMobileFilters: state.searchResults.showMobileFilters
})

export default connect(mapStateToProps, mapActionCreators)(SearchResults)
