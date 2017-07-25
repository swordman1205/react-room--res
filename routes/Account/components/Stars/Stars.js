import React from 'react'
import classes from './Stars.scss'

class Stars extends React.Component {
  render() {
    const { showDropdown, hideDropdown, setValue, isOpened, value } = this.props

    isOpened ?
      document.addEventListener('click', hideDropdown) :
      document.removeEventListener('click', hideDropdown)

    return (
      <div className={classes.stars}>
        <div onClick={showDropdown} className={classes.selected}>
          <div className={classes['current--' + value]}></div>
        </div>
        <div className={!isOpened ? classes.dropdown : classes['dropdown--opened']}>
          <div>
            <label className={classes.label}>
              <input onChange={(e) => {setValue(e.target.value)}} className={classes.input} name='star' type='radio' value='5' />
              <span className={classes['star--5']}></span>
            </label>
          </div>
          <div>
            <label className={classes.label}>
              <input onChange={(e) => {setValue(e.target.value)}} className={classes.input} name='star' type='radio' value='4' />
              <span className={classes['star--4']}></span>
            </label>
          </div>
          <div>
            <label className={classes.label}>
              <input onChange={(e) => {setValue(e.target.value)}} className={classes.input} name='star' type='radio' value='3' />
              <span className={classes['star--3']}></span>
            </label>
          </div>
          <div>
            <label className={classes.label}>
              <input onChange={(e) => {setValue(e.target.value)}} className={classes.input} name='star' type='radio' value='2' />
              <span className={classes['star--2']}></span>
            </label>
          </div>
          <div>
            <label className={classes.label}>
              <input onChange={(e) => {setValue(e.target.value)}} className={classes.input} name='star' type='radio' value='1' />
              <span className={classes['star--1']}></span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

Stars.propTypes = {
  showDropdown: React.PropTypes.func.isRequired,
  hideDropdown: React.PropTypes.func.isRequired,
  setValue: React.PropTypes.func.isRequired,
  isOpened: React.PropTypes.bool.isRequired,
  value: React.PropTypes.number.isRequired
}

export default Stars
