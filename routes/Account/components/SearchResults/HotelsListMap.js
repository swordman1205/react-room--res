import React, {Component, PropTypes} from 'react'
import HotelMapItem from './HotelMapItem'

class HotelsListMap extends Component {
  static propTypes = {
    hotels: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const {hotels} = this.props;

    return (
      <ul className='clear-fix'>
        {hotels.map((hotel, i) => (
          <HotelMapItem
             key={i}
             hotel={hotel}
           />
        ))}
      </ul>
    );
  }
}

export default HotelsListMap
