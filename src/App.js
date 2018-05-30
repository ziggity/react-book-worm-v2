import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import LoginForm from './components/forms/LoginForm';
class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Route path='/' exact component={HomePage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/loginform' exact component={LoginForm} />
      </div>
    );
  }
}

export default App;
