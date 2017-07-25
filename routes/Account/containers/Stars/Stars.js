import React from 'react'
import { connect } from 'react-redux'
import { setValue, showDropdown, hideDropdown } from './modules/stars'
import Stars from '../../components/Stars'

const mapActionCreators = {
  setValue: (val) => setValue(val),
  showDropdown: () => showDropdown(),
  hideDropdown: () => hideDropdown()
}

function mapStateToProps (state) {
  return {
    value: state.starsReducer.value,
    isOpened: state.starsReducer.isOpened
  }
}

export default connect(mapStateToProps, mapActionCreators)(Stars)
