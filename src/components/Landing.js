import React from 'react'
import './scripts/Landing.css';
import concert_image from './images/concert_image.jpg';


const Landing = () => (
<section>
    <div className="landing-container" id="overlay">
      <img className="container-image" src={concert_image} alt="woman at concert"></img>
    </div>

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
  </section>

);

export default Landing;
