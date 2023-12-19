//This is the page used to store and reference all powerups used in game

function powerup(name, description, effect){
    this.name = name;//name of the powerup presented to the players, a string
    this.description = description; //The description of the powerup, a longer string than name

    this.effect = effect; //ideally, this will be a function passed into the object as a parameter, which will then be used in the array of objects
    this.stackable = Boolean;
    this.p1Has = false;
    this.p2Has = false;
}

const powerupList = [
    {
        name: "Health-Up",
        description: "Increase your maximum health by 1",
        effect: function(player){
            player.maxHealth += 1;
            player.currentHealth += 1;
        },
        stackable: true
        
    },
    {
        name: "Quiver-Up",
        description: "Increase your maximum quiver size by 1",
        effect: function(player){
            player.quiverMax += 1;
        },
        stackable: true
    },
    {
        name: "Jump Pack",
        description: "Gain the ability to jump an additional time",
        effect: function(player){
            player.jumpAmount += 1;
            player.storedJumpAmount += 1;
        },
        stackable: true
    },
    {
        name: "Faster Spear",
        description: "Increases the speed of your projectiles",
        effect: function(player){
            player.shootSpeed += 5;
        },
        stackable: true
    },
    {
        name: "Slower Spear",
        description: "Decreases the speed of your ENEMY's projectiles",
        effect: function(player){
            if(player.id == "player1")
                if(player2.shootSpeed == 5)
                    player2.shootSpeed = 5;
                else 
                player2.shootSpeed -= 4;
            else
                if(player1.shootSpeed == 5)
                player1.shootSpeed = 5;
            else 
            player1.shootSpeed -= 4;
        },
        stackable: true
    },
    {
        name: "Bigger Spear",
        description: "Increases the size of your projectile",
        effect: function(player){
            player.spearHeight += 10;
        },
        stackable: true
    },
    {
        name: "Speed-Up",
        description: "Increases movement speed.",
        effect: function(player){//needs to have its own function that only unlocks if the player presses down AND has the powerup <3
            player.baseMoveSpeed++;
        },
        stackable: true
    },
    {
        name: "Teleport Down",
        description: "While in the air, teleport to the round when you press down",
        effect: function(player){//needs to have its own function that only unlocks if the player presses down AND has the powerup <3
            //player.y = player.originalY;
            if(player.name == 'player1'){
                this.p1Has == true;
            }
            else
                this.p2Has == true;
        },
        stackable: false
    }
];

//powerupList[0].effect(player1); //As an example, this 