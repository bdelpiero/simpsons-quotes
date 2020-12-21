import React from "react";
import homer from "../../homer.png";

const Hero = ({ goToQuotes }) => (
  <section className='hero'>
    <div className='hero_img-container'>
      <img className='hero_img' src={homer} alt='homer' />
    </div>
    <div className='hero_button-container'>
      <h1>Tu dosis diaria de frases de los Simpsons...</h1>
      <button onClick={goToQuotes} className='hero_button'>
        BUSCAR
      </button>
    </div>
  </section>
);

export default Hero;
