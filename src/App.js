import React, { Component } from 'react';
import './styles/App.css';
import './styles/userList.css';
import Header from './components/Header';
import List from './components/List'
import CurrentUser from './components/CurrentUser'

class App extends Component {

  state = {
    users: null,
    currentUser: null
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(data => {
      this.setState({users: data.results})
    })
  }

  handleClick = (email) => {
    console.log('click', email);
    let user = this.state.users.find(user => {
      return user.email === email
    })
    this.setState({currentUser: user})
  }

  render() {
    console.log(this.state);
    return (
        <div className="App">
            <Header appName="SuperDate"/>
            <p className="App-intro"></p>
            {this.state.currentUser ? <CurrentUser user={this.state.currentUser} /> : null}
          <div className="userList">
            {this.state.users ? <List users={this.state.users} handleClick={(email) => {this.handleClick(email)}}/> : null}
          </div>
        </div>
    );
  }
}

export default App;
