import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { toJS } from 'mobx';
import ServerNamesStores from './Stores/ServerNamesStores';
import UserProfileStore from './Stores/UserProfileStore';

const stores = { ServerNamesStores,  UserProfileStore}
import Footer from './Components/Footer';
import Header from './Components/Header';
import logo from './logo.svg';
import './App.scss';

// @observer
class App extends Component {

  constructor(props) {
    super(props)
    const { getServerUrls } = ServerNamesStores
    const { UserProfileObject } = UserProfileStore;
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
    if (e.keyCode === 13 ) {
      return this.updateDisplayName();
    }
  }

  render() {
    return (
      <Provider {...stores}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React + MobX</h2>
          </div>
          <div>
            Display Name(in App.js): {UserProfileStore.UserProfileDisplayName}
          </div>
          <div>
            <p><input onChange={this.onInputChange} onKeyDown={this.handleKeyDown} value={this.state.displayName}/><button onClick={this.updateDisplayName}>Update display name</button></p>
            <p><button onClick={this.updateWebUrl}>Update Web Url</button></p>
          </div>
          <div>
            <h1>Header component - Passing stores to the child</h1>
            <Header UserProfileStore={UserProfileStore} ServerNamesStores={ServerNamesStores}/>
          </div>
          <div>
            <h1>Footer component using @inject</h1>
            <Footer/>
          </div>

        </div>
      </Provider>
    );
  }
}

export default App;
