const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
    constructor(name = '', weapon = '') {
        // Call super constructor, in this case Character constructor
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();
    };

    getStats() {
        return {
            potion: this.potion,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
};
  module.exports = Enemy;