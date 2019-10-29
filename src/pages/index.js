import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './home'
import Paper from './paper'

const App = () =>
  <Router>
    <Switch>
      <Route exact path="/research" component={Home}/>
      <Route exact path="/research/:id" component={Home}/>
      <Route exact path="/research/:id/paper" component={Paper}/>
    </Switch>
  </Router>



export default App