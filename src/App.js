import React, { Component } from 'react';
import './styles/App.css';
import './styles/userList.css';
import Header from './components/Header';
import List from './components/List'

class App extends Component {

  state = {
    users: null
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(data => {
      this.setState({users: data.results})
    })
  }

  render() {
    console.log(this.state);
    return (
        <div className="App">
            <Header appName="SuperDate"/>
            <p className="App-intro"></p>
          <div className="userList">
            {this.state.users ? <List users={this.state.users}/> : null}
          </div>
        </div>
    );
  }
}

export default App;
