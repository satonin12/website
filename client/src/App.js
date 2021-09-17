import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom'

import './index.scss'
import 'macro-css'

import { Home } from './pages/Home.js'
import ProductList from './pages/ProductList.js'
import Blast from './pages/Blast.js'
import Pug from './pages/Pug.js'
import TimersDashboard from './pages/TimersDashboard.js'
import { Projects } from './pages/Projects/Projects'
import { About } from './pages/About/About'
import { Resume } from './pages/Resume/Resume'
import VideoChat from './pages/VideoChat/VideoChat'

function App() {
  return (
    <>
    {/* TODO: add header <-> navbar */}
    <Router>
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/resume" exact>
          <Resume />
        </Route>

        <Route path="/product_list" exact>
          <ProductList />
        </Route>

        <Route path="/project" exact>
          <Projects />
        </Route>

        <Route path="/timers" exact>
          <TimersDashboard />
        </Route>

        <Route path="/blast" exact>
          <Blast />
        </Route>

        <Route path="/videochat" exact>
          <VideoChat />
        </Route>

        <Route path="/pug" exact>
          <Pug />
        </Route>

        <Redirect to="/home" />
      </Switch>
    </Router>
  </>
  )
}

export default App