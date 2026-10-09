// 8. Skapa ett objekt "team" med egenskapen "players", som är en array av objekt.
// Varje spelare-objekt ska ha egenskaperna name och score.

const team = {
    players: [
      { name: "Alice", score: 10 },
      { name: "Bob", score: 15 },
      { name: "Charlie", score: 20 }
    ]
  };
  
  // Uppgift 1: Öka varje spelares poäng med 5 och skriv ut den uppdaterade arrayen.
  team.players.forEach(function(player){
      // Nya poängen = Nuvarande poäng + 5
     player.score += 5;
  })  

  console.log(team);

  // Uppgift 2: Lägg till en ny spelare i arrayen med ett namn och en poäng, och skriv ut det uppdaterade team-objektet.
  const newPlayer = {
    name: "Lennart",
    score: 200
  }
  team.players.push(newPlayer);

  console.log(team);
