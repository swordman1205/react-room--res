import React from 'react'
import { Link } from 'react-router'
import classes from './SearchResultsList.scss'
import InputRange from 'react-input-range'
import HotelsListList from './HotelsListList'

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
        minValue={30}
        maxValue={1000}
        value={this.state.values}
        onChange={this.handleValuesChange.bind(this)}
      />
    );
  }
}

export const SearchResultsList = (props) => (
  <main className='container clear-fix'>
    <div className={props.showMobileFilters ? classes['filters--opened'] : classes.filters}>
      <div className={classes['filters-title']}>Filter by</div>
      <div className={classes['filters-row']}>
        <div className={classes['filters-subtitle--range']}>Filter by price</div>
        <PriceRange />
      </div>
      <div className={classes['filters-row']}>
        <div className={classes['filters-subtitle']}>Stars</div>
        <div className='inline-block'>
          <div>
            <label className={classes.label}>
              <input className={classes.input} name='star' type='radio' value='5' />
              <span className={classes['star--5']}></span>
            </label>
          </div>
          <div>
            <label className={classes.label}>
              <input className={classes.input} name='star' type='radio' value='4' />
              <span className={classes['star--4']}></span>
            </label>
          </div>
          <div>
            <label className={classes.label}>
              <input className={classes.input} name='star' type='radio' value='3' />
              <span className={classes['star--3']}></span>
            </label>
          </div>
          <div>
            <label className={classes.label}>
              <input className={classes.input} name='star' type='radio' value='2' />
              <span className={classes['star--2']}></span>
            </label>
          </div>
          <div>
            <label className={classes.label}>
              <input className={classes.input} name='star' type='radio' value='1' />
              <span className={classes['star--1']}></span>
            </label>
          </div>
        </div>
      </div>
      <div className={classes['filters-row']}>
        <div className={classes.select}>
          <select className='select select--big'>
            <option>BB Rates</option>
            <option value='val-1'>Value 1</option>
            <option value='val-2'>Value 2</option>
          </select>
        </div>
        <div className={classes.select}>
          <select className='select select--big'>
            <option>Cancellation Policy</option>
            <option value='breakfast'>Only rooms including Breakfast</option>
            <option value='cancelled'>Only rooms that can be cancelled</option>
          </select>
        </div>
      </div>
      <div className={classes['close-filter'] + ' text-right'}>
        <button onClick={props.hideFilters} className='btn btn--green'>OK</button>
      </div>
    </div>
    <div className={classes.right}>
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
          <button className='btn btn--b-transparent-small'>Save search</button>
          <Link to='/account' className={classes.modify + ' btn btn--b-transparent-small'}>Modify search</Link>
        </div>
      </div>
      <div className={classes.controls + ' clear-fix'}>
        <div className= {classes.switcher + ' fl-left'}>
          <button className='search__switcher search__switcher--list active'>List</button>
          <button onClick={props.mapView} className='search__switcher search__switcher--map'>Map</button>
        </div>
        <div className={classes['filter-btn']}>
          <button onClick={props.showFilters} className={classes['filter-switcher'] + ' btn btn--link'}>Filters</button>
        </div>
        <div className={classes['sort-by']}>
          <div className={classes['label--black']}>Sort by</div>
          <div className={classes['sort-select']}>
            <select className='select'>
              <option value='low-to-high'>Price (Low to high)</option>
              <option value='high-to-low'>Price (High to low)</option>
            </select>
          </div>
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
      <HotelsListList hotels={props.hotels} />
    </div>
  </main>
)

export default SearchResultsList
