// import  icons from './img/icons'; // Parcel 1
import icons from "url:./img/icons.svg"; // Parcel 2
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// DOM
const sellerContainer = document.querySelector(".seller");

// Render Spinner
const renderSpinner = (parentEl) => {
  const markup = `
    <svg class='seller__icon'>
        <use href='${icons}#icon-loader'></use>
    </svg>
    `;
  parentEl.innerHTML = "";
  parentEl.insertAdjacentHTML("afterbegin", markup);
};

// API CALL
const showRecipes = async () => {
  try {
    //   Loading Recipe
    renderSpinner(sellerContainer);
    const res = await fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    console.log(res, data);

    // let recipe = data.data.recipe;
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      cookingTime: recipe.cooking_time,
      serving: recipe.serving,
      ingredients: recipe.ingredients,
    };

    console.log(recipe);

    // Rendering Recipe
    const markup = `
        <section class="seller">
            <p class='seller__para card__heading'>
                ${recipe.title}
            </p>
            <div class="cards cards__gap0">
                <div class="card card__border0">
                    <img class='card__img' style='width: 100px' src='${recipe.image}'>
                    <p class="card__heading">${recipe.title}</p>
                    <p class="card__color">${recipe.serving}</p>
                    <span class="card__price card__price--1">
                        <s>
                        $ ${recipe.cookingTime}
                        </s>
                    </span>
                    <span class="card__price card__price--2">
                    <svg class='seller__icon'>
                        <use href='${icons}#icon-clock'></use>
                    </svg> 
                    ${recipe.ingredients[2].quantity}
                    </span>
                </div>
            </div>
        </div>
    `;
    sellerContainer.innerHTML = "";
    sellerContainer.insertAdjacentHTML("afterbegin", markup);
  } catch (err) {
    alert(err);
  }
};

// function Call
showRecipes();
