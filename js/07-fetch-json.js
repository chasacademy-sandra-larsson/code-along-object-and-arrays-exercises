// 07. Hämta data från en JSON-fil med fetch, async och await
// Samma lista som i 06, men nu ligger datan i data/students.json i stället för i koden.
// Byt script i index.html till den här filen och öppna sidan med Live Server.
// Öppna data/students.json och titta: JSON liknar ett JavaScript-objekt,
// men alla nycklar har dubbla citattecken och det får inte finnas kommatecken efter sista elementet.

const DATA_URL = "./data/students.json";

const list = document.querySelector("#student-list");
const count = document.querySelector("#count");
const statusMessage = document.querySelector("#status");

let allStudents = []; // används i uppgift 7

// Färdigt från 06: bygger ett li för en student, och ritar om hela listan.

function createStudentItem(student) {
  const li = document.createElement("li");
  li.textContent = `${student.name} (${student.grade}), ${student.age} år`;

  if (student.skills.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "Inga skills än";
    li.append(empty);
  } else {
    const skillList = document.createElement("ul");
    for (const skill of student.skills) {
      const skillItem = document.createElement("li");
      skillItem.textContent = skill;
      skillList.append(skillItem);
    }
    li.append(skillList);
  }

  return li;
}

function renderStudents(studentsToShow) {
  list.replaceChildren();
  for (const student of studentsToShow) {
    list.append(createStudentItem(student));
  }
  count.textContent = `Visar ${studentsToShow.length} studenter`;
}

// Uppgift 1: Skriv en async function logStudents() som hämtar DATA_URL med fetch.
// Logga först svaret från fetch, sedan det du får av await response.json().
// Anropa funktionen. Vad är skillnaden mellan de två sakerna du loggade?



// Uppgift 2: Ta bort await framför fetch och kör igen. Vad loggas nu, och vilket fel får du?



// Uppgift 3: Skriv en async function getStudents() som returnerar datan i stället för att logga den.
// Om response.ok är false ska den kasta ett fel med statuskoden:
// throw new Error(`Kunde inte hämta studenterna (${response.status})`)



// Uppgift 4: Skriv en async function showStudents() som
// - skriver "Laddar…" i #status
// - hämtar studenterna med getStudents() och renderar dem med renderStudents()
// - tömmer #status när det gått bra
// - skriver felmeddelandet i #status om något går fel. Använd try och catch.
// Anropa showStudents().



// Uppgift 5: Ändra DATA_URL till "./data/studenter.json", som inte finns, och ladda om.
// Vad står på sidan och i konsolen? Ändra tillbaka efteråt.
// Varför behövs kollen av response.ok? Hamnar inte en 404 i catch av sig själv?



// Uppgift 6: Öppna index.html direkt från filsystemet, alltså utan Live Server. Vad händer?



// Uppgift 7 (överkurs): Få knapparna "Alla" och "Bara A" att fungera med datan från JSON-filen.
// Spara datan i variabeln allStudents i showStudents(), så att lyssnarna kommer åt den.
