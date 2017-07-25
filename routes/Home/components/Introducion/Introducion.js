import React from 'react'
import classes from './Introducion.scss'

export const Introducion = () => (
  <div className={classes.introducion}>
    <div className={classes.text_block + ' container text-center'}>
      <h3 id='introducion' className={classes.title}>
        We offer instant sign up and immediate access to thousands of hotels worldwide.
      </h3>
      <p className={classes.text}>
        Because they’re net rates, you have the flexibility to offer the right price for you and your customer.
      </p>
    </div>
    <div className={classes.reasons}>
      <div className='container text-center'>
        <h3 className={classes.subtitle}>Here’s 3 simple reasons to join us...</h3>
        <ul>
          <li className={classes.reason}>
            <div className={classes['icon--graph']}></div>
            <h4 className={classes.reason_title}>Beat the market</h4>
            <p className={classes.reason_text}>
              At vero eos et accusamus et iust odio dignissimos ducimus qui 
              blaitiis praeent iumeos et accus
            </p>
          </li>
          <li className={classes.reason}>
            <div className={classes['icon--calculator']}></div>
            <h4 className={classes.reason_title}>Easy margin calculation</h4>
            <p className={classes.reason_text}>
              At vero eos et accusamus et iust odio dignissimos ducimus qui blaitiis praeent iumeos et accus
            </p>
          </li>
          <li className={classes.reason}>
            <div className={classes['icon--goblet']}></div>
            <h4 className={classes.reason_title}>Market leading service</h4>
            <p className={classes.reason_text}>
              At vero eos et accusamus et iust odio dignissimos ducimus qui blaitiis praeent iumeos et accus
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Introducion
