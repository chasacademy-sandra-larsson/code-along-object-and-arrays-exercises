// 4. Skapa en array "students" med objekt inuti. Varje objekt ska representera en student med egenskaperna name, grade och age.
const students = [
    { name: "Bob", grade: "B", age: 20 },
    { name: "Sara", grade: "A", age: 22 },
    { name: "John", grade: "A", age: 25 },
    { name: "Barbro", grade: "A", age: 30 },
    { name: "John", grade: "C", age: 23 }
  ];
  
  // Uppgift 1: Använd en loop för att skriva ut varje students namn och betyg.
  students.forEach(function(student) {
    console.log(`${student.name} ${student.grade} ${student.age}`);
  })
  // Uppgift 2: Filtrera ut studenter med betyget "A" och skriv ut resultatet.
  const topStudents = [];
  for(let i = 0; i < students.length; i++) {
      if(students[i].grade === "A") {
        //console.log(students[i].name);
        topStudents.push(students[i]);
      }
  }
  
  console.log("topStudents", topStudents)
 



// Överkurs - men detta kommer vi använda mycket framöver - map, filter etc är lite best-practice i JS-ramverk mfl 
// const topStudents = students.filter(function (student) {
//   return student.grade === "A";
// })

const topStudentsFilter = students.filter(function(student) {
   return student.grade === "A";
}) 

console.log("topStudentsFilter", topStudentsFilter);



