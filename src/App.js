import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <div 
            class="row"
            style={{display: 'grid', gridTemplateColumns: '25% 75%'}}
          >
            <div class="col-sm">
              <SideMenu />
            </div>
            <div class="col-sm">
              <h1>
                Hi! My name is Jacob Spade and welcome to my blog! I post shit about React, Node, and other JavaScript shit.
              </h1>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
