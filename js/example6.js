// 6. Skapa ett objekt "movie" med egenskaperna title, director, year och genre.
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi"
  };
  
  // Uppgift 1: Använd Object.keys() för att skriva ut alla egenskapsnamn (nycklar).
  // Uppgift 2: Använd Object.values() för att skriva ut alla egenskapsvärden.
  // Uppgift 3: Använd Object.entries() för att skriva ut både nycklar och värden som en array av arrays.

   console.log(Object.keys(movie));
   console.log(Object.values(movie));
   console.log(Object.entries(movie));