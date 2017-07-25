import React from 'react'
import { connect } from 'react-redux'
import { showOptions, addRoom, removeRoom, showChildren, hideChildren } from './modules/rooms'
import Rooms from '../../components/Tools/components/Rooms'

const mapActionCreators = {
  showOptions: () => showOptions(),
  addRoom: () => addRoom(),
  removeRoom: (index) => removeRoom(index),
  showChildren: (id, amount) => showChildren(id, amount),
  hideChildren: (id) => hideChildren(id)
}

function mapStateToProps (state) {
  return {
    options: state.roomsReducer.options,
    roomsList: state.roomsReducer.roomsList
  }
}

export default connect(mapStateToProps, mapActionCreators)(Rooms)
