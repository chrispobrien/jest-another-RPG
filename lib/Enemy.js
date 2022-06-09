const Potion = require('./Potion');

function Enemy(name = '', weapon = '') {
    this.name = name;
    this.weapon = weapon;
  
    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
    this.potion = new Potion();

  };

Enemy.prototype.getStats = function() {
  return {
    potion: this.potion,
    health: this.health,
    strength: this.strength,
    agility: this.agility
  };
};

Enemy.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

Enemy.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    };
    return true;
};

Enemy.prototype.reduceHealth = function(amount) {
    if (this.health > amount) {
        this.health -= amount;
    } else {
        this.health = 0;
    };
};

Enemy.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max-min) + min);
};

Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
}

  module.exports = Enemy;