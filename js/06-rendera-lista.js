// 06. Rendera en lista
// Samma sorts data som i 05, fast nu hamnar den på sidan i stället för i konsolen.
// Byt script i index.html till den här filen och öppna sidan med Live Server.

const students = [
  { id: 1, name: "Bob", grade: "B", age: 20, skills: ["HTML", "CSS"] },
  { id: 2, name: "Sara", grade: "A", age: 22, skills: ["HTML", "CSS", "JavaScript"] },
  { id: 3, name: "John", grade: "A", age: 25, skills: ["JavaScript"] },
  { id: 4, name: "Barbro", grade: "C", age: 30, skills: [] },
  { id: 5, name: "Nils", grade: "A", age: 23, skills: ["CSS", "Figma"] },
];

const list = document.querySelector("#student-list");
const count = document.querySelector("#count");

// Uppgift 1: Skapa ett li-element för varje student och lägg till det i listan.
// Texten ska vara studentens namn. Använd createElement, textContent och append.



// Uppgift 2: Ändra texten så att det står "Sara (A), 22 år" i stället för bara namnet.
// Töm listan först med list.replaceChildren(), annars ligger namnen från uppgift 1 kvar.
// Öppna Elements-fliken i DevTools. Står studenterna i HTML-filen? Var finns de då?



// Uppgift 3: Lägg till en egen ul inuti varje li med studentens skills, en li per skill.
// Har studenten inga skills ska det stå "Inga skills än" i stället.
// En loop per nivå, precis som när du loopade nästlad data i konsolen.



// Uppgift 4: Du har nu skrivit nästan samma loop tre gånger. Flytta koden till en funktion
// renderStudents(studentsToShow) som tömmer listan och ritar upp de studenter den får in.
// Den ska också skriva "Visar 5 studenter" i #count.
// Kommentera bort uppgift 1–3 och anropa renderStudents(students).



// Uppgift 5: Rendera bara studenterna med betyget A.
// Gör som i 05: bygg en ny array med en loop, och skicka den till renderStudents.



// Uppgift 6: Vad händer om du anropar renderStudents([])? Se till att det står
// "Inga studenter att visa" i listan i stället för att den bara är tom.



// Uppgift 7 (överkurs, händelser kommer i morgon): Knapparna "Alla" och "Bara A" finns i index.html.
// Lyssna på klick och rendera rätt lista. Vad är det som gör att sidan uppdateras?
