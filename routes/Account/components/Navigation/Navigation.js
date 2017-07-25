import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Navigation.scss'
import Switcher from '../../containers/Switcher'

export const Navigation = (props) => (
  <nav className={classes.nav}>
    <div className='container clear-fix'>
      <button onClick={props.toggle} className={classes.toggle}>
        <span className={classes.toggle__strip}></span>
        <span className={classes.toggle__strip}></span>
        <span className={classes.toggle__strip}></span>
      </button>
      <Switcher />
      <ul className={props.isOpen ? classes['list--opened'] : classes['list']}>
        <li className={classes.item}>
          <IndexLink to='/account' className={classes.link} activeClassName={classes['link--active']}>
            Tools
          </IndexLink>
        </li>
        <li className={classes.item}>
          <Link to='/account/reservations' className={classes.link} activeClassName={classes['link--active']}>
            Recent Reservations
          </Link>
        </li>
        <li className={classes.item}>
          <Link to='/account/searches' className={classes.link} activeClassName={classes['link--active']}>
            Recent Searches
          </Link>
        </li>
        <li className={classes.item}>
          <Link to='/account/profile' className={classes.link} activeClassName={classes['link--active']}>
            Agent Profile
          </Link>
        </li>
        <li className={classes.item}>
          <Link to='/account/reports' className={classes.link} activeClassName={classes['link--active']}>
            Sales Reports
          </Link>
        </li>
        <li className={classes.item}>
          <Link to='/account/contact' className={classes.link} activeClassName={classes['link--active']}>
            Contact
          </Link>
        </li>
        <li className={classes.item}>
          <Link to='/account/link' className={classes.link} activeClassName={classes['link--active']}>
            Live Chat
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

Navigation.propTypes = {
  toggle: React.PropTypes.func.isRequired,
  isOpen: React.PropTypes.bool.isRequired
}

export default Navigation
