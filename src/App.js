import React, { Component } from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import MyAccount from './components/MyAccount'
import MainForm from './components/MainForm'

//import data from './mock'


class App extends Component {

  render() {



      return (
    <BrowserRouter>
      <div className='h-100 d-block'>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/search' component={MainForm}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/myaccount' component={MyAccount}/>

            </Switch>
            <Footer/>
      </div>      
    </BrowserRouter>
    );
  }
}

export default App;
