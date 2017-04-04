import React from 'react';
import { observer } from 'mobx-react';
import ServerNamesStores from './Stores/ServerNamesStores';
import UserProfileStore from './Stores/UserProfileStore';

@observer
class Header extends React.Component {

  render() {
    const { getServerUrls } = ServerNamesStores;
    const { getUserProfile } = UserProfileStore;
    const mobxObjectToArrayofObjects = Object.keys(getServerUrls).map((k, index)=> {
      return (
        <li key={index}><strong>{[k]}</strong>: {getServerUrls[k]}</li>
      )
    })

    return(
      <div>
        Display Name: {getUserProfile.results[0].name.displayName}
        <ul>
          {mobxObjectToArrayofObjects}
        </ul>
      </div>
    )
  }
}

export default Header;
