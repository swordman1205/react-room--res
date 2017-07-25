import React from 'react'
import { connect } from 'react-redux'
import { toggle } from './modules/navigation'
import Navigation from '../../components/Navigation'

const mapActionCreators = {
  toggle: () => toggle()
}

function mapStateToProps (state) {
  return {
    isOpen: state.navigationReducer.isOpen
  }
}

export default connect(mapStateToProps, mapActionCreators, null, {
  pure: false
})(Navigation);
