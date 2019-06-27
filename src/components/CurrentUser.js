import React from 'react';

class CurrentUser extends React.Component {

  render() {
    return(
      <div id="current-user">
        <h1>Currently Viewing {this.props.user.name.first.toUpperCase() + " " + this.props.user.name.last.toUpperCase()}'s Profile!</h1>
        <div>Gender: {this.props.user.gender}</div>
        <div>Age: {this.props.user.dob.age}</div>
        <div>DOB: {this.props.user.dob.date.slice(0,10)}</div>
        <div>Email: {this.props.user.email}</div>
        <img src={this.props.user.picture.medium} alt=""/>
      </div>
    );
  }
}

export default CurrentUser;
