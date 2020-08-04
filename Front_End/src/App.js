import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Content from './components/Content';
import Login from './components/login/Login'
import Body from './components/Body'
import { isValid } from './services/LoginService'
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx'


class App extends Component {

    constructor(props){
      super(props)
    } 

    // async componentDidMount() {
    //   await this.props.loginStore.checkValid();
    // }
    render(){
      console.log(toJS(this.props.loginStore.isValid))
      return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/login' render={()=><Login/>} /> 
            <Route path='/' render={() => <Body />} />
          </Switch>
        </Router>
      </div>
    )
  };
}

export default inject("loginStore")(observer(App));
