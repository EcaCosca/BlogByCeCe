import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import NoteList from './components/NoteList'
import CreateUser from './components/CreateUser'
import CreateNote from './components/CreateNote'
import Home from './pages';
import Footer from './components/Footer';
import About from './pages/about';
import blog from './pages/blog';
import { Content } from './components/Content';
import Dropdown from './components/Dropdown';
import contact from './pages/contact';



function App() {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect (() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    };
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navigation toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={blog} />
        <Route path="/content" component={Content} />
        <Route path="/contact" component={contact} />
        {/* <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/user" component={CreateUser} /> */}

      </Switch>
      <Footer />

    </>
  );
}

export default App;
