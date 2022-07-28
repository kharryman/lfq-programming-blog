import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Blog from './components/Blog';

function formatName(user: any) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Keith',
  lastName: 'Harryman'
};

function UserGreeting() {
  return (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <NavBar />
      <div className="welcomeMessage">
        Welcome to the Learn Facts Quick Programming Blog!
      </div>
      <Blog />
      <Footer />
    </div>
  );
}
export default App;
