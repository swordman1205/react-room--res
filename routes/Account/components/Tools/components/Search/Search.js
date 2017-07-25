import React from 'react'
import { browserHistory, push, Link } from 'react-router'
import classes from './Search.scss'
import RightArrow from 'static/img/right-arrow.svg'
import Autocomplete from 'components/Autocomplete'
import moment from 'moment'
import DateRange from 'components/DateRange'
import Rooms from 'routes/Account/containers/Rooms'

export const Search = (props) => (
  <div className='container container--inner'>
    <h2 className='tools__subtitle'>Search hotels</h2>
    <form>
      <div className={classes.table}>
        <div className={classes.cell}>
          <label htmlFor='hotel' className='tools__search-label'>Going to</label>
          <Autocomplete minDate={moment()} />
        </div>
        <div className={classes['cell--daterange']}>
          <DateRange />
        </div>
        <div className={classes['cell--medium']}>
        <Rooms />
        </div>
        <div className={classes['cell--btn']}>
          <button className='btn btn--green btn--big'>
            <b>Search hotels</b>
            <img className={classes.btn_arrow} src={RightArrow} alt='arrow' />
          </button>
        </div>
      </div>
    </form>
  </div>
)

export default Search
