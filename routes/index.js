// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import NotFound from './NotFound'
import Home from './Home'
import CounterRoute from './Counter'
import TermsOfUse from './TermsOfUse'
import PrivacyPolicy from './PrivacyPolicy'
import BookingConditions from './BookingConditions'
import PrivacyCollectionNotice from './PrivacyCollectionNotice'
import ContactUs from './ContactUs'
import AccountView from './Account'
import Tools from './Account/containers/Tools'
import RecentReservations from './Account/components/RecentReservations'
import SearchResults from './Account/containers/SearchResults'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

const accountRoutes = (store) => ({
  component: AccountView,
  indexRoute: AccountView,
  childRoutes: [
    Tools(store),
    RecentReservations(store),
    SearchResults(store)
  ]
})

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    CounterRoute(store),
    TermsOfUse(store),
    PrivacyPolicy(store),
    BookingConditions(store),
    PrivacyCollectionNotice(store),
    ContactUs(store),
    accountRoutes(store),
    NotFound(store)
  ]
})

export default createRoutes
