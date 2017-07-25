import React from 'react'
import { Link } from 'react-router'
import classes from './Footer.scss'

export const Footer = () => (
  <footer className={classes.footer}>
    <div className='container'>
      <span className={classes.copyright}>&copy; 2016 Room-Res.com. All rights reserved.</span>
      <ul className='inline-block'>
        <li className='inline-block'>
          <Link className={classes.link} to='/terms_of_use'>Terms of Use</Link>
        </li>
        <li className='inline-block'>
          <Link className={classes.link} to='/privacy_policy'>Privacy Policy</Link>
        </li>
        <li className='inline-block'>
          <Link className={classes.link} to='/booking_conditions'>Booking Conditions</Link>
        </li>
        <li className='inline-block'>
          <Link className={classes.link} to='/privacy_collection_notice'>Privacy Collection Notice</Link>
        </li>
        <li className='inline-block'>
          <Link className={classes.link} to='/contact_us'>Contact us</Link>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
