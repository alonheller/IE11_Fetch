import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {res: ''};

  onFetch = () => {
    console.log('FETCH DATA');

    this.setState({res: 'Fetching Data ...'})

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.setState({res: json[0].title})
      })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <button onClick={this.onFetch}> Fetch </button>
      <div> Result: {this.state.res}</div>
      </div>
    );
  }
}

export default App;
