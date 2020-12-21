import React, { useEffect, useState } from "react";
import Quotes from "../components/Quotes";

// const dummyQuotes = [
//   {
//     quote:
//       "“Los Santos fueron una bazofia, he visto bazofias en mi vida pero esta bazofia fue la más bazofia entre las bazofias…. ¡bueno, ya me voy porque me están oyendo los ñoños!”.",
//     image:
//       "https://i.pinimg.com/originals/90/c6/76/90c676a1cf11cbb16fbb1afa1da36776.jpg",
//     character: "Homero",
//   },
//   {
//     quote:
//       "“Los Santos fueron una bazofia, he visto bazofias en mi vida pero esta bazofia fue la más bazofia entre las bazofias…. ¡bueno, ya me voy porque me están oyendo los ñoños!”.",
//     image:
//       "https://i.pinimg.com/originals/90/c6/76/90c676a1cf11cbb16fbb1afa1da36776.jpg",
//     character: "Marge",
//   },
//   {
//     quote:
//       "“Los Santos fueron una bazofia, he visto bazofias en mi vida pero esta bazofia fue la más bazofia entre las bazofias…. ¡bueno, ya me voy porque me están oyendo los ñoños!”.",
//     image:
//       "https://i.pinimg.com/originals/90/c6/76/90c676a1cf11cbb16fbb1afa1da36776.jpg",
//     character: "Marge",
//   },
//   {
//     quote:
//       "“Los Santos fueron una bazofia, he visto bazofias en mi vida pero esta bazofia fue la más bazofia entre las bazofias…. ¡bueno, ya me voy porque me están oyendo los ñoños!”.",
//     image:
//       "https://i.pinimg.com/originals/90/c6/76/90c676a1cf11cbb16fbb1afa1da36776.jpg",
//     character: "Bart",
//   },
//   {
//     quote:
//       "“Los Santos fueron una bazofia, he visto bazofias en mi vida pero esta bazofia fue la más bazofia entre las bazofias…. ¡bueno, ya me voy porque me están oyendo los ñoños!”.",
//     image:
//       "https://i.pinimg.com/originals/90/c6/76/90c676a1cf11cbb16fbb1afa1da36776.jpg",
//     character: "Homero",
//   },
//   {
//     quote:
//       "“Los Santos fueron una bazofia, he visto bazofias en mi vida pero esta bazofia fue la más bazofia entre las bazofias…. ¡bueno, ya me voy porque me están oyendo los ñoños!”.",
//     image:
//       "https://i.pinimg.com/originals/90/c6/76/90c676a1cf11cbb16fbb1afa1da36776.jpg",
//     character: "Homero",
//   },
// ];

const QuotesContainer = () => {
  const [quotes, setQuotes] = useState([]);
  const [charactersFilter, setCharactersFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState({
    value: "",
    label: "",
  });

  useEffect(() => {
    // console.log(location);
    // if (location != "/quotes") return;
    setIsLoading(true);
    (async () => {
      const result = await fetch(
        "https://friends-quotes-api.herokuapp.com/quotes/15"
      );
      const data = await result.json();
      setQuotes(data);
      setIsLoading(false);
    })();
  }, []);

  const selectChange = ({ value, label }) => {
    setSelected({ value, label });
    setCharactersFilter(value);
  };
  const inputChange = (input) => setCharactersFilter(input);

  //get array of characters and remove dupplicates
  const options = [...new Set(quotes.map((quote) => quote.character))].map(
    (option) => {
      return { value: option, label: option };
    }
  );
  // const addToFavs = (quote) => localStorage.setItem("")

  const filteredQuotes = quotes.filter((quote) =>
    quote.character.toLowerCase().match(charactersFilter.toLowerCase())
  );

  console.log(charactersFilter, "charactersFilter");

  return (
    <Quotes
      filteredQuotes={filteredQuotes}
      options={options}
      selectChange={selectChange}
      inputChange={inputChange}
      isLoading={isLoading}
      charactersFilter={charactersFilter}
      selected={selected}
    />
  );
};

export default QuotesContainer;
