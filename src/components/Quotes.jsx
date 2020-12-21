import React, { useEffect, useState } from "react";
import Select from "react-select";
import images from "../images";

const Quotes = ({
  selectChange,
  inputChange,
  options,
  isLoading,
  filteredQuotes,
  selected,
}) => (
  <div>
    <div className='filter-contaienr'>
      <Select
        autoFocus
        className='filter'
        onChange={selectChange}
        onInputChange={inputChange}
        value={selected}
        placeholder={"filtrar por personaje"}
        options={options}
        onMenuClose={() =>
          selectChange({ value: "", label: "filtrar por personaje" })
        }
      />
    </div>
    {!isLoading ? (
      <div className='cards'>
        {filteredQuotes.map((quote, i) => (
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
            {/* <div>
              <button className='card_button'>Add to Favs</button>
            </div> */}
          </div>
        ))}
      </div>
    ) : (
      <div className='spinner-container'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
        <p>Loading quotes...</p>
      </div>
    )}
  </div>
);

export default Quotes;
