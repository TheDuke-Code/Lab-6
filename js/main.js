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

// Körs när formuläret skickas
function handleSearch(event) {
    event.preventDefault();
    // Läser sökfrasen och tar bort mellanslag
    const searchPhrase = searchEl.value.trim();
    console.log(searchPhrase);
}

// Lyssnar efter när formuläret ska skickas
searchFormEl.addEventListener("submit", handleSearch);