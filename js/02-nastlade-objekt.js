// 02. Nästlade objekt
// Så här ser data från ett API ofta ut: objekt inuti objekt, och ibland saknas en del.

const user = {
  id: 7,
  name: "Amira Hassan",
  contact: {
    email: "amira@example.com",
    phone: null,
  },
  address: {
    street: "Storgatan 12",
    city: "Malmö",
    geo: { lat: 55.605, lng: 13.0038 },
  },
  settings: {
    theme: "dark",
    notifications: { email: true, sms: false },
  },
};

const otherUser = {
  id: 8,
  name: "Leo Berg",
  contact: { email: "leo@example.com" },
  // Leo har inte fyllt i någon adress
};

// Uppgift 1: Skriv ut user:s stad och latitud.

console.log(user.address.city);
console.log(user.address.geo.lat);

// Uppgift 2: Ändra user:s tema till "light" och slå på sms-notiser.
user.settings.theme = "light";
user.settings.notifications.sms = true;
console.log(user.settings);


// Uppgift 3: Försök skriva ut otherUser.address.city. Vad händer, och varför?
//console.log(otherUser.adress.city);  // Kastar (ger) ett fel - optional chaining


// Uppgift 4: Gör samma sak med optional chaining (?.) så att det inte kraschar.
console.log(otherUser.adress?.city);


// Uppgift 5: Skriv en funktion getCity(person) som returnerar staden,
// eller "Okänd stad" om adressen saknas. Använd ?. och ??.
// Testa med både user och otherUser.

// hoppas över just nu

// Uppgift 6: user.contact.phone är null. Skriv ut telefonnumret,
// eller "Inget nummer" om det saknas.
console.log(otherUser.contact.phone ?? "inget nummer");