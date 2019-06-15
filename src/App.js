import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Error from './components/Error';

class App extends Component {

  constructor() {
    super();
    this.state = {
      showNote: false,
      notes: [],
      note: {},
      newTag: false,
      error: ''
    };
  }

  render() {
    const { showNote, loginButton } = this.state;
  return (
    <div className="App">
       <Navbar toggleNote={this.toggleNote} loginUser={this.loginUser} showNote={showNote} loginButton={loginButton} />
        <br />
    </div>
  );
}
}

export default App;
