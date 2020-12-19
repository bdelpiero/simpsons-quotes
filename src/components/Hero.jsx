import React from "react";
import homer from "../../homer.png";

const Hero = () => (
  <section className='hero'>
    <div className='hero_img-container'>
      <img className='hero_img' src={homer} alt='homer' />
    </div>
    <div className='hero_button-container'>
      <button className='hero_button'>Quotes of the day</button>
    </div>
  </section>
);

export default Hero;
