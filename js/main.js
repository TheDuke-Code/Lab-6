"use strict";
/*
 * Laboration 6 - Receptsökaren
 * Namn: André Sohlberg
 */
// Hämtar sökformuläret från html
const searchFormEl = document.getElementById("searchform");
console.log(searchFormEl);

// Hämtar sökfältet från html
const searchEl = document.getElementById("search");
console.log(searchEl);

// Körs när formuläret skickas
function handleSearch(event) {
    event.preventDefault();
    // Läser sökfrasen och tar bort mellanslag
    const searchPhrase = searchEl.value.trim();
    console.log(searchPhrase);
}

// Lyssnar efter när formuläret ska skickas
searchFormEl.addEventListener("submit", handleSearch);