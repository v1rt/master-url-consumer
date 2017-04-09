import React from 'react';
import { observer } from 'mobx-react';
import Clock from 'Components/Common/DisplayName';

@observer
class Header extends React.Component {

  render() {
    const { getServerUrls } = this.props.ServerNamesStores;
    const { getUserProfile } = this.props.UserProfileStore;
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
        DisplayName(passing it down as props from this.props): <Clock getUserProfile={getUserProfile}/>
      </div>
    )
  }
}

export default Header;
