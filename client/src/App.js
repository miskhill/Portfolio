import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Tech from './components/Tech'
import Main from './components/Main';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path = "/portfolio/">
    <Main />
    </Route>
    <Route exact path = "/portfolio/Tech">
    <Tech />
    </Route>
    <Route exact path = "/portfolio/Project">
      <Project />
    </Route>
    </Switch>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App;
