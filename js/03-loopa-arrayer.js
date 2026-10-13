// 03. Tre sätt att loopa en array
// for, for...of och forEach gör ungefär samma sak. Skillnaden är vad du behöver.

const temperatures = [12, 15, 9, 21, 18, 7, 14];

// Uppgift 1: Skriv ut varje temperatur med en vanlig for-loop.
console.log("---FOR-LOOP-----");
for(let i = 0; i < temperatures.length; i++) {
    console.log(temperatures[i]);
}


// Uppgift 2: Gör samma sak med for...of.
console.log("---FOR-OF-----");
for(const temp of temperatures) {
    console.log(temp);
}


// Uppgift 3: Gör samma sak med forEach och en arrow function.
console.log("---FOR-EACH-----");
temperatures.forEach((temp) => console.log(temp));


// Uppgift 4: Skriv ut "Dag 1: 12°", "Dag 2: 15°" och så vidare.
// Du behöver index. Vilken loop är enklast då?
for(let i = 0; i < temperatures.length; i++) {
    console.log(`Dag ${i + 1}: ${temperatures[i]}`);
}


// Uppgift 5: Hitta den första temperaturen över 20 och sluta leta när du hittat den.
// Använd for...of och break. Varför går det inte med forEach?
for(const temp of temperatures) {
    if(temp > 20) {
        console.log("över 20 grader", temp);
        break; 
    }
}


// Uppgift 6: Räkna ut medeltemperaturen. Avrunda till en decimal med toFixed(1).
let sum = 0;
for(const temp of temperatures) {
    sum = sum + temp;
}

const average = sum / temperatures.length;
console.log("Medel", average.toFixed(1) )



// Tumregel
// for       när du behöver styra index själv, t.ex. hoppa varannan eller gå baklänges
// for...of  när du vill ha varje värde och kanske avbryta med break eller return
// forEach   när du ska göra något med varje element och aldrig avbryta
