import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/ProtectedRoute'


function App() {
  return (
    <Router>
      <div className="App">
        <div className='navbar'>
          <Link to='/login'>Login</Link>
          <Link to="/protected">Friends List</Link>
        </div>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
