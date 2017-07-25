import React from 'react'
import { Link } from 'react-router'
import classes from './Destinations.scss'

export const Destinations = (props) => (
  <div className='container container--inner'>
    <h2 className='tools__subtitle'>Trending destinations</h2>
    <ul className='clear-fix'>
      {props.items.map(function(item, i) {
        return (
          <li className={classes.item} key={i}>
            <Link className={classes.link} to={item.url}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  </div>
)

export default Destinations
