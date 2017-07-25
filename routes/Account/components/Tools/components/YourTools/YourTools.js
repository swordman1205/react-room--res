import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './YourTools.scss'

export const YourTools = () => (
  <div className='container container--inner'>
    <h2 className='tools__subtitle'>Your tools</h2>
    <ul className='text-center'>
      <li className={classes.item}>
        <Link to='account/reservations'>
          <span className={classes['icon--clock']}></span>
        </Link>
        <div>
          <Link className={classes.link} to='account/reservations'>
            Recent Reservations
          </Link>
        </div>
      </li>
      <li className={classes.item}>
        <Link to='account/profile'>
          <span className={classes['icon--user']}></span>
        </Link>
        <div>
          <Link className={classes.link} to='account/profile'>
            Agent profile
          </Link>
        </div>
      </li>
      <li className={classes.item}>
        <Link to='account/searches'>
          <span className={classes['icon--search']}></span>
        </Link>
        <div>
          <Link className={classes.link} to='account/searches'>
            Find Reservations
          </Link>
        </div>
      </li>
      <li className={classes.item}>
        <Link to='account/reports'>
          <span className={classes['icon--graph']}></span>
        </Link>
        <div>
          <Link className={classes.link} to='account/reports'>
            Sales Reports
          </Link>
        </div>
      </li>
      <li className={classes.item}>
        <Link to='account/link'>
          <span className={classes['icon--chat']}></span>
        </Link>
        <div>
          <Link className={classes.link} to='account/link'>
            Live Chat
          </Link>
        </div>
      </li>
    </ul>
  </div>
)

export default YourTools
