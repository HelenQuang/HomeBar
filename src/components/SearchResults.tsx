import React, { useState, useEffect } from "react";

import "../styles/searchResults.scss";
import LoadingSpinner from "./LoadingSpinner";
import DrinkInterface from "../models/DrinkInterface";

interface SearchResultsProps {
  keyword: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ keyword }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [results, setResults] = useState<DrinkInterface[]>([]);
  const [error, setError] = useState<string>("");

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`
      );

      if (!res.ok) {
        throw new Error(
          `This is an fetching error: The status is ${res.status}`
        );
      }

      const data = await res.json();
      setLoading(false);

      if (data.drinks !== null) {
        setResults(data.drinks);
      }
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const previewResults = results.map((drink) => {
    return (
      <li className="preview" key={drink.idDrink}>
        <figure className="preview__fig">
          <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        </figure>
        <div className="preview__data">
          <h4 className="preview__title">{drink.strDrink}</h4>
          <p className="preview__tags">{drink.strTags}</p>
        </div>
      </li>
    );
  });

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return (
    <div className="search-results">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ul className="results">{previewResults}</ul>
      )}
    </div>
  );
};

export default SearchResults;
