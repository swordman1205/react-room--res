import React from 'react'
import { connect } from 'react-redux'
import { switchView } from './modules/switcher'
import Switcher from '../../components/Switcher'

const mapActionCreators = {
  switchView: () => switchView()
}

function mapStateToProps (state) {
  return {
    customerView: state.switcherReducer.customerView
  }
}

export default connect(mapStateToProps, mapActionCreators)(Switcher)
