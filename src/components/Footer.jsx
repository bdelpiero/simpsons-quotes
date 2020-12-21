import React from "react";
import logo from "../../logoSimpsons.png";

const Footer = ({ location }) => {
  // adds a class for positioning
  const fotterClasses = location == "/" ? "footer footer-hero" : "footer";

  return (
    <footer className={fotterClasses}>
      <div className='footer_left'></div>
      <div className='footer_right'>
        <img className='footer_logo' src={logo} alt='Simpsons' />
        <p className='footer_copyright'>© 2020 Bruno Del Piero</p>
      </div>
    </footer>
  );
};

export default Footer;
