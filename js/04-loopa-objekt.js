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
  kiwi: 0
};

// Uppgift 1: Skriv ut "nyckel: värde" för varje nyckel i movie med for...in.
for(const key in movie) {
  console.log(`${key}: ${movie[key]}`);
}


// Uppgift 2: Försök loopa movie med for...of. Vilket fel får du?
// for(const key of movie) {
//   console.log(`${key}: ${movie[key]}`);
// }

// TypeError: movie is not iterable

// Uppgift 3: Skriv ut Object.keys(movie), Object.values(movie) och Object.entries(movie).
// Vad är det för datatyp du får tillbaka?
console.log(Object.keys(movie));
console.log(Object.values(movie));
console.log(Object.entries(movie));


// Uppgift 4: Loopa Object.entries(movie) med for...of och skriv ut "nyckel: värde".
for(const entry of Object.entries(movie)) {
  console.log(`${entry[0]}: ${entry[1]}`)
}


// Uppgift 5: Räkna ut hur många frukter som finns i lager totalt.
let totalFruit = 0;
for(const amount of Object.values(stock)) {
  totalFruit += amount;
} 
console.log("Total antal frukter", totalFruit);


// Uppgift 6: Skapa en array med namnen på de frukter som är slut (0 st).
const soldOut = [];
for (const [fruit, amount] of Object.entries(stock)) {
     if(amount === 0) {
      soldOut.push(fruit);
     }
}
console.log("De frukter som är slut är", soldOut);


// Uppgift 7: Hur många nycklar har movie? Objekt har ingen .length.
console.log(Object.keys(movie.length));