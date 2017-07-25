import React from 'react'
import classes from './Dropdown.scss'

class Dropdown extends React.Component {
  render() {
    const { children, show, hide, isShow } = this.props

    return (
      <div className={isShow ? classes['dropdown--opened'] : classes.dropdown}>
        <button onClick={show} className='btn btn--transparent btn--signin'>
          Sign in
        </button>
        <div className={classes.block}>
          <div>
            {children}
          </div>
        </div>
        <div onClick={hide} className={classes.overlay}></div>
      </div>
    )
  }
}

Dropdown.propTypes = {
  show: React.PropTypes.func.isRequired,
  hide: React.PropTypes.func.isRequired,
  isShow: React.PropTypes.bool.isRequired
}

export default Dropdown
