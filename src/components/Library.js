import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
<<<<<<< HEAD
import './scripts/Library.css'


=======
import './scripts/Library.css';
>>>>>>> checkpoint-bloc-jams-react-styling

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="grid-container">

=======
      <section className='library'>
      <div className="library-wrapper" id="library-wrapper">
      <div className="library-container" id="library-container">
>>>>>>> checkpoint-bloc-jams-react-styling
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
<<<<<<< HEAD
              </div>
            </Link>
            </div>

        )
      }

      </div>


=======
              </li>
              </ul>
               </div>
            </Link>
          )
        }
      </div>
      </div>
      </section>
>>>>>>> checkpoint-bloc-jams-react-styling
    );
  }
}

export default Library;
