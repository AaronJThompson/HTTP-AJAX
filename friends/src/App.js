import React from 'react';
import axios from 'axios';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendFrom';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      nameValue: '',
      ageValue: '',
      emailValue: '',
    }
  }
  updateFriends = () => {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({
        friends: response.data
      })
    })
    .catch(error => {
      console.log('Error when getting friends:', error)
    })
  }
  componentDidMount() {
    this.updateFriends();
  }
  addFriendAPI = (name, age, email) => {
    axios
      .post('http://localhost:5000/friends', {name:name, age:age, email:email})
      .then(this.updateFriends());
  }
  nameInputChange = (event) => {
    this.setState({nameValue: event.target.value});
  }
  ageInputChange = (event) => {
    this.setState({ageValue: event.target.value});
  }
  emailInputChange = (event) => {
    this.setState({emailValue: event.target.value});
  }
  addFriend = (event) => {
    event.preventDefault();
    this.setState(state => {
      this.addFriendAPI(state.nameValue, parseInt(state.ageValue), state.emailValue);
      return {nameValue: '', ageValue: '', emailValue: ''}
    })
  }
  deleteFriend = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(this.updateFriends)
  }
  render () {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} deleteFriend={this.deleteFriend} />
        <FriendForm
          addFriend={this.addFriend}
          nameInput={this.nameInputChange}
          nameValue={this.state.nameValue}
          ageInput={this.ageInputChange}
          ageValue={this.state.ageValue}
          emailInput={this.emailInputChange}
          emailValue={this.state.emailValue}
        />
      </div>
    );
  }
}

export default App;
