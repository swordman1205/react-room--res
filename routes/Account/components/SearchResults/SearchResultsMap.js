import React from 'react'
import { Link } from 'react-router'
import classes from './SearchResultsMap.scss'
import InputRange from 'react-input-range'
import Stars from '../../containers/Stars'
import HotelsListMap from './HotelsListMap'

class PriceRange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        min: 100,
        max: 1000,
      },
    };
  }

  handleValuesChange(component, values) {
    this.setState({
      values: values,
    });
  }

  render() {
    return (
      <InputRange
        labelPrefix='$'
        minValue={100}
        maxValue={1000}
        value={this.state.values}
        onChange={this.handleValuesChange.bind(this)}
      />
    );
  }
}

export const SearchResultsMap = (props) => (
  <main className='container'>
    <div className={classes.header}>
      <div className={classes['left-cell']}>
        <div className={classes['inner-cell']}>
          <div className={classes.label}>Destination</div>
          <div className={classes.value}>Waikiki Beach, HI, U.S.</div>
        </div>
        <div className={classes['inner-cell']}>
          <div className={classes.label}>Dates</div>
          <div className={classes.value}>May 24 - Jun 7, 2016</div>
        </div>
        <div className={classes['inner-cell']}>
          <div className={classes.label}>Rooms</div>
          <div className={classes.value}>1 Room, 2 Guests</div>
        </div>
      </div>
      <div className={classes['right-cell']}>
        <button className='btn btn--b-transparent'>Save search</button>
        <Link to='/account' className={classes.modify + ' btn btn--b-transparent'}>Modify search</Link>
      </div>
    </div>
    <div className={props.showMobileFilters ? classes['filters--opened'] : classes.filters}>
      <div className={classes['label--inline']}>Filter by</div>
      <div className={classes['sub-label']}>Price</div>
      <div className={classes['price-range']}>
        <PriceRange />
      </div>
      <div className={classes['sub-label']}>Stars</div>
      <Stars />
      <div className={classes.select}>
        <select className={classes['select-field'] + ' select'}>
          <option>BB Rates</option>
          <option value='val-1'>Value 1</option>
          <option value='val-2'>Value 2</option>
        </select>
      </div>
      <div className={classes.select}>
        <select className={classes['select-field'] + ' select'}>
          <option>Cancellation Policy</option>
          <option value='breakfast'>Only rooms including Breakfast</option>
          <option value='cancelled'>Only rooms that can be cancelled</option>
        </select>
      </div>
      <div className={classes['label--inline-right']}>Sort by</div>
      <div className={classes.select}>
        <select className={classes['select-field'] + ' select'}>
          <option value='low-to-high'>Price (Low to high)</option>
          <option value='high-to-low'>Price (High to low)</option>
        </select>
      </div>
      <div className={classes['close-filter'] + ' text-right'}>
        <button onClick={props.hideFilters} className='btn btn--green'>OK</button>
      </div>
    </div>
    <div className='clear-fix'>
      <div className={classes.controls + ' clear-fix'}>
        <div className='fl-left'>
          <button onClick={props.listView} className='search__switcher search__switcher--list'>List</button>
          <button className='search__switcher search__switcher--map active'>Map</button>
        </div>
        <div className={classes['filter-btn']}>
          <button onClick={props.showFilters} className={classes['filter-switcher'] + ' btn btn--link'}>Filters</button>
        </div>
        <div className={classes.showing + ' fl-right'}>
          <div className={classes['label--black']}>Showing</div>
          <ul className={classes['amount-list']}>
            <li className={classes['amount-item']}>
              <button className='btn btn--link-black'>25</button>
            </li>
            <li className={classes['amount-item']}>
              <button className='btn btn--link-black'>50</button>
            </li>
            <li className={classes['amount-item']}>
              <button className='btn btn--link-black'>75</button>
            </li>
            <li className={classes['amount-item']}>
              <button className='btn btn--link-black'>100</button>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.map}>
        <iframe className={classes['map-frame']} src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d273923.15030376037!2d30.708525134459258!3d50.36781320928388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1469090589322'
        width='340' height='805' frameborder='0'></iframe>
      </div>
      <div className={classes.list}>
        <HotelsListMap hotels={props.hotels} />
      </div>
    </div>
  </main>
)

export default SearchResultsMap
