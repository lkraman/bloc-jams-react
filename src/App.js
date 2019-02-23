import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
<<<<<<< HEAD
import bloc_jams_logo from './components/bloc_jams_logo.png';
=======
import bloc_jams_logo from './components/images/bloc_jams_logo.png';
>>>>>>> checkpoint-bloc-jams-react-styling



class App extends Component {
  render() {
    return (

      <div className="App">
<<<<<<< Updated upstream
          <nav className="nav-bar">
          <img className="nav-bar-logo" src={bloc_jams_logo} alt="bloc jams logo"></img>
            <Link className="nav-bar-link" id="link1" to='/'>Landing</Link>
            <Link className="nav-bar-link" id="link1" to='/library'>Library</Link>
          </nav>
=======

            <Link to='/'></Link>


            <Link to="/library"></Link>

>>>>>>> Stashed changes
        <main>
        <button className="nav-button" id="library-button">
          <Link to="/library">Library</Link>
        </button>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}


export default App;
