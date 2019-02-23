import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './scripts/Library.css';
import './Library.css'


>>>>>>> Stashed changes

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
=======
      <div className="grid-container">

>>>>>>> Stashed changes
=======
      <div className="grid-container">

>>>>>>> Stashed changes
        {
          this.state.albums.map( (album, index) =>

          <div className="songs">
            <Link to={`/album/${album.slug}`} key={index}>
            <div className="photo-grid clearfix">
            <ul className="clearfix">
            <li>
              <img src={album.albumCover} alt={album.title} />
              <div className="song-info">
              <h3 className="sing-info-header">Album:</h3>
              <div>{album.title}</div>
              <div>{album.artist}</div>
              <div>{album.songs.length} songs</div>
<<<<<<< Updated upstream
<<<<<<< HEAD
              </div>
            </Link>
            </div>

        )
      }

      </div>


=======
              </div>
            </Link>
=======
              </div>
            </Link>
>>>>>>> Stashed changes
            </div>

        )
      }

      </div>


>>>>>>> Stashed changes
    );
  }
}

export default Library;
