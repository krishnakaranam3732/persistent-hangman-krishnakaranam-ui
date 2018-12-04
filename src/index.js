import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Page from './components/page'
import Home from './components/home'
import SignUp from './components/signup'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/player/:id" component={Page} />
      </div>
    </Router>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
