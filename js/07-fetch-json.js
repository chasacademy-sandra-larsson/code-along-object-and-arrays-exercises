// 07. Hämta en lista från en JSON-fil med fetch, async och await
// Studenterna ligger nu i data/students.json i stället för i koden. Öppna filen och titta.
// Byt script i index.html till den här filen och öppna sidan med Live Server.
// fetch fungerar inte om du öppnar index.html direkt från filsystemet.

const list = document.querySelector("#student-list");

// Uppgift 1: Skriv en async function showStudents() som
// - hämtar "./data/students.json" med await fetch(...)
// - gör om svaret till en array med await response.json()
// - lägger varje students namn som ett li i #student-list
// Anropa showStudents().
