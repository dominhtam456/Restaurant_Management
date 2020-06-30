import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Content from './components/Content';
import Login from './components/login/Login'
import Body from './components/Body'

class App extends Component {



    render(){
      return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/login' render={()=><Login/>} /> 
            <Route path='/' render={() => localStorage.getItem("token") ? <Body /> : <Redirect to='login' />} />         
          </Switch>
        </Router>
      </div>
    )
  };
}

export default App;
