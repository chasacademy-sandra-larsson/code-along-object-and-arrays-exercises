// 08. Hämta en lista från ett API med fetch, async och await
// JSONPlaceholder är ett gratis test-API utan nyckel. Öppna adressen nedan i webbläsaren
// och titta på svaret innan du skriver någon kod.
// Byt script i index.html till den här filen och öppna sidan med Live Server.

const userList = document.querySelector("#user-list");

// Uppgift 1: Skriv en async function showUsers() som hämtar
// "https://jsonplaceholder.typicode.com/users" och lägger ett li per användare i #user-list,
// med namn och stad: "Leanne Graham, Gwenborough".
// Det är samma sak som i 07, bara en annan adress.
// Tips: staden ligger i ett nästlat objekt. Logga en användare om du inte hittar den.

async function showUsers() {

    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    renderUsers(users);
}



function renderUsers(users) {

    for(const user of users) {
        const li = document.createElement("li");
        li.textContent = `${user.name} ${user.address.city}`;
        userList.append(li);

      }

}

showUsers();
