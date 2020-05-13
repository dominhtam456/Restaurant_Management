import Sidebar from './Sidebar';
import React, { Component } from 'react';
import Content from './Content';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
export default withRouter(class App extends Component {
    render(){
        return(
        <div>
          <Sidebar />
          <Content />
        </div>
        )
    }
})