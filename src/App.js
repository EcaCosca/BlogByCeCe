import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import NoteList from './components/NoteList'
import CreateUser from './components/CreateUser'
import CreateNote from './components/CreateNote'
import Hero from './components/Hero';



function App() {
  return (
    <Router>
      <Navigation />
      <Hero />
      <NoteList />
      <CreateUser />
      <CreateNote />

      <Route path="/" component={NoteList} />
      <Route path="/edit/:id" component={CreateNote} />
      <Route path="/create" component={CreateNote} />
      <Route path="/user" component={CreateUser} />

    </Router>
  );
}

export default App;
