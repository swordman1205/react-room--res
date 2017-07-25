import React from 'react'
import classes from './Rooms.scss'

const ChildrenBlock = (index) => (
  <div className={classes['child-row']}>
    <div className='text-right'>
    <div className={classes.label}>Child {index.index}:</div>
    <div className={classes.child}>
      <select className='field'>
        <option>-?-</option>
        <option value="0">&lt;1</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
      </select>
    </div>
    </div>
  </div>
)

class ChildrenList extends React.Component {
  render() {
    const { childrenList } = this.props

    let list = []

    for (let i = 0; i < childrenList; i++) {
      list.push(i);
    }

    return (
      <div>
      <div className={classes.children}>Age at check in:</div>
       {list.map((item, i) => (
         <ChildrenBlock
            key={i}
            index={i + 1}
          />
       ))}
      </div>
    )
  }
}

const RoomBlock = ({index, id, removeRoom, showChildren, hideChildren, withChildren, childrenList, lengtn}) => (
  <div className={classes.room}>
    <div className={classes['cell--big'] + ' text-left'}>
    <span className={classes.index}>Room {index}:</span>
    {lengtn > 1 &&
      <button onClick={() => {removeRoom(index)}} type='button' className={classes.remove}>remove</button>
    }
    </div>
    <div className={classes.cell}>
      <select name={'adults-' + index} defaultValue='2' className='field'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
      <div className={classes.description}>Aged 18+</div>
    </div>
    <div className={classes.cell}>
      <select
        onChange={
          (event) => {
            if (event.target.value > 0) {
              showChildren(id, event.target.value)
            } else {
              hideChildren(id)
            }
          }
        }
        name={'children-' + index} className='field'>
        <option value='0'>0</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
      <div className={classes.description}>0-17</div>
    </div>
    {withChildren &&
      <ChildrenList childrenList={childrenList} />
    }
  </div>
)

const RoomsList = ({ rooms, addRoom, removeRoom, showChildren, hideChildren }) => (
  <div className={classes.list}>
    {rooms.map((room, i) => (
      <RoomBlock
        key={i}
        id={room.id}
        index={i + 1}
        lengtn={rooms.length}
        {...room}
        removeRoom={removeRoom}
        showChildren={showChildren}
        hideChildren={hideChildren}
      />
    ))}
    <button onClick={() => addRoom()} type='button' className='btn btn--add'>Add another room</button>
  </div>
);

export const Rooms = (props) => (
  <div>
    <label htmlFor='rooms' className='tools__search-label'>Rooms</label>
    {!props.options ?
      <select
      onChange={
        (event) => {
          if (event.target.value == 'more') {
            props.showOptions()
          }
        }
      }
      defaultValue='2'
      id='rooms'
      className='field'>
        <option value='1'>1 room, 1 adult</option>
        <option value='2'>1 room, 2 adults</option>
        <option value='more'>More options...</option>
      </select>
      :
      <div className='tools__search-label tools__search-label--block'>
        <div className={classes.cell}>Adults</div>
        <div className={classes.cell}>Children</div>
      </div>
    }
    {props.options &&
      <RoomsList
        rooms={props.roomsList}
        addRoom={props.addRoom}
        removeRoom={props.removeRoom}
        showChildren={props.showChildren}
        hideChildren={props.hideChildren}
      />
    }
  </div>
)

Rooms.propTypes = {
  showOptions: React.PropTypes.func.isRequired,
  options: React.PropTypes.bool.isRequired,
  addRoom: React.PropTypes.func.isRequired,
  removeRoom: React.PropTypes.func.isRequired,
  roomsList: React.PropTypes.array.isRequired
}

export default Rooms
