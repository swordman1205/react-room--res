import { connect } from 'react-redux'
import { increment, decrement } from './modules/counter'

import Counter from 'components/Counter'

const mapActionCreators = {
  increment: () => increment(1),
  decrement: () => decrement(1)
}

const mapStateToProps = (state) => ({
  counter: state.counterReducer
})

export default connect(mapStateToProps, mapActionCreators)(Counter)
