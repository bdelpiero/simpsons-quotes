import React, { useEffect, useState } from "react";

const dummyQuotes = [
  {
    quote:
      "“Los Santos fueron una bazofia, he visto bazofias en mi vida pero esta bazofia fue la más bazofia entre las bazofias…. ¡bueno, ya me voy porque me están oyendo los ñoños!”.",
    image:
      "https://i.pinimg.com/originals/90/c6/76/90c676a1cf11cbb16fbb1afa1da36776.jpg",
    character: "Homero",
  },
  {
    quote:
      "“Los Santos fueron una bazofia, he visto bazofias en mi vida pero esta bazofia fue la más bazofia entre las bazofias…. ¡bueno, ya me voy porque me están oyendo los ñoños!”.",
    image:
      "https://i.pinimg.com/originals/90/c6/76/90c676a1cf11cbb16fbb1afa1da36776.jpg",
    character: "Marge",
  },
  {
    quote:
      "“Los Santos fueron una bazofia, he visto bazofias en mi vida pero esta bazofia fue la más bazofia entre las bazofias…. ¡bueno, ya me voy porque me están oyendo los ñoños!”.",
    image:
      "https://i.pinimg.com/originals/90/c6/76/90c676a1cf11cbb16fbb1afa1da36776.jpg",
    character: "Marge",
  },
  {
    quote:
      "“Los Santos fueron una bazofia, he visto bazofias en mi vida pero esta bazofia fue la más bazofia entre las bazofias…. ¡bueno, ya me voy porque me están oyendo los ñoños!”.",
    image:
      "https://i.pinimg.com/originals/90/c6/76/90c676a1cf11cbb16fbb1afa1da36776.jpg",
    character: "Bart",
  },
  {
    quote:
      "“Los Santos fueron una bazofia, he visto bazofias en mi vida pero esta bazofia fue la más bazofia entre las bazofias…. ¡bueno, ya me voy porque me están oyendo los ñoños!”.",
    image:
      "https://i.pinimg.com/originals/90/c6/76/90c676a1cf11cbb16fbb1afa1da36776.jpg",
    character: "Homero",
  },
  {
    quote:
      "“Los Santos fueron una bazofia, he visto bazofias en mi vida pero esta bazofia fue la más bazofia entre las bazofias…. ¡bueno, ya me voy porque me están oyendo los ñoños!”.",
    image:
      "https://i.pinimg.com/originals/90/c6/76/90c676a1cf11cbb16fbb1afa1da36776.jpg",
    character: "Homero",
  },
];

const QuotesContainer = () => {
  const [charactersFilter, setCharactersFilter] = useState("");

  const onChange = (e) => setCharactersFilter(e.target.value);

  const filteredQuotes = dummyQuotes.filter((quote) =>
    quote.character.toLowerCase().match(charactersFilter.toLowerCase())
  );

  return (
    <div>
      <div className='filter-contaienr'>
        <input
          className='filter'
          value={charactersFilter}
          placeholder='filtrar por personaje'
          type='text'
          onChange={onChange}
        />
      </div>
      <div className='cards'>
        {filteredQuotes.map((quote, i) => (
          <div className='card' key={i}>
            <img src={quote.image} alt='' />
            <p className='card_character'>
              <q className='card_quote'>{quote.quote}</q> - {quote.character}
            </p>
            <div>
              <button className='card_button'>Add to Favs</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotesContainer;
