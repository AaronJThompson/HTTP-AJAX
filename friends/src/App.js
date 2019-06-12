import React from 'react';
import axios from 'axios';
import FriendList from './components/FriendList';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      friends: []
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

  render () {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
