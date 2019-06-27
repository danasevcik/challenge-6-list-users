import React from 'react';

class Card extends React.Component {

  render() {
    console.log(this.props);
    return(
      <div>
      Card
        <div>Name: {this.props.user.name.first.toUpperCase() + " " + this.props.user.name.last.toUpperCase()}</div>
        <div>Gender: {this.props.user.gender}</div>
        <div>Age: {this.props.user.dob.age}</div>
        <div>DOB: {this.props.user.dob.date.slice(0,10)}</div>


      </div>
    )
  }
}

export default Card;
