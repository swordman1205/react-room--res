import React from 'react'
import Search from './components/Search'
import YourTools from './components/YourTools'
import Destinations from './components/Destinations'
import { browserHistory, push, Link } from 'react-router'
import { route } from 'react-router-redux'
const list = [
  {
    title: 'Brussels Hotels',
    url: 'test'
  },
  {
    title: 'Cairns Hotels',
    url: 'test'
  },
  {
    title: 'Chicago, IL Hotels',
    url: 'test'
  },
  {
    title: 'Christchurch Hotels',
    url: 'test'
  },
  {
    title: 'Florence Hotels',
    url: 'test'
  },
  {
    title: 'Hawaii - Oahu Hotels',
    url: 'test'
  }
]

export const Tools = (props) => (
  <div>
    <Search />
    {props.customerView ? '' : <YourTools />}
    <Destinations items={list} />
  </div>
)

Tools.propTypes = {
  customerView: React.PropTypes.bool.isRequired
}

export default Tools
