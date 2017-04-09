import React from 'react';

class DisplayName extends React.Component {

  render() {
    const { getUserProfile } = this.props;
    return (
    <span>
      {getUserProfile.results[0].name.displayName}
    </span>
    )
  }

}

export default DisplayName;
