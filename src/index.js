import React from 'react'
import ReactDOM from 'react-dom'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom'

import './index.css'

import Home from './pages/Home.js'
import ProductList from './pages/ProductList.js'
import TimersDashboard from './pages/TimersDashboard.js'

ReactDOM.render(
  <>
    {/* TODO: add header <-> navbar */}
    <Router>
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/product_list" exact>
          <ProductList />
        </Route>
        <Route path="/timers" exact>
          <TimersDashboard />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </Router>
  </>,
  document.getElementById('root')
)
