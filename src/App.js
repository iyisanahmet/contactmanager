import React, { Component } from 'react';
import Contacts from './components/Contacts';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>CONTACT MANAGER</h2>
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
