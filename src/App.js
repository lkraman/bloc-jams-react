import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (

      <div className="App">

            <Link to='/'></Link>


            <Link to="/library"></Link>

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
