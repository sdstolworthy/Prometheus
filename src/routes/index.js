import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'

class PrometheusRoutes extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    )
  }
}

export default PrometheusRoutes