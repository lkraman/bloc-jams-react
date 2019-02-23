import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './scripts/Library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className='library'>
      <div className="library-wrapper" id="library-wrapper">
      <div className="library-container" id="library-container">
        {
          this.state.albums.map( (album, index) =>
            <Link to={`/album/${album.slug}`} key={index}>
            <div className="photo-grid clearfix">
            <ul className="clearfix">
            <li>
              <img src={album.albumCover} alt={album.title} />
              <div>{album.title}</div>
              <div>{album.artist}</div>
              <div>{album.songs.length} songs</div>
              </li>
              </ul>
               </div>
            </Link>
          )
        }
      </div>
      </div>
      </section>
    );
  }
}

export default Library;
