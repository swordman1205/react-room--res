import React from 'react';
import { Link } from 'react-router'
import classes from './HotelMapItem.scss'
import decimalAdjust from 'utils/decimalAdjust'
import tripadvisor from 'static/img/tripadvisor.png'
import RightArrow from 'static/img/right-arrow.svg'

class HotelMapItem extends React.Component {
  render() {
    const {
      name,
      rating,
      tripadvisorRate,
      description,
      onlinePrice,
      netPrice,
      freeCancellation
    } = this.props.hotel;

    return (
      <li className={classes.item}>
        <div className={classes.inner}>
          <div className={classes['top-block']}>
            <div className={classes['title-row']}>
              <Link to='#' className={classes.title}>{name}</Link>
            </div>
            <div className={classes['row']}>
              <div className={classes['rating']}>
                <div className={classes['current-rating']} style={{width: rating + '%'}}></div>
              </div>
              <div className={classes['rating-text']}>{Math.round10((rating/100) * 5, -1)}/5</div>
              {freeCancellation ? <div className={classes['cancellation']}>FREE Cancellation</div> : null}
            </div>
            <div className={classes['row']}>
              <button className='btn btn--b-link btn--info'>Hotel Information</button>
              <button className='btn btn--b-link btn--location'>View Location</button>
            </div>
            <div className={classes['row']}>
              Rated #{tripadvisorRate} on
              <img className={classes.tripadvisor} src={tripadvisor} alt='tripadvisor' />
            </div>
            <ul className={classes['description']}>
              {description.map((hotel, i) => (
                <li key={i}>
                  {hotel}
                </li>
              ))}
            </ul>
          </div>
          <div className={classes['net-price'] + ' table'}>
            <div className={classes['price-block'] + ' table-cell'}>
              <div>Our Net Price (Avg/Night)</div>
              <div className={classes['net-price-row']}>
              {netPrice}<span className={classes['small-text']}>AUD</span>
              </div>
            </div>
            <div className={classes['btn-cell']}>
              <Link to='#' className='btn btn--green-book fl-right'>
                Book Net Price <img src={RightArrow} alt='arrow' />
              </Link>
            </div>
          </div>
          <div className='table'>
            <div className={classes['price-block'] + ' table-cell'}>
              <div>Our Net Price (Avg/Night)</div>
              <div className={classes['online-price-row']}>
                {onlinePrice}<span className={classes['x-small-text']}>AUD</span>
              </div>
            </div>
            <div className={classes['btn-cell--online']}>
              <Link to='#' className='btn btn--blue fl-right'>
                Book Online Rate
              </Link>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

HotelMapItem.propTypes = {
  hotel: React.PropTypes.object.isRequired
};

export default HotelMapItem
