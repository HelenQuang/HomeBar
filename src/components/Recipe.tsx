import React from "react";

import "../styles/recipe.scss";
import DrinkInterface from "../models/DrinkInterface";

import Glass from "../img/Icon-Glass.png";
import Shaker from "../img/Icon-Shaker.png";
import Tick from "../img/Icon-tick.svg";

interface RecipeProps {
  drink: DrinkInterface;
}

const Recipe: React.FC<RecipeProps> = ({ drink }) => {
  const IngedientsArr = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
    drink.strIngredient10,
    drink.strIngredient11,
    drink.strIngredient12,
    drink.strIngredient13,
    drink.strIngredient14,
    drink.strIngredient15,
  ].filter((n) => n);

  const MeasureArr = [
    drink.strMeasure1,
    drink.strMeasure2,
    drink.strMeasure3,
    drink.strMeasure4,
    drink.strMeasure5,
    drink.strMeasure6,
    drink.strMeasure7,
    drink.strMeasure8,
    drink.strMeasure9,
    drink.strMeasure10,
    drink.strMeasure11,
    drink.strMeasure12,
    drink.strMeasure13,
    drink.strMeasure14,
    drink.strMeasure15,
  ].filter((n) => n);

  const IngredientsList = IngedientsArr.map((item, index) => {
    return { name: item, amount: MeasureArr[index] };
  });

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
      </div>

      <div className="recipe__ingredients">
        <h2 className="heading--2">Recipe Ingredients</h2>
        <ul className="recipe__ingredient-list">
          {IngredientsList.map((ing) => {
            return (
              <li key={ing.name} className="recipe__ingredient">
                <img className="recipe__icon" src={Tick} alt="tick" />
                <div className="recipe__quantity">{ing.amount}</div>
                <div className="recipe__description">
                  <span className="recipe__unit">{ing.name}</span>
                </div>
              </li>
            );
          })}
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
