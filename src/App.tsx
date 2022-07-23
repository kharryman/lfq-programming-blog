import React from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user: any) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Keith',
  lastName: 'Harryman'
};

const userGreeting = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Learn Facts Quick Programming Blog!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
