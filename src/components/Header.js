import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {

  render() {
    return(
        <header className="App-header">
          <h1>{this.props.appName}</h1>
        </header>
    );
  }
}

export default Header;
