import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import ServerNamesStores from './Stores/ServerNamesStores';
import UserProfileStore from './Stores/UserProfileStore';

import Footer from './footer';
import Header from './header';
import logo from './logo.svg';
import './App.scss';

@observer
class App extends Component {

  constructor(props) {
    super(props)
    const { ServerNameUrls, getServerUrls } = ServerNamesStores
    const { UserProfileDisplayName, UserProfileObject } = UserProfileStore;
    console.log('@@@ UserProfileDisplayName', UserProfileObject.results[0].name.displayName)
    console.log('getServerUrls using toJS()', toJS(getServerUrls));
    this.state = {
      displayName: ''
    }
  }

  updateWebUrl = () => {
    ServerNamesStores.updateUrl('http://www.'+(0|Math.random()*9e6).toString(32)+'.com');
  }

  updateDisplayName = () => {
    UserProfileStore.updateDisplayName(this.state.displayName);
    this.setState({displayName: ''})
  }

  onInputChange = (e) => {
    this.setState({displayName: e.target.value})
  }

  handleKeyDown = (e) => {
    if (e.keyCode == 13 ) {
      return this.updateDisplayName();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React + MobX</h2>
        </div>
        <div>
          Display Name: {UserProfileStore.UserProfileDisplayName}
        </div>
        <div>
          <p><input onChange={this.onInputChange} onKeyDown={this.handleKeyDown} value={this.state.displayName}/><button onClick={this.updateDisplayName}>Update display name</button></p>
          <p><button onClick={this.updateWebUrl}>Update Web Url</button></p>
        </div>
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
