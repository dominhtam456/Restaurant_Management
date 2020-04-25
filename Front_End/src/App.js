import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Content from './components/Content';
import Login from './components/login/Login'

class App extends Component {


    render(){
      const container = () => {
        return (<div>
          <Sidebar />
          <Content />
        </div>)
      }
      return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route path='/'>
              {localStorage.getItem("token") ? container() : <Redirect to='login' />} 
            </Route>          
          </Switch>
        </Router>
      </div>
    )
  };
}

export default App;
