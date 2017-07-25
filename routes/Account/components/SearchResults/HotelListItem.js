import React from 'react';
import { Link } from 'react-router'
import Slider from 'react-slick'
import classes from './HotelListItem.scss'
import decimalAdjust from 'utils/decimalAdjust'
import tripadvisor from 'static/img/tripadvisor.png'
import RightArrow from 'static/img/right-arrow.svg'
import tempImg from 'static/img/temp/img.jpg'

class HotelMapItem extends React.Component {
  render() {
    const {name, rating, tripadvisorRate, description, onlinePrice, netPrice, freeCancellation} = this.props.hotel;

    const settings = {
      dots: false,
      infinite: true,
      autoplay: false,
      fade: true,
      draggable: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <li className={classes.item}>
        <div className={classes['img-cell'] + ' table-cell'}>
          <div className={classes['slider-wrap']}>
            <Slider {...settings}>
              <div>
                <img className={classes.img} src={tempImg} alt={name} />
              </div>
              <div>
                <img className={classes.img} src={tempImg} alt={name} />
              </div>
            </Slider>
          </div>
        </div>
        <div className={classes.info + ' table-cell'}>
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
          <div className={classes['row']}>
            <button className='btn btn--b-link btn--info'>Hotel Information</button>
            <button className='btn btn--b-link btn--location'>View Location</button>
          </div>
        </div>
        <div className={classes.buttons + ' table-cell'}>
          <div className={classes['net-price-block']}>
            <div className={classes['price-block']}>
              <div>Our Net Price (Avg/Night)</div>
              <div className={classes['net-price-row']}>
                {onlinePrice}<span className={classes['small-text']}>AUD</span>
              </div>
            </div>
            <div className={classes['btn-cell--online']}>
              <Link to='#' className='btn btn--green-book-small'>
                Book Net Price <img src={RightArrow} alt='arrow' />
              </Link>
            </div>
          </div>
          <div className={classes['online-price-block']}>
            <div className={classes['price-block']}>
              <div>Online Price (Avg/Night)</div>
              <div className={classes['online-price-row']}>
                <div className={classes['price-cell'] + ' table-cell'}>{onlinePrice}<span className={classes['x-small-text']}>AUD</span></div>
                <div className={classes.commision + ' table-cell'}>You make from $8 commission</div>
              </div>
            </div>
            <div className={classes['btn-cell--online']}>
              <Link to='#' className={classes.block + ' btn btn--blue'}>
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
