import React, { Component } from 'react';
import './scripts/PlayerBar.css';
import bloc_jams_logo from './images/bloc_jams_logo.png'
import play from './images/play.png'
import pause from './images/pause.png'
import next from './images/next.png'
import previous from './images/previous.png'
import volume_high from './images/volume_high.png'
import volume_low from './images/volume_low.png'



class PlayerBar extends Component {
  render() {
    return(

    <section className="player-bar-container">
      <img className="bloc-logo" src={bloc_jams_logo} alt="Bloc Jams Logo" />
        <section className="player-bar-control-box">

        <section className="main-buttons">
         <button className="previous" onClick={this.props.handlePrevClick}>
           <img id="previous" src={previous} alt="previous button"/>
         </button>

         <button className="play-pause" onClick={this.props.handleSongClick} >
            {this.props.isPlaying ? <img className="play" src={play} alt="play-button"/> : <img className="pause" src={pause} alt="pause-button"/>}
         </button>

         <button className="next" onClick={this.props.handleNextClick}>
           <img id="next" src={next} alt="next-button"/>
         </button>
       </section>

       <section className="time-control">
       <div className="current-time">{this.props.currentTime}</div>
         <input
           type="range"
           className="seek-bar"
           value={(this.props.currentTime / this.props.duration) || 0}
           max="1"
           min="0"
           step="0.01"
           onChange={this.props.handleTimeChange}
         />
         <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
        </section>

        <section className="volume-control">
             <img className="volume_low" src={volume_low} alt="volume low button"{...this.props.currentVolume}/>
             <input
             type="range"
             className="seek-bar"
             value={this.props.currentVolume}
             max="1"
             min="0"
             step="0.01"
             onChange={this.props.handleVolumeChange}
             />
             <img className="volume_high" src={volume_high} alt="volume high button"/>
           </section>

        </section>
      </section>

    );
  }
}

export default PlayerBar
