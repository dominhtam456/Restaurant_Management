import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Content from './components/Content';
import Login from './components/login/Login'

class App extends Component {
    render(){
      return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route path='/'>
              <Sidebar />
              <Content />
            </Route>          
          </Switch>
        </Router>
      </div>
    )
  };
}

export default App;
