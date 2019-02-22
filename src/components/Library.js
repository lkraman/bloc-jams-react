import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './scripts/Library.css'



class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <div className="grid-container">

        {
          this.state.albums.map( (album, index) =>

          <div className="songs">
            <Link to={`/album/${album.slug}`} key={index}>
              <img src={album.albumCover} alt={album.title} />
              <div className="song-info">
              <h3 className="sing-info-header">Album:</h3>
              <div>{album.title}</div>
              <div>{album.artist}</div>
              <div>{album.songs.length} songs</div>
              </div>
            </Link>
            </div>

        )
      }

      </div>


    );
  }
}

export default Library;
