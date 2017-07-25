import React from 'react'
import classes from './RegistrationB.scss'
import RightArrow from 'static/img/right-arrow.svg'

export const RegistrationB = () => (
  <div className={classes.registration}>
    <div className='container clear-fix text-center'>
      <h3 className={classes.subtitle}>Sign up to enjoy all the benefits of Room-Res.com today</h3>
      <form>
        <div className={classes.input + ' inline-block'}>
          <input className={classes.left_rounded} type='text' placeholder='Travel Agency Name' />
        </div>
        <div className={classes.input + ' inline-block'}>
          <input className={classes.field} type='text' placeholder='First Name' />
        </div>
        <div className={classes.input + ' inline-block'}>
          <input className={classes.right_rounded} type='email' placeholder='Email Address' />
        </div>
        <div className={classes.button + ' inline-block'}>
          <button className={classes.btn_green + ' btn btn--t-green'}>
            Register today for free
            <img className={classes.btn_arrow} src={RightArrow} alt='arrow' />
          </button>
        </div>
      </form>
    </div>
  </div>
)

export default RegistrationB
