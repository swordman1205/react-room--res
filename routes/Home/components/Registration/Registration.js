import React from 'react'
import classes from './Registration.scss'
import RightArrow from 'static/img/right-arrow.svg'
import DownArrow from './assets/down-arrow.svg'

export const Registration = () => (
  <div className={classes.registration}>
    <div className='container clear-fix'>
      <div className={classes.description + ' fl-left'}>
        <h3 className={classes.subtitle}>Beat the market.</h3>
        <p className={classes.text}>All day, everyday with net rates at your fingertips.</p>
        <ul>
          <li className={classes.list_item}>Instant beat the market net rates</li>
          <li className={classes.list_item}>Easy margin calculations</li>
          <li className={classes.list_item}>Market leading service</li>
        </ul>
      </div>
      <div className={classes.form + ' fl-right'}>
        <form>
          <div className={classes.form_title}>
            New to Room-Res.com? <span className={classes.blue}>Sign up.</span>
          </div>
          <div className={classes.row}>
            <input className='field' type='text' placeholder='Travel Agency Name' />
          </div>
          <div className={classes.row}>
            <input className='field' type='text' placeholder='First Name' />
          </div>
          <div className={classes.row}>
            <input className='field' type='email' placeholder='Email Address' />
          </div>
          <div>
            <button className='btn btn--green btn--wide'>
              Register today for free <img className={classes.btn_arrow} src={RightArrow} alt='arrow' />
            </button>
          </div>
        </form>
      </div>
    </div>
    <a href='#introducion' className={classes.more}>
      <div>Learn more</div>
      <img className={classes.down_arrow} src={DownArrow} alt='arrow' />
    </a>
  </div>
)

export default Registration
