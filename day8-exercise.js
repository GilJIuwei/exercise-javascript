class Player {
    constructor(name, health, power) {
      this.name = name;
      this.health = health;
      this.power = power;
    }
  
    // Method to show player status
    showStatus() {
      console.log(`Player: ${this.name}, Health: ${this.health}, Power: ${this.power}`);
    }
  
    // Method to receive a random item
    receiveItem(item) {
      console.log(`${this.name} received item: ${item}`);
      // Update player's power based on the item
      // This is a placeholder, you can add your own logic
      if (item === 'health potion') {
        this.health +=  10;
      } else if (item === 'power boost') {
        this.power +=  10;
      }
    }
  
    // Method to shoot
    shoot(opponent) {
      console.log(`${this.name} shot at ${opponent.name}`);
      opponent.health -= this.power;
      if (opponent.health <=  0) {
        console.log(`${this.name} is the winner!`);
      }
    }
  }
  
  class ShootingGame {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
  
    // Start the game
    start() {
      const items = ['health potion', 'power boost', 'nothing'];
  
      while (this.player1.health >  0 && this.player2.health >  0) {
        // Show each player's status before shooting
        this.player1.showStatus();
        this.player2.showStatus();
  
        // Get random item for each player before shooting
        const item1 = items[Math.floor(Math.random() * items.length)];
        const item2 = items[Math.floor(Math.random() * items.length)];
  
        this.player1.receiveItem(item1);
        this.player2.receiveItem(item2);
  
        // Show each player's status after receiving items
        this.player1.showStatus();
        this.player2.showStatus();
  
        // Players take turns to shoot
        this.player1.shoot(this.player2);
        if (this.player2.health <=  0) break;
  
        this.player2.shoot(this.player1);
      }
    }
  }
  
  // Create players
  const player1 = new Player('Player  1',  100,  10);
  const player2 = new Player('Player  2',  100,  10);
  
  // Start the game
  const game = new ShootingGame(player1, player2);
  game.start();
  console.log(game);