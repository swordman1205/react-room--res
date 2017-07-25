import React from 'react'
import classes from './Dropdown.scss'
import { connect } from 'react-redux'
import { show, hide } from './modules/dropdown'
import Dropdown from 'components/Dropdown'

const mapActionCreators = {
  show: () => show(),
  hide: () => hide()
}

function mapStateToProps (state) {
  return {
    isShow: state.dropdownReducer.isShow
  }
}

export default connect(mapStateToProps, mapActionCreators)(Dropdown)
