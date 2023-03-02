//This is the page used to store and reference all powerups used in game

function powerup(name, description, effect){
    this.name = name;//name of the powerup presented to the players, a string
    this.description = description; //The description of the powerup, a longer string than name

    this.effect = effect; //ideally, this will be a function passed into the object as a parameter, which will then be used in the array of objects
}

const powerupList = [
    {
        name: "Health-Up",
        description: "Increase your maximum health by 1",
        effect: function(player){
            player.maxHealth += 1;
        }
    },
    {
        name: "Quiver-Up",
        description: "Increase your maximum quiver size by 1",
        effect: function(player){
            player.maxQuiver += 1;
        }
    },
    {
        name: "Jump Pack",
        description: "Gain the ability to jump an additional time",
        effect: function(player){
            player.jumpAmount += 1;
        }
    },
];

//powerupList[0].effect(player1); //As an example, this 