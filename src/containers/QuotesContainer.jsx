import React, { useEffect, useState } from "react";
import Quotes from "../components/Quotes";

const getFavs = () => {
  const favs = [];

  Object.keys(localStorage).forEach((key) => {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      if (!value.character) return;
      favs.push(value);
    } catch (e) {
      console.log("catched error while parsing");
    }
  });

  return favs;
};

const QuotesContainer = ({ location }) => {
  const [quotes, setQuotes] = useState([]);
  const [charactersFilter, setCharactersFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (location != "/quotes") return setQuotes(getFavs());

    setIsLoading(true);

    (async () => {
      const result = await fetch(
        "https://friends-quotes-api.herokuapp.com/quotes/15"
      );
      const data = await result.json();
      setQuotes(data);
      setIsLoading(false);
    })();
  }, [location]);

  const selectChange = ({ value }) => setCharactersFilter(value);
  const inputChange = (input) => setCharactersFilter(input);

  // functions that handle localStorage to get/remove favs
  const addToFavs = (fav) => {
    if (!localStorage.getItem(fav.quote))
      localStorage.setItem(fav.quote, JSON.stringify(fav));
  };

  const removeFromFavs = (fav) => {
    const newFavs = quotes.filter((item) => item.quote != fav.quote);
    localStorage.removeItem(fav.quote);
    setQuotes(newFavs);
  };

  // get array of characters and remove dupplicates
  const options =
    quotes.length > 0 &&
    [...new Set(quotes.map((quote) => quote.character))]
      .map((option) => {
        return { value: option, label: option };
      })
      .concat({ value: "", label: "All" });

  const filteredQuotes =
    quotes.length > 0
      ? quotes.filter((quote) =>
          quote.character.toLowerCase().match(charactersFilter.toLowerCase())
        )
      : [];

  return (
    <Quotes
      filteredQuotes={filteredQuotes}
      options={options}
      selectChange={selectChange}
      inputChange={inputChange}
      isLoading={isLoading}
      charactersFilter={charactersFilter}
      location={location}
      addToFavs={addToFavs}
      removeFromFavs={removeFromFavs}
    />
  );
};

export default QuotesContainer;
