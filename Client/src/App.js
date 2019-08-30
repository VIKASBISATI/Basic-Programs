import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/login'
import Register from './pages/register'
import ForgotPassword from './pages/forgotPassword'
import ResetPassword from './pages/resetPassword'
import DashBoard from './components/dashboard'
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/forgotPassword" component={ForgotPassword}></Route>
          <Route path="/resetPassword" component={ResetPassword}></Route>
          <Route path="/dashboard" component={DashBoard}></Route>
          <Route path="/" exact component={Login}></Route>
        </Router>
      </div>
    );
  }
}
export default App;