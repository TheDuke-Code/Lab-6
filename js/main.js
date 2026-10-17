"use strict";
/*
 * Laboration 6 - Receptsökaren
 * Namn: André Sohlberg
 */
// Hämtar sökformuläret från html
const searchFormEl = document.getElementById("searchform");

// Hämtar sökfältet från html
const searchEl = document.getElementById("search");

// Hämtar elementet för felmeddelanden
const errorEl = document.getElementById("error");

// Hämtar recept elementet så det visas
const recipeEl = document.getElementById("recipe");

// Körs när formuläret skickas
function handleSearch(event) {
  event.preventDefault();
  // Läser sökfrasen och tar bort mellanslag
  const searchPhrase = searchEl.value.trim();
  console.log(searchPhrase);

  // Kontrollerar så inte sökfältet är tomt
  if (searchPhrase === "") {
    errorEl.textContent = "Du måste ange en sökfras.";
  } else {
    errorEl.textContent = "";
    fetchRecipes(searchPhrase);
  }
}

// Hämta recept via API baserat på sökfrasen
async function fetchRecipes(searchPhrase) {
  const response = await fetch(
    "https://dummyjson.com/recipes/search?q=" + searchPhrase,
  );
  const data = await response.json();
  console.log(data.recipes[0].name);
  displayRecipe(data.recipes[0]);
}

//Skapar och visar ett recept på sidan
function displayRecipe(recipe) {

    // skapar ett article element för att binda ihop receptet
    const articleEl = document.createElement("article");

  // Skapar en rubrik med receptets namn
  const titleEl = document.createElement("h3");
  titleEl.textContent = recipe.name;
  articleEl.appendChild(titleEl);

  //Hämtar en bild på det receptet man sökt efter
  const imageEl = document.createElement("img");
  imageEl.src = recipe.image;
  imageEl.alt = recipe.name;
  articleEl.appendChild(imageEl);

  // Skapar en div för receptets info
  const infoEl = document.createElement("div");
  infoEl.className = "recipe-info";
  articleEl.appendChild(infoEl);

  // Skriver ut antalet portioner i receptet
  const servingsEl = document.createElement("p");
  servingsEl.textContent = "Servings: " + recipe.servings;
  infoEl.appendChild(servingsEl);

  // Skriver ut prep tiden för receptet
  const preptimeEl = document.createElement("p");
  preptimeEl.textContent = "Prep time: " + recipe.prepTimeMinutes + " minutes";
  infoEl.appendChild(preptimeEl);

  // Skriver ut tillagningstiden för receptet
  const cookingtimeEl = document.createElement("p");
  cookingtimeEl.textContent = "Cooking time: " + recipe.cookTimeMinutes + " minutes";
  infoEl.appendChild(cookingtimeEl);

// Hämtar in receptet på sidan
  recipeEl.appendChild(articleEl);
}

// Lyssnar efter när formuläret ska skickas
searchFormEl.addEventListener("submit", handleSearch);
