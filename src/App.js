import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideMenu from './components/SideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div 
            class="row"
            style={{display: 'grid', gridTemplateColumns: '25% 75%'}}
          >
            <div class="col-sm">
              <SideMenu />
            </div>
            <div class="col-sm">
              One of three columns
            </div>
          </div>
      </div>
    );
  }
}

export default App;
