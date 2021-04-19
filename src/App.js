import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import GlobalStyles from './components/GlobalStyles'
import LandingPage from './components/LandingPage'
import WorkingPage from './components/WorkingPage'
import Testing from './components/Testing'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/work" component={WorkingPage} />
            <Route exact path="/test" component={Testing} />
          </Switch>
        </div>
      </Router>
      <GlobalStyles />
    </>
  )
}