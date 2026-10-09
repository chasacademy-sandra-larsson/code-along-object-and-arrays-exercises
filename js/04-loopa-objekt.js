// 04. Loopa över ett objekt
// Ett objekt går inte att loopa med for...of direkt. Antingen for...in,
// eller så gör man om objektet till en array med Object.keys/values/entries.

const movie = {
  title: "Spirited Away",
  director: "Hayao Miyazaki",
  year: 2001,
  genre: "Animation",
};

const stock = {
  apples: 12,
  bananas: 0,
  pears: 5,
  oranges: 0,
};

// Uppgift 1: Skriv ut "nyckel: värde" för varje nyckel i movie med for...in.



// Uppgift 2: Försök loopa movie med for...of. Vilket fel får du?



// Uppgift 3: Skriv ut Object.keys(movie), Object.values(movie) och Object.entries(movie).
// Vad är det för datatyp du får tillbaka?



// Uppgift 4: Loopa Object.entries(movie) med for...of och skriv ut "nyckel: värde".



// Uppgift 5: Räkna ut hur många frukter som finns i lager totalt.



// Uppgift 6: Skapa en array med namnen på de frukter som är slut (0 st).



// Uppgift 7: Hur många nycklar har movie? Objekt har ingen .length.
