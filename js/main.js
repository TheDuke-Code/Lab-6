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

//Hämtar recept elementet så det visas
const recipeEl = document.getElementById("recipe");
console.log(recipeEl);

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
    const response = await fetch("https://dummyjson.com/recipes/search?q=" + searchPhrase);
    const data = await response.json();
    console.log(data.recipes[0].name);
}

// Lyssnar efter när formuläret ska skickas
searchFormEl.addEventListener("submit", handleSearch);