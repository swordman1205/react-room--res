import React from 'react'
import { IndexLink } from 'react-router'
import Signin from '../Signin'
import Dropdown from '../../containers/Dropdown'
import Logo from './assets/room-res.png'
import classes from './Header.scss'

export const Header = () => (
  <header className={classes.header}>
    <div className='container clear-fix'>
      <IndexLink to='/' className='fl-left'>
        <img src={Logo} alt='Room-Res' />
      </IndexLink>
      <div className='fl-right'>
        <Dropdown>
          <Signin />
        </Dropdown>
      </div>
    </div>
  </header>
)

export default Header
//
// export const Header = () => (
//   <header className=>
//     <img src='/img/room-res.svg' />
//     <IndexLink to='/' activeClassName={classes.activeRoute}>
//       Home
//     </IndexLink>
//     {' · '}
//     <Link to='/counter' activeClassName={classes.activeRoute}>
//       Counter
//     </Link>
//   </header>
// )
//
// export default Header
