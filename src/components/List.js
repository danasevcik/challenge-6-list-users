import React from 'react';
import Card from './Card'

class List extends React.Component {

  createCards = (props) => {
    let cards = props.users.map(user => {
      return <Card user={user} />
    })
    return cards
  }

  render() {
    return(
      <div>
        {this.createCards(this.props)}
      </div>
    )
  }
}

export default List;
