// 9. Skapa ett objekt "university" med nästlade objekt och arrayer.
// Det ska ha egenskaperna name, faculties (en array av objekt), och en egenskap students (också en array av objekt).

const university = {
    name: "Tekniska Universitetet",
    faculties: [
      { name: "Datavetenskap", head: "Dr. Smith" },
      { name: "Matematik", head: "Dr. Jones" }
    ],
    students: [
      { name: "Alice", faculty: "Datavetenskap" },
      { name: "Bob", faculty: "Matematik" }
    ]
  };

// Uppgift 1: Loopa genom fakulteterna och skriv ut deras namn och chefer.

university.faculties.forEach(function(faculty) {
    console.log(`Chefen för ${faculty.name} är ${faculty.head}`);
});
// Uppgift 2: Lägg till en ny student till students-arrayen och skriv ut det uppdaterade university-objektet.
const newStudent = {
    name: "Barbara",
    faculty: "Latin"
}
university.students.push(newStudent);

console.log(university);
