import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/header'
import Home from './components/home'
import Guild from './components/guild'
import About from './components/about'
import Contact from './components/contact'
import Admin from './components/admin'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Home}/>
        <Route path='/members' component={Guild}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/admin' component={Admin}/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App
