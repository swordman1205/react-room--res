import React from 'react'
import classes from './Counter.scss'

class Counter extends React.Component {
  // constructor(props) {
  //   super(props)
  //
  //   // this.props.increment = this.props.increment.bind(this)
  //   // this.props.decrement = this.props.decrement.bind(this)
  //
  //   // console.log(this.props.increment.bind(this))
  // }

  render() {
    const { counter, increment, decrement } = this.props

    return (
      <div className={classes.container}>
        <button type='button' className='btn btn--counter' onClick={decrement}>
          &minus;
        </button>
        <span className={classes.value}>
          {counter}
        </span>
        <button type='button' className='btn btn--counter' onClick={increment}>
          +
        </button>
      </div>
    )
  }
}

// export const Counter = (props) => (
//   <div className={classes.container}>
//     <button type='button' className='btn btn--counter' onClick={props.decrement}>
//       &minus;
//     </button>
//     <span className={classes.value}>
//       {props.counter}
//     </span>
//     <button type='button' className='btn btn--counter' onClick={props.increment}>
//       +
//     </button>
//   </div>
// )

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired
}

export default Counter
