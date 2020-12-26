import React from "react";
import Select from "react-select";
import Cards from "./Cards";

const Loading = () => (
  <div className='spinner-container'>
    <div className='spinner-border' role='status'>
      <span className='sr-only'>Loading...</span>
    </div>
    <p>Loading quotes...</p>
  </div>
);

const Spinner = () => (
  <div className='spinner-container'>
    <p>No tenés favoritos aun</p>
  </div>
);

const Quotes = ({
  selectChange,
  inputChange,
  options,
  isLoading,
  filteredQuotes,
  location,
  addToFavs,
  removeFromFavs,
}) => (
  <div>
    <div className='filter-contaienr'>
      <Select
        autoFocus
        className='filter'
        onChange={selectChange}
        onInputChange={inputChange}
        placeholder={"filtrar por personaje"}
        options={options}
        onMenuClose={() => selectChange({ value: "" })}
      />
    </div>
    {location == "/favs" && filteredQuotes.length == 0 && <Spinner />}
    {!isLoading ? (
      <Cards
        addToFavs={addToFavs}
        removeFromFavs={removeFromFavs}
        filteredQuotes={filteredQuotes}
        location={location}
      />
    ) : (
      <Loading />
    )}
  </div>
);

export default Quotes;
