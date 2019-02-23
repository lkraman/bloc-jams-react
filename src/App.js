import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import bloc_jams_logo from './components/images/bloc_jams_logo.png';





class App extends Component {
  render() {
    return (

      <div className="App">

          <nav className="nav-bar">
          <img className="nav-bar-logo" src={bloc_jams_logo} alt="bloc jams logo"></img>
            <Link className="nav-bar-link" id="link1" to='/'>Landing</Link>
            <Link className="nav-bar-link" id="link2" to='/library'>Library</Link>
          </nav>

        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}


export default App;
