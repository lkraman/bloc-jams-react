import React from 'react'
<<<<<<< Updated upstream
<<<<<<< HEAD
import './Landing.css';

import concert_image from './concert_image.jpg';



const Landing = () => (
  <section className="landing-container">
    <div className="hero">
      <img className="hero-image" src={concert_image} alt="woman at concert"></img>
      <img className="hero-overlay" alt=""></img>

  <h1 className="hero-title">Bloc Jams | Turn the music up!</h1>

=======
import './scripts/Landing.css';
import concert_image from './images/concert_image.jpg';


const Landing = () => (
<section>
    <div className="landing-container" id="overlay">
      <img className="container-image" src={concert_image} alt="woman at concert"></img>
    </div>
>>>>>>> checkpoint-bloc-jams-react-styling
=======
import './Landing.css';

import concert_image from './concert_image.jpg';
import bloc_jams_logo from './bloc_jams_logo.png';


const Landing = () => (
  <section className="container">
    <div className="hero">
      <div src={concert_image} alt="concert image"></div>
      <div className="hero-overlay"></div>

  <h1 className="hero-title">Bloc Jams | Turn the music up!</h1>
  <div className="landing-page-logo" src={bloc_jams_logo} alt="bloc jams logo"></div>
>>>>>>> Stashed changes

  <section className="selling-points">
    <h1 className="hero-title">Bloc Jams | Turn the music up!</h1>
    <div className="point">
      <h2 className="point-title">Choose your music</h2>
      <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
    </div>

    <div className="point">
      <h2 className="point-title">Unlimited, streaming, ad-free</h2>
      <p className="point-description">No arbitrary limits. No distractions.</p>
    </div>

    <div className="point">
      <h2 className="point-title">Mobile enabled</h2>
      <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
    </div>
    </section>
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
    </div>
    </section>


<<<<<<< Updated upstream
=======
  </section>
>>>>>>> checkpoint-bloc-jams-react-styling
=======
>>>>>>> Stashed changes

);

export default Landing;
