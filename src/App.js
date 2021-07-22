import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import NoteList from './components/NoteList'
import CreateUser from './components/CreateUser'
import CreateNote from './components/CreateNote'
import Home from './pages';
import Footer from './components/Footer';
import About from './pages/about';
import menu from './pages/menu';
import { Content } from './components/Content';



function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={menu} />
        <Route path="/content" component={Content} />
        {/* <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/user" component={CreateUser} /> */}

      </Switch>
      <Footer />

    </>
  );
}

export default App;
