import React from 'react'
import classes from './DateRange.scss'
import DatePicker from 'react-datepicker'
import moment from 'moment'

const DateRange = React.createClass({
  getInitialState: function () {
      return {
        startDate: moment(),
        endDate: moment().add(1, 'days')
      }
    },

  handleChange: function ({ startDate, endDate }) {
    startDate = startDate || this.state.startDate
    endDate = endDate || this.state.endDate

    if (startDate.isAfter(endDate)) {
      const gap = endDate - this.state.startDate;

      startDate = startDate
      endDate = moment(startDate).add(gap)
    }

    this.setState({ startDate, endDate })
  },

  handleChangeStart: function (startDate) {
    this.handleChange({ startDate })
    document.getElementById('to').click()
  },

  handleChangeEnd: function (endDate) {
    this.handleChange({ endDate })
  },

  render: function () {
    return (
      <div className='table'>
        <div className={classes['cell']}>
          <label htmlFor='from' className='tools__search-label'>From</label>
          <DatePicker
            fixedHeight
            selected={this.state.startDate}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart}
            dateFormat='DD/MM/YY'
            minDate={moment()}
            id='from'
            className='field'
            readOnly={true}
          />
        </div>
        <div className={classes['cell']}>
          <label htmlFor='to' className='tools__search-label'>To</label>
          <DatePicker
            fixedHeight
            selected={this.state.endDate}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd}
            dateFormat='DD/MM/YY'
            minDate={moment(this.state.startDate).add(1, 'days')}
            id='to'
            className='field'
            readOnly={true}
            popoverTargetAttachment='bottom right'
            popoverAttachment='top right'
          />
        </div>
      </div>
    );
  }
})

export default DateRange
