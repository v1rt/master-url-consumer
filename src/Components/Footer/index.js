import React from 'react';
import { observer, inject } from 'mobx-react';
import DisplayName from 'Components/Common/DisplayName';

@inject('UserProfileStore', 'ServerNamesStores') @observer
class Footer extends React.Component {

  render() {
    const { getServerUrls } = this.props.ServerNamesStores
    const { getUserProfile } = this.props.UserProfileStore;
    const mobxObjectToArrayofObjects = Object.keys(getServerUrls).map((k, index)=> {
      return (
        <li key={index}><strong>{[k]}</strong>: {getServerUrls[k]}</li>
      )
    })

    return(
      <div>
        Display Name: {this.props.UserProfileStore.UserProfileDisplayName}
        <ul>
          {mobxObjectToArrayofObjects}
        </ul>
        DisplayName(passing it down as props from @inject): <DisplayName getUserProfile={getUserProfile}/>
      </div>
    )
  }
}

export default Footer;
