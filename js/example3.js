// 3. Skapa ett objekt "shoppingCart" med egenskapen "items" (en array av objekt).
// Varje objekt i arrayen ska representera en artikel med egenskaperna name och price.

const shoppingCart = {
    items: [
      { name: "Laptop", price: 900 },
      { name: "Phone", price: 500 },
      { name: "Headphones", price: 100 }
    ]
  };
  
  // Uppgift 1: Loopa genom arrayen av items och skriv ut namn och pris för varje artikel.
  // Uppgift 2: Beräkna det totala priset för alla artiklar och skriv ut resultatet.
let total = 0;
shoppingCart.items.forEach(function(item) {
    console.log(`${item.name}: ${item.price} SEK`);
    total += item.price;
})

console.log(`Total price is ${total}`);

