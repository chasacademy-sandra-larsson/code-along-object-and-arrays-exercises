// 01. Objekt: läsa, ändra, lägga till och ta bort
// Ett objekt är en samling nycklar och värden. Nyckeln är alltid en sträng.

const book = {
  title: "Pippi Långstrump",
  author: "Astrid Lindgren",
  year: 1945,
  isAvailable: true,
};

// Uppgift 1: Skriv ut bokens titel och författare med punktnotation.



// Uppgift 2: Skriv ut året med bracket-notation, alltså book["..."].



// Uppgift 3: Spara strängen "author" i en variabel som heter field.
// Skriv ut värdet med hjälp av variabeln. Varför fungerar inte book.field?



// Uppgift 4: Ändra isAvailable till false, och lägg till en ny nyckel pages med värdet 160.
// Skriv ut hela objektet. Hur kan du ändra ett objekt som är deklarerat med const?



// Uppgift 5: Skriv ut book.publisher. Vad får du, och varför blir det inget fel?



// Uppgift 6: Kontrollera om boken har nyckeln "pages" respektive "publisher".
// Använd Object.hasOwn(objekt, nyckel).



// Uppgift 7: Ta bort nyckeln isAvailable med delete och skriv ut objektet igen.
