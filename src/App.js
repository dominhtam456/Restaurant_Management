import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './components/Content';

class App extends Component {
    render(){
      return (
      <div>
        <Router>
          <Sidebar />
          <Content />
        </Router>
      </div>
    )
  };
}

export default App;
