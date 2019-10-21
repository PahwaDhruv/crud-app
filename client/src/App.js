import React, { Component } from 'react';
import Header from './components/header/Header';
import UserList from './components/userList/UserList';
import AddUser from './components/addUser/AddUser';
import EditUser from './components/editUser/EditUser';
import {Route, Switch} from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={UserList}></Route>
          <Route path="/add" component={AddUser}></Route>
          <Route path="/edit/:id" component={ EditUser } ></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route render={() => <h1 className="text-center">Error 404 - Page Not Found</h1>}></Route>
        </Switch>
         {/* <Home></Home> */}
      </div>
      
    );
  }
}

export default App;
