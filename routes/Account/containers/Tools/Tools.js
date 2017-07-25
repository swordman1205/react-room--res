import React from 'react'
import { connect } from 'react-redux'
import Tools from '../../components/Tools'

function mapStateToProps (state) {
  return {
    customerView: state.switcherReducer.customerView
  }
}

export default connect(mapStateToProps)(Tools)
