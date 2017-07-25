import React from 'react'
import classes from './Signin.scss'
import RightArrow from 'static/img/right-arrow.svg'

export const Signin = () => (
  <div>
    <h4 className={classes.title}>Sign in to your account</h4>
    <form>
      <div className={classes.row}>
        <input className="field field--transparent" type="email" placeholder="Email Address" />
      </div>
      <div className={classes.row}>
        <input className="field field--transparent" type="password" placeholder="Password" />
      </div>
      <button className="btn btn--green btn--wide">
        Sign in
        <img className={classes.btn_arrow} src={RightArrow} alt='arrow' />
      </button>
    </form>
  </div>
)

export default Signin
