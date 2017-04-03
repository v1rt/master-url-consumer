import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import ServerNamesStores from './Stores/ServerNamesStores'
import Footer from './footer';
import Header from './header';
import logo from './logo.svg';
import './App.scss';

@observer
class App extends Component {

  constructor(props) {
    super(props)
    const { ServerNameUrls, getServerUrls } = ServerNamesStores
    console.log('getServerUrls using toJS()', toJS(getServerUrls));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1>Header component</h1>
          <Header/>
        </div>
        <div>
          <h1>Footer component</h1>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
