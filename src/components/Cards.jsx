import React from "react";
import images from "../images";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

const Cards = ({ filteredQuotes, location, addToFavs, removeFromFavs }) => (
  <div className='cards'>
    {/* // <TransitionGroup className='cards'> */}
    {filteredQuotes.map((quote, i) => (
      // <CSSTransition key={i} timeout={500} className='card'>
      <div className='card' key={i}>
        <div className='card_img-container'>
          <img
            className='card_img'
            src={images[quote.character.toLowerCase()]}
            alt=''
          />
        </div>
        <p className='card_character'>
          <q className='card_quote'>{quote.quote}</q> - {quote.character}
        </p>
        <div>
          {location == "/quotes" ? (
            <button onClick={() => addToFavs(quote)} className='card_button'>
              Agregar a Favs
            </button>
          ) : (
            <button
              onClick={() => removeFromFavs(quote)}
              className='card_button'>
              Remove
            </button>
          )}
        </div>
      </div>
      // </CSSTransition>
    ))}
    {/* </TransitionGroup> */}
  </div>
);

export default Cards;
