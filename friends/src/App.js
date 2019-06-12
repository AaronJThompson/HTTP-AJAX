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

  componentDidMount() {
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
    console.log('Tried to add friend');
  }

  render () {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} />
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
