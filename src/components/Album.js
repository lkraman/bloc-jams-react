import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
import './Album.css';


class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      hover: false,
      currentTime: 0,
      duration: album.songs[0].duration,
      currentVolume: 0.2
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

    componentDidMount() {
       this.eventListeners = {
         timeUpdate: e => {
           this.setState({ currentTime: this.audioElement.currentTime });
         },
         durationChange: e => {
           this.setState({ duration: this.audioElement.duration });
         },
         onVolumeChange: e => {
           this.setState({ currentVolume: this.audioElement.volume });
         }
       };
       this.audioElement.addEventListener('timeupdate', this.eventListeners.timeUpdate);
       this.audioElement.addEventListener('durationChange', this.eventListeners.durationChange);
       this.audioElement.addEventListener('onVolumeChange', this.eventListeners.onVolumeChange);
     }

     componentWillUnmount() {
     this.audioElement.src = null;
     this.audioElement.removeEventListener('timeUpdate', this.eventListeners.timeUpdate);
     this.audioElement.removeEventListener('durationChange', this.eventListeners.durationChange);
     this.audioElement.removeEventListener('onVolumeChange', this.eventListeners.onVolumeChange);
   }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
    }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

    handleMouseEnter(song) {
      this.setState({ hover: song });
    }

    handleMouseLeave(song) {
      this.setState({ hover: false });
    }

    handleIcon(song, index) {
      if (this.state.isPlaying === true && this.state.currentSong === song) {
        return <span className="icon ion-md-pause"></span>;
      } else if (this.state.hover === song) {
        return <span className="icon ion-md-play"></span>;
      } else return <span>{index + 1}</span>;
    };

    handlePrevClick() {
       const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
       const newIndex = Math.max(0, currentIndex - 1);
       const newSong = this.state.album.songs[newIndex];
       this.setSong(newSong);
       this.play();
    }

    handleNextClick() {
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const nextIndex = Math.min(4, currentIndex + 1);
      const nextSong = this.state.album.songs[nextIndex];
      this.setSong(nextSong);
      this.play();
    }

    handleTimeChange(e) {
     const newTime = this.audioElement.duration * e.target.value;
     this.audioElement.currentTime = newTime;
     this.setState({ currentTime: newTime });
   }

   handleVolumeChange(e) {
     const newVolume = e.target.value;
     this.audioElement.volume = newVolume;
     this.setState({ currentVolume: newVolume });
   }

   formatTime(totalSeconds) {
      if (isNaN(totalSeconds)) {
        return "-:--";
      } else {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds= totalSeconds % 60;
        const wholeSecond = Math.floor(seconds)
        return ( minutes + ":" + wholeSecond );
      }
    }

  render() {
    return (
      <section className="wrapper">
      <section className="container">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 id="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
          {this.state.album.songs.map((song, index) => (
            <tr
            className="song"
            key={index}
            onClick={() => this.handleSongClick(song)}
            onMouseEnter = {() => this.handleMouseEnter(song)}
            onMouseLeave = {() => this.handleMouseLeave(song)}
            >
            <td>{this.handleIcon(song, index)}</td>
            <td>{song.title}></td>
            <td>{this.formatTime(song.duration)}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <PlayerBar className="player-bar"
        isPlaying={this.state.isPlaying}
        currentSong={this.state.currentSong}
        currentTime={this.audioElement.currentTime}
        currentVolume={this.audioElement.currentVolume}
        duration={this.audioElement.duration}
        handleSongClick={() => this.handleSongClick(this.state.currentSong)}
        handlePrevClick={() => this.handlePrevClick()}
        handleNextClick={() => this.handleNextClick()}
        handleTimeChange={(e) => this.handleTimeChange(e)}
        handleVolumeChange={(e) => this.handleVolumeChange(e)}
        formatTime={(e) => this.formatTime(e)}
        />
     </section>
     </section>

   )
 }
}


export default Album;
