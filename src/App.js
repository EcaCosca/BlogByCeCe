import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/Navigation'
import NoteList from './components/NoteList'
import CreateUser from './components/CreateUser'
import CreateNote from './components/CreateNote'



function App() {
  return (
    <Router>
      <Navigation />
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
