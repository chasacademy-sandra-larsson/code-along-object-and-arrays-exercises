// 7. Skapa ett objekt "library" med egenskaperna name, location och books.
// "books"-egenskapen ska vara en array av objekt, där varje objekt representerar en bok med egenskaperna title, author och isAvailable.
const library = {
    name: "Stadsbiblioteket",
    location: "Centrum",
    books: [
      { title: "1984", author: "George Orwell", isAvailable: true },
      { title: "The Catcher in the Rye", author: "J.D. Salinger", isAvailable: false },
      { title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true }
    ]
  };
  
// Uppgift 1: Loopa genom arrayen "books" och skriv ut titeln och författaren för varje bok.
library.books.forEach(function(book) {
    console.log(`${book.title} ${book.author} `);
})

// Uppgift 2: Hitta och skriv ut endast de böcker som är tillgängliga (isAvailable: true)
const availableBooks = [];
library.books.forEach(function(book) {
  if(book.isAvailable === true) {
    availableBooks.push(book);
  }
});


// availableBooks.forEach(function(availableBook) {
//       // Vi skriver ut varje key i objektet
//      for(let key in availableBook) {
//       console.log(`Every key for every avaialble book: ${availableBook[key]}`);
//      }

//     // Vi skriver ut endast titels på de lediga böckerna
//     //console.log(availableBook.title);
// });


