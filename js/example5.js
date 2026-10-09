// 5. Skapa ett objekt "person" med egenskaperna name och age.
// Lägg till en metod "greet" som skriver ut en hälsning med personens namn.
const person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hej, mitt namn är " + this.name);
    }
 
  };
  
  // Uppgift 1: Anropa greet-metoden.
  person.greet();
  // Uppgift 2: Ändra namnet och anropa greet-metoden igen.
  person.name = "Sandra";
  person.greet();




