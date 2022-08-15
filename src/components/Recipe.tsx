import React from "react";

import "../styles/recipe.scss";
import DrinkInterface from "../models/DrinkInterface";

import Bookmark from "../img/Icon-Bookmark.svg";
import Glass from "../img/Icon-Glass.png";
import Shaker from "../img/Icon-Shaker.png";
import Tick from "../img/Icon-tick.svg";

interface RecipeProps {
  drink: DrinkInterface;
}

const Recipe: React.FC<RecipeProps> = ({ drink }) => {
  return (
    <div className="recipe">
      <figure className="recipe__fig">
        <img
          className="recipe__img"
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
        />
        <h2 className="recipe__title">
          <span>{drink.strDrink}</span>
        </h2>
      </figure>

      <div className="recipe__details">
        <div className="recipe__info">
          <img className="recipe__info-icon" src={Glass} alt="glass" />
          <span className="recipe__info-text">{drink.strGlass}</span>
        </div>

        <div className="recipe__info">
          <img className="recipe__info-icon" src={Shaker} alt="shaker" />
          <span className="recipe__info-data">1</span>
          <span className="recipe__info-text">serving</span>
        </div>

        <button className="btn--round btn--bookmark">
          <img src={Bookmark} alt="bookmark" />
        </button>
      </div>

      <div className="recipe__ingredients">
        <h2 className="heading--2">Recipe Ingredients</h2>
        <ul className="recipe__ingredient-list">
          <li className="recipe__ingredient">
            <img className="recipe__icon" src={Tick} alt="tick" />
            <div className="recipe__quantity"></div>
            <div className="recipe__description">
              <span className="recipe__unit"></span>
            </div>
          </li>
          <li className="recipe__ingredient">
            <img className="recipe__icon" src={Tick} alt="tick" />
            <div className="recipe__quantity"></div>
            <div className="recipe__description">
              <span className="recipe__unit"></span>
            </div>
          </li>
          <li className="recipe__ingredient">
            <img className="recipe__icon" src={Tick} alt="tick" />
            <div className="recipe__quantity"></div>
            <div className="recipe__description">
              <span className="recipe__unit"></span>
            </div>
          </li>
        </ul>
      </div>

      <div className="recipe__instruction">
        <h2 className="heading--2">How to make it</h2>
        <p className="recipe__instruction-text">{drink.strInstructions}</p>
      </div>
    </div>
  );
};

export default Recipe;
