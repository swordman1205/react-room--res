import React from 'react'
import classes from './Switcher.scss'

export const Switcher = (props) => (
  <button
  onClick={props.switchView}
  className={props.customerView ? classes['container--customer'] : classes['container']}>
    <span className={classes['btn--agent']}></span>
    <span className={classes['btn--customer']}></span>
  </button>
)

Switcher.propTypes = {
  switchView: React.PropTypes.func.isRequired,
  customerView: React.PropTypes.bool.isRequired
}

export default Switcher
