import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, browserHistory } from 'react-router'
import SearchPage from './components/SearchPage.js';
import Login from './components/Login.js';
import DetailInfo from './components/DetailInfo.js';

const LoginScreen = () => (
	<Login />
  );
const SearchPageScreen = () => (
	<SearchPage />
  );

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className="App">
          <Route path='/' component={LoginScreen} />
          < Route path='/searchscreen' component={SearchPageScreen}  />
        </div>
      </Router>
    );
  }
}

export default App;
