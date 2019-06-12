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
      updating: false,
      currentFriend: 0,
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
  updateFriendAPI = (name, age, email) => {
    axios
      .put(`http://localhost:5000/friends/${this.state.currentFriend}`, {name:name, age:age, email:email})
      .then(this.updateFriends());
  }
  updateFriend = (event) => {
    event.preventDefault();
    this.setState(state => {
      this.updateFriendAPI(state.nameValue, parseInt(state.ageValue), state.emailValue);
      return {nameValue: '', ageValue: '', emailValue: '', updating:false}
    })
  }
  selectFriend = (id) => {
    this.setState(state => {
      let friend = state.friends.find((f) => f.id === id)
      return {
        currentFriend:id,
        updating:true,
        nameValue: friend.name,
        ageValue: friend.age,
        emailValue: friend.email}
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
        <FriendList friends={this.state.friends} deleteFriend={this.deleteFriend} selectFriend={this.selectFriend} />
        <FriendForm
          addFriend={this.state.updating ? this.updateFriend : this.addFriend}
          nameInput={this.nameInputChange}
          nameValue={this.state.nameValue}
          ageInput={this.ageInputChange}
          ageValue={this.state.ageValue}
          emailInput={this.emailInputChange}
          emailValue={this.state.emailValue}
          updating={this.state.updating}
        />
      </div>
    );
  }
}

export default App;
