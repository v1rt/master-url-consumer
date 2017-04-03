import React from 'react';
import ServerNamesStores from './Stores/ServerNamesStores'

class Header extends React.Component {

  render() {
    const { getServerUrls } = ServerNamesStores
    const mobxObjectToArrayofObjects = Object.keys(getServerUrls).map((k, index)=> {
      return (
        <li key={index}><strong>{[k]}</strong>: {getServerUrls[k]}</li>
      )
    })

    return(
      <div>
        <ul>
          {mobxObjectToArrayofObjects}
        </ul>
      </div>
    )
  }
}

export default Header;
