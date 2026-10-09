// 1. 
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  };

  
 
// Uppgift 1: Skriv ut bokens titel och författare i konsolen.
console.log(book.author);
console.log(book.title);
// Uppgift 2: Ändra bokens år till 2024 och skriv ut det modifierade objektet.
book.year = 2024;
console.log(book.year);
// Uppgift 3: Lägg till en ny egenskap som heter "publisher" med ett valfritt värde, och skriv ut det uppdaterade objektet.
book.publisher = "Norstedt";
console.log(book.publisher);
// Uppgift 4: Använd en "for...in"-loop för att skriva ut både egenskapsnamnen (nycklarna) och deras värden.
for(let key in book) {
  console.log(`${key}: ${book[key]}`); // ett exempel på när man behöver bracketnotation istället för punkt!
};



