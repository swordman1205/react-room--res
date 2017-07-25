import React, {Component, PropTypes} from 'react'
import HotelListItem from './HotelListItem'

class HotelsListList extends Component {
  static propTypes = {
    hotels: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const {hotels} = this.props;

    return (
      <ul>
        {hotels.map((hotel, i) => (
          <HotelListItem
             key={i}
             hotel={hotel}
           />
        ))}
      </ul>
    );
  }
}

export default HotelsListList
