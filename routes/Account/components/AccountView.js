import React from 'react'
import Navigation from '../containers/Navigation'

export const AccountView = ({ children }) => (
  <div>
    <Navigation />
    <main>
      {children}
    </main>
  </div>
)

AccountView.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default AccountView
