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
    
    let styleFooter = {
      position: 'fixed',
      bottom: 0,
      right: 0,
      left:0,
    }

  


      return (
    <BrowserRouter>
      <div className='row'>
      
        <div className='col-12'>
        <Navbar/>
        </div>
        <div className='col-12'>
        <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/search' component={MainForm}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/myaccount' component={MyAccount}/>

        </Switch>
        
        </div>   

        <div className='row'>
        <Footer/> 
        </div>  
             
      </div>      
    </BrowserRouter>
    );
  }
}

export default App;
