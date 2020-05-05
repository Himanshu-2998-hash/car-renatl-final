import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Cars from './components/Cars';
import Login from './components/Login';
import details from './components/details';
import book from './components/book';
import hyundai from './components/hyundai';
import ecosport from './components/ecosport';
import dzire from './components/dzire';
import Home from './components/Home';
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
function App() {
    return (
    
    <div>
      <HashRouter basename="/car-renatl-final">
    <Navbar/>
    <Switch>
      <Route exact path="/" component ={Home}/>
      <Route exact path="/cars" component = {Cars} />
      <Route exact path='/login' component = {Login}/>
      <Route exact path="/details" component={details}/>
      <Route exact path="/bookings" component={book}/>
      <Route exact path="/hyundai_i20" component={hyundai}/>
      <Route exact path="/dzire" component={dzire}/>
      <Route exact path="/ecosport" component={ecosport}/>
    </Switch>
    </HashRouter>
  </div>

    );
    
  }

export default App;
