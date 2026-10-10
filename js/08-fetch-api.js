// 08. Hämta data från ett API med fetch, async och await
// JSONPlaceholder är ett gratis test-API utan nyckel. Öppna adressen nedan i webbläsaren
// först och titta på svaret, innan du skriver någon kod. Känner du igen formen från 02?
// Byt script i index.html till den här filen och öppna sidan med Live Server.

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const userList = document.querySelector("#user-list");
const apiStatus = document.querySelector("#api-status");
const reloadButton = document.querySelector("#reload-users");

// Uppgift 1: Skriv en async function getUsers() som hämtar USERS_URL och returnerar datan.
// Kasta ett fel om response.ok är false, precis som i 07.
// Skriv sedan en async function logUsers() som anropar getUsers() och loggar resultatet.



// Uppgift 2: Titta på en användare i konsolen. Vilka värden är nästlade objekt?
// Skriv en async function logCities() som skriver ut "Leanne Graham bor i Gwenborough" för varje användare.



// Uppgift 3: Skriv en funktion renderUsers(users) som ritar upp användarna i #user-list.
// Varje användare blir ett li med namnet i en h3, och under det ett p med
// e-post, stad och företagets namn.



// Uppgift 4: Skriv en async function showUsers() som
// - skriver "Hämtar användare…" i #api-status
// - hämtar användarna och renderar dem med renderUsers()
// - skriver "10 användare" i #api-status när det gått bra
// - skriver felmeddelandet i #api-status om något går fel
// Anropa showUsers().



// Uppgift 5: Stäng av nätverket i DevTools: Network-fliken, välj "Offline" i listan där det står
// "No throttling". Ladda om sidan. Vad står det nu? Slå på nätverket igen efteråt.
// Varför hamnar det här felet i catch, när en 404 inte gjorde det i 07?



// Uppgift 6: Knappen "Ladda om" ska hämta användarna igen. Stäng av knappen medan anropet pågår.
// Tips: knappen har egenskapen disabled, och try/catch kan få en finally som alltid körs.



// ==========================================================================
// Utforska på egen hand: The Trivia API
// ==========================================================================
//
// Nu kan du hämta data från ett API. Här är ett till, med quizfrågor:
// https://the-trivia-api.com/v2/questions?limit=5
// Dokumentation: https://the-trivia-api.com/docs/
//
// Det finns ingen facitlösning att följa här. Öppna adressen i webbläsaren, läs i dokumentationen,
// och se hur långt du kommer. Det är precis så man jobbar med ett nytt API på riktigt.
// Rendera frågorna i #question-list och skriv status i #quiz-status.
//
// Några frågor att börja med:
// - Hur ser en fråga ut? Var ligger frågetexten, rätt svar och de felaktiga svaren?
// - Hur får du bara frågor från en viss kategori, eller bara lätta frågor?
// - De rätta svaren ligger alltid för sig. Hur blandar du in dem bland de felaktiga,
//   så att det inte alltid är samma alternativ som är rätt?
// - Hur skulle en fråga se ut i er quiz-app i u03? Gör om API:ets form till er egen.
// - Laddar du om väldigt många gånger snabbt får du till slut ett fel. Vilken statuskod?
//   Vad betyder den, och vad står det i dokumentationen om det?
