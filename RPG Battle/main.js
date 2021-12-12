var j1health = document.getElementById("j1health");
var j2health = document.getElementById("j2health");
var j3health = document.getElementById("j3health");
var j4health = document.getElementById("j4health");

var j1mana = document.getElementById("j1mana");
var j2mana = document.getElementById("j2mana");
var j3mana = document.getElementById("j3mana");
var j4mana = document.getElementById("j4mana");

var enemy1health = document.getElementById("enemy1health");
var enemy2health = document.getElementById("enemy2health");
var enemy3health = document.getElementById("enemy3health");

var messageDisplayed = document.getElementById("messageDisplayed");
var optionsAction = document.getElementById("options")
var musicONOFF = document.getElementById("musicButtonIMG")


var enemy1 = document.getElementById("vilain1");
var enemy2 = document.getElementById("vilain2");
var enemy3 = document.getElementById("vilain3");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player3 = document.getElementById("player3");
var player4 = document.getElementById("player4");

//Bouton action
var boutonAttack = document.getElementById("Attack");
var boutonDefend = document.getElementById("Defend");
var boutonSpecial = document.getElementById("Special");
var boutonFlee = document.getElementById("Flee");

var boutonPlayerEndTurn = document.getElementById("buttonEnd");

var infosEnemy1 = document.getElementById("infosEnemy1");
var infosEnemy2 = document.getElementById("infosEnemy2");
var infosEnemy3 = document.getElementById("infosEnemy3");





//Variables Générales
var turn = "Player";
var playerSelected = ""
var target = false
var turnNumber = 1;
var gameOver = 0;
var persoLeft = 4;
var enemiesLeft = 3;
var victory = false;

var j1death = "false";
var j2death = "false";
var j3death = "false";
var j4death = "false";

var enemy1death = "false";
var enemy2death = "false";
var enemy3death = "false";

// Variables de déclaration de mort des joueurs (empêche les répétitions à chaque)

messageDeathJ1 = 0;
messageDeathJ2 = 0;
messageDeathJ3 = 0;
messageDeathJ4 = 0;



//Variables autorisant les persos à jouer

var j1action = 1;
var j2action = 1;
var j3action = 1;
var j4action = 1;

var fireAction = false;
var waterAction = false;
var earthAction = false;
var windAction = false;

var j1available = true;
var j2available = true;
var j3available = true;
var j4available = true;

var optionsAvailable = 0;

//Variables booléennes de sélection

var selectionj1 = false;
var selectionj2 = false;
var selectionj3 = false;
var selectionj4 = false;


//Variables Santé
var currenthpJ1 = 25;
var maxhpJ1 = 25;
var currenthpJ2 = 20;
var maxhpJ2 = 20;
var currenthpJ3 = 26;
var maxhpJ3 = 26;
var currenthpJ4 = 22;
var maxhpJ4 = 22;

//Variables Mana
var currentmanaJ1 = 5;
var maxmanaJ1 = 5;
var currentmanaJ2 = 10;
var maxmanaJ2 = 10;
var currentmanaJ3 = 6;
var maxmanaJ3 = 6;
var currentmanaJ4 = 8;
var maxmanaJ4 = 8;

//Variable Strength
var firestrength = 8;
var waterstrength = 7;
var earthstrength = 10;
var windstrength = 6;

//Variables Ennemis

var hpEnemy1 = 30;
var hpEnemy2 = 25;
var hpEnemy3 = 20;

var cibleMinotaureTableau = ["Fire","Water","Earth","Wind"];
var cibleOgreTableau = ["Fire","Water","Earth","Wind"];
var cibleSatyrTableau = ["Fire","Water","Earth","Wind"];

// Autres

var firefled = false;
var waterfled = false;
var earthfled = false;
var windfled = false;
var allfled = false;

var bgmusic = document.getElementById("myAudio");
var musicPlaying = false;

//Sounds

var clickSound = document.getElementById("clickSound");
var AttackFireSimple = document.getElementById("attackFireSimple");
var AttackWaterSimple = document.getElementById("attackWaterSimple");
var AttackEarthSimple = document.getElementById("attackEarthSimple");
var AttackWindSimple = document.getElementById("attackWindSimple");

var FireSpecial = document.getElementById("fireSpecial");
var WaterSpecial = document.getElementById("waterSpecial");
var EarthSpecial = document.getElementById("earthSpecial");
var WindSpecial = document.getElementById("windSpecial");

var FireDamage = document.getElementById("fireDamage");
var WaterDamage = document.getElementById("waterDamage");
var EarthDamage = document.getElementById("earthDamage");
var WindDamage = document.getElementById("windDamage");

var Victory = document.getElementById("victory");

var MinotaurDamage = document.getElementById("minotaurDamage");
var OgreDamage = document.getElementById("ogreDamage");
var SatyrDamage = document.getElementById("satyrDamage");



// Définition des valeurs par défaut des variables joueurs/ennemis


j1health.innerHTML = "Fire | " + currenthpJ1 + "/" + maxhpJ1 ;
j2health.innerHTML = "Water | " + currenthpJ2 + "/" + maxhpJ2;
j3health.innerHTML = "Earth | " + currenthpJ3 + "/" + maxhpJ3;
j4health.innerHTML = "Wind | " + currenthpJ4 + "/" + maxhpJ4;

j1mana.innerHTML = " | " + currentmanaJ1 + "/" + maxmanaJ1;
j2mana.innerHTML = " | " + currentmanaJ2 + "/" + maxmanaJ2;
j3mana.innerHTML = " | " + currentmanaJ3 + "/" + maxmanaJ3;
j4mana.innerHTML = " | " + currentmanaJ4 + "/" + maxmanaJ4;

enemy1health.innerHTML = "Minotaure | " + hpEnemy1 + "HP";
enemy2health.innerHTML = "Ogre | " + hpEnemy2 + "HP";
enemy3health.innerHTML = "Satyr | " + hpEnemy3 + "HP";

infosEnemy1.style.visibility = "hidden";
infosEnemy2.style.visibility = "hidden";
infosEnemy3.style.visibility = "hidden";

//<embed loop="true" src="8bit-Battle01.mp3" ></embed>






//Sélction joueurs


    
player1.onclick = function() {

    if(j1available == true){

            
            playerSelected == "Fire";
            fireAction = true;
            messageDisplayed.innerHTML = "Fire se prépare !";
            optionsAction.style.visibility = "visible";
            boutonSpecial.innerHTML = "Spé : Furie";
            clickSound.play()

            if (currentmanaJ1 < 5){

                boutonSpecial.style.filter = "grayscale(100%)";

            }
            
            else {

                boutonSpecial.style.filter = "grayscale(0%)";
            }
    }

    if(j1available == false){

        messageDisplayed.innerHTML = "Fire a déjà joué !";

    }

} 

player2.onclick = function() {

    if(j2available == true){

            playerSelected == "Water";
            waterAction = true;
            messageDisplayed.innerHTML = "Water se prépare !";
            optionsAction.style.visibility = "visible";
            boutonSpecial.innerHTML = "Spé : Soin";
            clickSound.play()

            if (currentmanaJ2 < 5){

                boutonSpecial.style.filter = "grayscale(100%)";

            }
            
            else {

                boutonSpecial.style.filter = "grayscale(0%)";
            }
    }

    if(j2available == false){

        messageDisplayed.innerHTML = "Water a déjà joué !";

    }

} 
     
player3.onclick = function() {

    if(j3available == true){

            playerSelected == "Earth";
            messageDisplayed.innerHTML = "Earth se prépare !";
            optionsAction.style.visibility = "visible";
            earthAction = true;
            boutonSpecial.innerHTML = "Spé : Séïsme"
            clickSound.play()

            if (currentmanaJ3 < 6){

                boutonSpecial.style.filter = "grayscale(100%)";

            }
            
            else {

                boutonSpecial.style.filter = "grayscale(0%)";
            }
    }

    if(j3available == false){

        messageDisplayed.innerHTML = "Earth a déjà joué !";

    }

} 

player4.onclick = function() {

    if(j4available == true){

            playerSelected == "Wind";
            messageDisplayed.innerHTML = "Wind se prépare !";
            optionsAction.style.visibility = "visible";
            windAction = true;
            boutonSpecial.innerHTML = "Spé: Concentration";
            clickSound.play()


            if (currentmanaJ4 < 6){

                boutonSpecial.style.filter = "grayscale(100%)";

            }
            
            else {

                boutonSpecial.style.filter = "grayscale(0%)";
            }
}

    if(j4available == false){

        messageDisplayed.innerHTML = "Earth a déjà joué !";

    }

} 
   
        



if(turn == "Player" && playerSelected == ""){

    messageDisplayed.innerHTML = "Sélectionnez un joueur";

}

if(turn == "Enemy" && playerSelected == ""){

    messageDisplayed.innerHTML = "Les ennemis attaquent !";

}

//Option des joueurs


if(playerSelected == ""){

    optionsAction.style.visibility = "hidden";
    

}


boutonAttack.onclick = function() {
    messageDisplayed.innerHTML = "Qui est la cible ?";
    target = true;
    optionsAction.style.visibility = "hidden";
    clickSound.play()

    

}


boutonDefend.onclick = function() {

    if (fireAction) {

    
        fireAction = false;
        messageDisplayed.innerHTML = "Fire se protège";
        j1action = 0;
        playerSelected = "";
        clickSound.play()
        j1available = false;

        setTimeout(() => {

            player1.src = "Ressources/Characters/Heroes/Fire/Defend.png";
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player1.style.filter = "grayscale(100%)";
            player1.src = "Ressources/Characters/Heroes/Fire/Idle.png";

            
        }, 3000);

    }


    if (waterAction) {

    
        waterAction = false;
        messageDisplayed.innerHTML = "Water se protège";
        j1action = 0;
        playerSelected = "";
        clickSound.play()
        j2available = false;

        setTimeout(() => {
    
            player2.src = "Ressources/Characters/Heroes/Water/Defend.png";
                
                
                
        }, 1000);
    
        setTimeout(() => {
    
            messageDisplayed.innerHTML = "";
            player2.style.filter = "grayscale(100%)";
            player2.src = "Ressources/Characters/Heroes/Water/Idle.png";
    
                
        }, 3000);
        
    } 

    if (earthAction) {

    
        earthAction = false;
        messageDisplayed.innerHTML = "Earth se protège";
        j3action = 0;
        playerSelected = "";
        clickSound.play()
        j3available = false;

        setTimeout(() => {

            player3.src = "Ressources/Characters/Heroes/Earth/Defend.png";
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player3.style.filter = "grayscale(100%)";
            player3.src = "Ressources/Characters/Heroes/Earth/Idle.png";

            
        }, 3000);

    }

    if (windAction) {

    
        windAction = false;
        messageDisplayed.innerHTML = "Wind se protège";
        j4action = 0;
        playerSelected = "";
        clickSound.play()
        j4available = false;

        setTimeout(() => {

            player4.src = "Ressources/Characters/Heroes/Wind/Defend.png";
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player4.style.filter = "grayscale(100%)";
            player4.src = "Ressources/Characters/Heroes/Wind/Idle.png";

            
        }, 3000);

    }

    


}

boutonFlee.onclick = function() {

    if (fireAction) {

    
        fireAction = false;
        messageDisplayed.innerHTML = "Fire s'enfuit !";
        j1action = 0;
        playerSelected = "";
        firefled = true;
        clickSound.play()


        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player1.style.visibility = "hidden";
            optionsAction.style.visibility = "hidden";
            
            if (firefled && waterfled && earthfled && windfled) {

                messageDisplayed.innerHTML = "Tous les héros se sont enfuient ? Génial.";

            }
            
        }, 1000);
    
        

        
    }

    if (waterAction) {

    
        waterAction = false;
        messageDisplayed.innerHTML = "Water s'enfuit !";
        j2action = 0;
        playerSelected = "";
        waterfled = true;
        clickSound.play()


        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player2.style.visibility = "hidden";
            optionsAction.style.visibility = "hidden";

            if (firefled && waterfled && earthfled && windfled) {

                messageDisplayed.innerHTML = "Tous les héros se sont enfuient ? Génial.";

            }
            
            
        }, 1000);
    
    }

    if (earthAction) {

    
        earthAction = false;
        messageDisplayed.innerHTML = "Earth s'enfuit !";
        j3action = 0;
        playerSelected = "";
        earthfled = true;
        clickSound.play()


        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player3.style.visibility = "hidden";
            optionsAction.style.visibility = "hidden";
            
            if (firefled && waterfled && earthfled && windfled) {

                messageDisplayed.innerHTML = "Tous les héros se sont enfuient ? Génial.";

            }
            
        }, 1000);
    
    }

    if (windAction) {

    
        windAction = false;
        messageDisplayed.innerHTML = "Wind s'enfuit !";
        j4action = 0;
        playerSelected = "";
        windfled = true;
        clickSound.play()


        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player4.style.visibility = "hidden";
            optionsAction.style.visibility = "hidden";

            if (firefled && waterfled && earthfled && windfled) {

                messageDisplayed.innerHTML = "Tous les héros se sont enfuient ? Génial.";

            }
            
            
        }, 1000);
    
    }

    


}


// Tour Ennemis - Attaques Ennemies

boutonPlayerEndTurn.onclick = function() {

    turn = "Enemy";
    target = false;
    optionsAction.style.visibility = "hidden";
    playerSelected = "";
    messageDisplayed.innerHTML = "Les ennemis attaquent !";
    clickSound.play()


    player1.style.filter = "grayscale(100%)";
    player2.style.filter = "grayscale(100%)";
    player3.style.filter = "grayscale(100%)";
    player4.style.filter = "grayscale(100%)";
    j1available = false;
    j2available = false;
    j3available = false;
    j4available = false;
    

    
    setTimeout(() => {

        messageDisplayed.innerHTML = "";
        
        
        
    }, 800);

    setTimeout(() => {

        //Attaque Minotaure
        var cibleMinotaure = Math.floor(Math.random()*cibleMinotaureTableau.length)
        
        

            if (cibleMinotaureTableau[cibleMinotaure] == "Fire" && currenthpJ1 > 0 && hpEnemy1 > 0){

                currenthpJ1 -= 8;
                messageDisplayed.innerHTML = "Le Minotaure attaque " + cibleMinotaureTableau[cibleMinotaure] + " (8 pts de dégâts)";
                j1health.innerHTML = "Fire | " + currenthpJ1 + "/" + maxhpJ1;
                FireDamage.play()
                enemy1.src = "Ressources/Characters/Vilains/Minotaur/Attack.png";

                setTimeout(() => {

                    enemy1.src = "Ressources/Characters/Vilains/Minotaur/Idle.png";
                    
                    
                    
                }, 800);


            }

            if (cibleMinotaureTableau[cibleMinotaure] == "Water" && currenthpJ2 > 0 && hpEnemy1 > 0){

                currenthpJ2 -= 10;
                messageDisplayed.innerHTML = "Le Minotaure attaque " + cibleMinotaureTableau[cibleMinotaure] + " (10 pts de dégâts)";
                j2health.innerHTML = "Water | " + currenthpJ2 + "/" + maxhpJ2;
                WaterDamage.play()
                enemy1.src = "Ressources/Characters/Vilains/Minotaur/Attack.png";

                setTimeout(() => {

                    enemy1.src = "Ressources/Characters/Vilains/Minotaur/Idle.png";
                    
                    
                    
                }, 800);
                

            }
            
            if (cibleMinotaureTableau[cibleMinotaure] == "Earth" && currenthpJ3 > 0 && hpEnemy1 > 0){

                currenthpJ3 -= 6;
                messageDisplayed.innerHTML = "Le Minotaure attaque " + cibleMinotaureTableau[cibleMinotaure] + " (6 pts de dégâts)";
                j3health.innerHTML = "Earth | " + currenthpJ3 + "/" + maxhpJ3;
                EarthDamage.play()
                enemy1.src = "Ressources/Characters/Vilains/Minotaur/Attack.png";

                setTimeout(() => {

                    enemy1.src = "Ressources/Characters/Vilains/Minotaur/Idle.png";
                    
                    
                    
                }, 800);
            
            }

            if (cibleMinotaureTableau[cibleMinotaure] == "Wind" && currenthpJ4 > 0 && hpEnemy1 > 0){

                currenthpJ4 -= 10;
                messageDisplayed.innerHTML = "Le Minotaure attaque " + cibleMinotaureTableau[cibleMinotaure] + " (10 pts de dégâts)";
                j4health.innerHTML = "Wind | " + currenthpJ4 + "/" + maxhpJ4;
                WindDamage.play()
                enemy1.src = "Ressources/Characters/Vilains/Minotaur/Attack.png";

                setTimeout(() => {

                    enemy1.src = "Ressources/Characters/Vilains/Minotaur/Idle.png";
                    
                    
                    
                }, 800);
            }

    }, 1000)

    setTimeout(() => {

        //Attaque Ogre
        var cibleOgre = Math.floor(Math.random()*cibleOgreTableau.length)
        
        

            if (cibleOgreTableau[cibleOgre] == "Fire" && currenthpJ1 > 0 && hpEnemy2 > 0){

                currenthpJ1 -= 8;
                messageDisplayed.innerHTML = "L'Ogre attaque " + cibleOgreTableau[cibleOgre] + " (8 pts de dégâts)";
                j1health.innerHTML = "Fire | " + currenthpJ1 + "/" + maxhpJ1;
                FireDamage.play()
                enemy2.src = "Ressources/Characters/Vilains/Ogre/Attack.png";

                setTimeout(() => {

                    enemy2.src = "Ressources/Characters/Vilains/Ogre/Idle.png";
                    
                    
                    
                }, 800);

            }

            if (cibleOgreTableau[cibleOgre] == "Water" && currenthpJ2 > 0 && hpEnemy2 > 0){

                currenthpJ2 -= 10;
                messageDisplayed.innerHTML = "L'Ogre attaque " + cibleOgreTableau[cibleOgre] + " (10 pts de dégâts)";
                j2health.innerHTML = "Water | " + currenthpJ2 + "/" + maxhpJ2;
                WaterDamage.play()
                enemy2.src = "Ressources/Characters/Vilains/Ogre/Attack.png";

                setTimeout(() => {

                    enemy2.src = "Ressources/Characters/Vilains/Ogre/Idle.png";
                    
                    
                    
                }, 800);

            }
            
            if (cibleOgreTableau[cibleOgre] == "Earth" && currenthpJ3 > 0 && hpEnemy2 > 0){

                currenthpJ3 -= 6;
                messageDisplayed.innerHTML = "L'Ogre attaque " + cibleOgreTableau[cibleOgre] + " (6 pts de dégâts)";
                j3health.innerHTML = "Earth | " + currenthpJ3 + "/" + maxhpJ3;
                EarthDamage.play()
                enemy2.src = "Ressources/Characters/Vilains/Ogre/Attack.png";

                setTimeout(() => {

                    enemy2.src = "Ressources/Characters/Vilains/Ogre/Idle.png";
                    
                    
                    
                }, 800);
            
            }

            if (cibleOgreTableau[cibleOgre] == "Wind" && currenthpJ4 > 0 && hpEnemy2 > 0){

                currenthpJ4 -= 10;
                messageDisplayed.innerHTML = "L'Ogre attaque " + cibleOgreTableau[cibleOgre] + " (8 pts de dégâts)";
                j4health.innerHTML = "Wind | " + currenthpJ4 + "/" + maxhpJ4;
                WindDamage.play()
                enemy2.src = "Ressources/Characters/Vilains/Ogre/Attack.png";

                setTimeout(() => {

                    enemy2.src = "Ressources/Characters/Vilains/Ogre/Idle.png";
                    
                    
                    
                }, 800);
            }
            
    }, 2500)

    setTimeout(() => {

        //Attaque Satyre
        var cibleSatyr = Math.floor(Math.random()*cibleSatyrTableau.length)
        
        

            if (cibleSatyrTableau[cibleSatyr] == "Fire" && currenthpJ1 > 0 && hpEnemy3 > 0){

                currenthpJ1 -= 6;
                messageDisplayed.innerHTML = "Le Satyre attaque " + cibleSatyrTableau[cibleSatyr] + " (6 pts de dégâts)";
                j1health.innerHTML = "Fire | " + currenthpJ1 + "/" + maxhpJ1;
                FireDamage.play()
                enemy3.src = "Ressources/Characters/Vilains/Satyr/Attack.png";

                setTimeout(() => {

                    enemy3.src = "Ressources/Characters/Vilains/Satyr/Idle.png";
                    
                    
                    
                }, 800);

            }

            if (cibleSatyrTableau[cibleSatyr] == "Water" && currenthpJ2 > 0 && hpEnemy3 > 0){

                currenthpJ2 -= 8;
                messageDisplayed.innerHTML = "Le Satyre attaque " + cibleSatyrTableau[cibleSatyr] + " (10 pts de dégâts)";
                j2health.innerHTML = "Water | " + currenthpJ2 + "/" + maxhpJ2;
                WaterDamage.play()
                enemy3.src = "Ressources/Characters/Vilains/Satyr/Attack.png";

                setTimeout(() => {

                    enemy3.src = "Ressources/Characters/Vilains/Satyr/Idle.png";
                    
                    
                    
                }, 800);

            }
            
            if (cibleSatyrTableau[cibleSatyr] == "Earth" && currenthpJ3 > 0 && hpEnemy3 > 0){

                currenthpJ3 -= 5;
                messageDisplayed.innerHTML = "Le Satyre attaque " + cibleSatyrTableau[cibleSatyr] + " (5 pts de dégâts)";
                j3health.innerHTML = "Earth | " + currenthpJ3 + "/" + maxhpJ3;
                EarthDamage.play()
                enemy3.src = "Ressources/Characters/Vilains/Satyr/Attack.png";

                setTimeout(() => {

                    enemy3.src = "Ressources/Characters/Vilains/Satyr/Idle.png";
                    
                    
                    
                }, 800);
            
            }

            if (cibleSatyrTableau[cibleSatyr] == "Wind" && currenthpJ4 > 0 && hpEnemy3 > 0){

                currenthpJ4 -= 8;
                messageDisplayed.innerHTML = "Le Satyre attaque " + cibleSatyrTableau[cibleSatyr] + " (8 pts de dégâts)";
                j4health.innerHTML = "Wind | " + currenthpJ4 + "/" + maxhpJ4;
                WindDamage.play()
                enemy3.src = "Ressources/Characters/Vilains/Satyr/Attack.png";

                setTimeout(() => {

                    enemy3.src = "Ressources/Characters/Vilains/Satyr/Idle.png";
                    
                    
                    
                }, 800);
            }
            
    }, 5000)
   
    setTimeout(() => {

        if (currenthpJ1 <= 0 && messageDeathJ1 == 0){

            currenthpJ1 = 0;
            messageDisplayed.innerHTML = "Fire a succombé à ses blessures !";
            j1health.innerHTML = "Fire | " + currenthpJ1 + "/" + maxhpJ1;
            player1.src = "Ressources/Characters/Heroes/Fire/Death.png";
            j1death = true;
            messageDeathJ1 = 1;
            cibleMinotaureTableau.reduce("Fire");
            cibleOgreTableau.reduce("Fire");
            cibleSatyrTableau.reduce("Fire");
            persoLeft -= 1;
            
            setTimeout(() => {

                player1.style.visibility = "hidden";
                
            }, 1000);

            if (j1death == true && j2death == true && j3death == true && j4death == true){

                
                gameOver = true;


            }

            
        }
        
        if (currenthpJ2 <= 0 && messageDeathJ2 == 0){
        
            currenthpJ2 = 0;
            messageDisplayed.innerHTML = "Water a succombé à ses blessures !";
            j2health.innerHTML = "Water | " + currenthpJ2 + "/" + maxhpJ2;
            player2.src = "Ressources/Characters/Heroes/Water/Death.png";
            j2death = true;
            messageDeathJ2 = 1;
            persoLeft -= 1;
            cibleMinotaureTableau.reduce("Water");
            cibleOgreTableau.reduce("Water");
            cibleSatyrTableau.reduce("Water");

            setTimeout(() => {


                player2.style.visibility = "hidden";
                
            }, 1000);

            if (j1death == true && j2death == true && j3death == true && j4death == true){

                
                gameOver = true;


            }
            
        }
        
        
        if (currenthpJ3 <= 0 && messageDeathJ3 == 0){
        
            currenthpJ3 = 0;
            messageDisplayed.innerHTML = "Earth a succombé à ses blessures !";
            j3health.innerHTML = "Earth | " + currenthpJ3 + "/" + maxhpJ3;
            player3.src = "Ressources/Characters/Heroes/Earth/Death.png";
            j3death = true;
            messageDeathJ3 = 1;
            persoLeft -= 1;
            cibleMinotaureTableau.reduce("Earth");
            cibleOgreTableau.reduce("Earth");
            cibleSatyrTableau.reduce("Earth");
            

            setTimeout(() => {

                player3.style.visibility = "hidden";
                
            }, 1000);

            if (j1death == true && j2death == true && j3death == true && j4death == true){

                
                gameOver = true;


            }
            
        }
        
        if (currenthpJ4 <= 0 && messageDeathJ4 == 0 ){
        
            currenthpJ4 = 0;
            messageDisplayed.innerHTML = "Wind a succombé à ses blessures !";
            j4health.innerHTML = "Wind | " + currenthpJ4 + "/" + maxhpJ4;
            player4.src = "Ressources/Characters/Heroes/Wind/Death.png";
            j4death = true;
            messageDeathJ4 = 1;
            persoLeft -= 1;
            cibleMinotaureTableau.reduce("Wind");
            cibleOgreTableau.reduce("Wind");
            cibleSatyrTableau.reduce("Wind");

            setTimeout(() => {

                player4.style.visibility = "hidden";
                
            }, 1000);

            if (j1death == true && j2death == true && j3death == true && j4death == true){

                
                gameOver = true;

            }
            
            
            
        }


        
    }, 7000);
    

    setTimeout(() => {

        if (gameOver == false) { //Tour des joueurs

            turn = "Player";
            target = false;
        
            messageDisplayed.innerHTML = "A nous de jouer !";
        
            player1.style.filter = "grayscale(0%)";
            player2.style.filter = "grayscale(0%)";
            player3.style.filter = "grayscale(0%)";
            player4.style.filter = "grayscale(0%)";

            j1action = 1;
            j2action = 1;
            j3action = 1;
            j4action = 1;

            j1available = true;
            j2available = true;
            j3available = true;
            j4available = true;
        
            

        }

        if (gameOver == true){

                    messageDisplayed.innerHTML = "Nous avons perdu !";

                    player1.style.filter = "grayscale(100%)";
                    player2.style.filter = "grayscale(100%)";
                    player3.style.filter = "grayscale(100%)";
                    player4.style.filter = "grayscale(100%)";

                    j1available = false;
                    j2available = false;
                    j3available = false;
                    j4available = false;

             }

        

        
    }, 9000);

      
}
// Sélection cible quand attaque

// Attaque sur Minotaure

enemy1.onclick = function() {

    if (target && fireAction) {

        target = false;
        fireAction = false;
        messageDisplayed.innerHTML = "Fire a blessé Minotaure (" + firestrength + "pts de dégâts)";
        hpEnemy1 -= firestrength;
        enemy1health.innerHTML = "Minotaure | " + hpEnemy1 + "HP";
        enemy1.src = "Ressources/Characters/Vilains/Minotaur/Damage.png";
        playerSelected = "";
        j1available = false;
        clickSound.play()

        
        setTimeout(() => {

            enemy1.src = "Ressources/Characters/Vilains/Minotaur/Idle.png";
            player1.src = "Ressources/Characters/Heroes/Fire/Attack.png";
            j1action = 0;
            AttackFireSimple.play()
            
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player1.style.filter = "grayscale(100%)";
            player1.src = "Ressources/Characters/Heroes/Fire/Idle.png";
            MinotaurDamage.play()

            
        }, 2000);

        if (hpEnemy1 <= 0) {

            setTimeout(() => {

                messageDisplayed.innerHTML = "Minotaure a été vaincu !";
                enemy1.src = "Ressources/Characters/Vilains/Minotaur/Death.png";
                enemiesLeft -= 1;

                setTimeout(() => {

                    
                    enemy1.style.visibility = "hidden";
                    if (enemiesLeft <= 0){

                        messageDisplayed.innerHTML = "Nous avons gagné !";

                        Victory.play()

                    }

                }, 1000);
                
            }, 2000);
        }
        
    } 

    if (target && waterAction) {

        target = false;
        waterAction = false;
        messageDisplayed.innerHTML = "Water a blessé Minotaure (" + waterstrength + "pts de dégâts)";
        hpEnemy1 -= waterstrength;
        enemy1health.innerHTML = "Minotaure | " + hpEnemy1 + "HP";
        enemy1.src = "Ressources/Characters/Vilains/Minotaur/Damage.png";
        j2action = 0;
        playerSelected = "";
        j2available = false;
        clickSound.play()

        
        setTimeout(() => {

            enemy1.src = "Ressources/Characters/Vilains/Minotaur/Idle.png";
            player2.src = "Ressources/Characters/Heroes/Water/Attack.png";
            AttackWaterSimple.play()
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player2.style.filter = "grayscale(100%)";
            player2.src = "Ressources/Characters/Heroes/Water/Idle.png";
            MinotaurDamage.play()


            
        }, 2000);

        if (hpEnemy1 <= 0) {

            setTimeout(() => {

                messageDisplayed.innerHTML = "Minotaure a été vaincu !";
                enemy1.src = "Ressources/Characters/Vilains/Minotaur/Death.png";
                enemiesLeft -= 1;

                setTimeout(() => {

                
                    enemy1.style.visibility = "hidden";
                    if (enemiesLeft <= 0){

                        messageDisplayed.innerHTML = "Nous avons gagné !";

                    }
                    
                }, 1000);
                
            }, 2000);
        }
        
    } 

    if (target && earthAction) {

        target = false;
        earthAction = false;
        messageDisplayed.innerHTML = "Earth a blessé Minotaure (" + earthstrength + "pts de dégâts)";
        hpEnemy1 -= earthstrength;
        enemy1health.innerHTML = "Minotaure | " + hpEnemy1 + "HP";
        enemy1.src = "Ressources/Characters/Vilains/Minotaur/Damage.png";
        j3action = 0;
        playerSelected = "";
        j3available = false;
        clickSound.play()


        setTimeout(() => {

            enemy1.src = "Ressources/Characters/Vilains/Minotaur/Idle.png";
            player3.src = "Ressources/Characters/Heroes/Earth/Attack.png";
            AttackEarthSimple.play()
            
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player3.style.filter = "grayscale(100%)";
            player3.src = "Ressources/Characters/Heroes/Earth/Idle.png";
            MinotaurDamage.play()


            
        }, 2000);

        if (hpEnemy1 <= 0) {

            setTimeout(() => {

                messageDisplayed.innerHTML = "Minotaure a été vaincu !";
                enemy1.src = "Ressources/Characters/Vilains/Minotaur/Death.png";
                enemiesLeft -= 1;

                setTimeout(() => {

                    enemy1.style.visibility = "hidden";
                    if (enemiesLeft <= 0){

                        messageDisplayed.innerHTML = "Nous avons gagné !";

                    }
                    
                }, 1000);
                
            }, 2000);
        }
        
    } 

    if (target && windAction) {

        target = false;
        windAction = false;
        messageDisplayed.innerHTML = "Wind a blessé Minotaure (" + windstrength + "pts de dégâts)";
        hpEnemy1 -= windstrength;
        enemy1health.innerHTML = "Minotaure | " + hpEnemy1 + "HP";
        enemy1.src = "Ressources/Characters/Vilains/Minotaur/Damage.png";
        j4action = 0;
        playerSelected = "";
        j4available = false;
        clickSound.play()

        
        setTimeout(() => {

            enemy1.src = "Ressources/Characters/Vilains/Minotaur/Idle.png";
            player4.src = "Ressources/Characters/Heroes/Wind/Attack.png";
            AttackWindSimple.play()
            
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player4.style.filter = "grayscale(100%)";
            player4.src = "Ressources/Characters/Heroes/Wind/Idle.png";
            MinotaurDamage.play()


            
        }, 2000);

        if (hpEnemy1 <= 0) {

            setTimeout(() => {

                messageDisplayed.innerHTML = "Minotaure a été vaincu !";
                enemy1.src = "Ressources/Characters/Vilains/Minotaur/Death.png";
                enemiesLeft -= 1;

                setTimeout(() => {

                    enemy1.style.visibility = "hidden";
                    if (enemiesLeft <= 0){

                        messageDisplayed.innerHTML = "Nous avons gagné !";

                    }
                    
                }, 1000);
                
            }, 2000);
        }
        
    } 

}

// Attaque sur Ogre

enemy2.onclick = function() {

    if (target && fireAction) {

        target = false;
        fireAction = false;
        messageDisplayed.innerHTML = "Fire a blessé l'Ogre (" + firestrength + "pts de dégâts)";
        hpEnemy2 -= firestrength;
        enemy2health.innerHTML = "Ogre | " + hpEnemy2 + "HP";
        enemy2.src = "Ressources/Characters/Vilains/Ogre/Damage.png";
        j1action = 0;
        playerSelected = "";
        clickSound.play()

        
        setTimeout(() => {

            enemy2.src = "Ressources/Characters/Vilains/Ogre/Idle.png";
            player1.src = "Ressources/Characters/Heroes/Fire/Attack.png";
            AttackFireSimple.play()
            
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player1.style.filter = "grayscale(100%)";
            player1.src = "Ressources/Characters/Heroes/Fire/Idle.png";
            OgreDamage.play()


            
        }, 2000);

        if (hpEnemy2 <= 0) {

            setTimeout(() => {

                messageDisplayed.innerHTML = "L'Ogre a été vaincu !";
                enemy2.src = "Ressources/Characters/Vilains/Ogre/Death.png";
                enemiesLeft -= 1;

                setTimeout(() => {

                
                    enemy2.style.visibility = "hidden";

                    if (enemiesLeft <= 0){

                        messageDisplayed.innerHTML = "Nous avons gagné !";

                    }
                    
                }, 1000);
                
            }, 2000);
        }
        
    } 

    if (target && waterAction) {

        target = false;
        waterAction = false;
        messageDisplayed.innerHTML = "Water a blessé l'Ogre (" + waterstrength + "pts de dégâts)";
        hpEnemy2 -= waterstrength;
        enemy2health.innerHTML = "Ogre | " + hpEnemy2 + "HP";
        enemy2.src = "Ressources/Characters/Vilains/Ogre/Damage.png";
        j2action = 0;
        playerSelected = "";
        clickSound.play()

        
        setTimeout(() => {

            enemy2.src = "Ressources/Characters/Vilains/Ogre/Idle.png";
            player2.src = "Ressources/Characters/Heroes/Water/Attack.png";
            AttackWaterSimple.play()
            
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player2.style.filter = "grayscale(100%)";
            player2.src = "Ressources/Characters/Heroes/Water/Idle.png";
            OgreDamage.play()
            

            
        }, 2000);

        if (hpEnemy2 <= 0) {

            setTimeout(() => {

                messageDisplayed.innerHTML = "L'Ogre a été vaincu !";
                enemy2.src = "Ressources/Characters/Vilains/Ogre/Death.png";
                enemiesLeft -= 1;

                setTimeout(() => {

                
                    enemy2.style.visibility = "hidden";

                    if (enemiesLeft <= 0){

                        messageDisplayed.innerHTML = "Nous avons gagné !";

                    }
                    
                }, 1000);
                
            }, 2000);
        }
        
    } 

    if (target && earthAction) {

        target = false;
        earthAction = false;
        messageDisplayed.innerHTML = "Earth a blessé l'Ogre (" + earthstrength + "pts de dégâts)";
        hpEnemy2 -= earthstrength;
        enemy2health.innerHTML = "Ogre | " + hpEnemy2 + "HP";
        enemy2.src = "Ressources/Characters/Vilains/Ogre/Damage.png";
        j3action = 0;
        playerSelected = "";
        clickSound.play()

        
        setTimeout(() => {

            enemy2.src = "Ressources/Characters/Vilains/Ogre/Idle.png";
            player3.src = "Ressources/Characters/Heroes/Earth/Attack.png";
            AttackEarthSimple.play()
            
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player3.style.filter = "grayscale(100%)";
            player3.src = "Ressources/Characters/Heroes/Earth/Idle.png";
            OgreDamage.play()

            
        }, 2000);

        if (hpEnemy2 <= 0) {

            setTimeout(() => {

                messageDisplayed.innerHTML = "L'Ogre a été vaincu !";
                enemy2.src = "Ressources/Characters/Vilains/Ogre/Death.png";
                enemiesLeft -= 1;

                setTimeout(() => {

                
                    enemy2.style.visibility = "hidden";
                    if (enemiesLeft <= 0){

                        messageDisplayed.innerHTML = "Nous avons gagné !";

                    }

                    
                }, 1000);
                
            }, 2000);
        }
    }

    if (target && windAction) {

        target = false;
        windAction = false;
        messageDisplayed.innerHTML = "Wind a blessé l'Ogre (" + windstrength + "pts de dégâts)";
        hpEnemy2 -= windstrength;
        enemy2health.innerHTML = "Ogre | " + hpEnemy2 + "HP";
        enemy2.src = "Ressources/Characters/Vilains/Ogre/Damage.png";
        j4action = 0;
        playerSelected = "";
        clickSound.play()

        
        setTimeout(() => {

            enemy2.src = "Ressources/Characters/Vilains/Ogre/Idle.png";
            player4.src = "Ressources/Characters/Heroes/Wind/Attack.png";
            AttackWindSimple.play()
            
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player4.style.filter = "grayscale(100%)";
            player4.src = "Ressources/Characters/Heroes/Wind/Idle.png";
            OgreDamage.play()

            
        }, 2000);

        if (hpEnemy2 <= 0) {

            setTimeout(() => {

                messageDisplayed.innerHTML = "L'Ogre a été vaincu !";
                enemy2.src = "Ressources/Characters/Vilains/Ogre/Death.png";
                enemiesLeft -= 1;

                setTimeout(() => {

                
                    enemy2.style.visibility = "hidden";
                    if (enemiesLeft <= 0){

                        messageDisplayed.innerHTML = "Nous avons gagné !";

                    }

                    
                }, 1000);
                
            }, 2000);
        }
    }

}
 
// Attaque sur Satyre

enemy3.onclick = function() {

    if (target && fireAction) {

        target = false;
        fireAction = false;
        messageDisplayed.innerHTML = "Fire a blessé le Satyr (" + firestrength + "pts de dégâts)";
        hpEnemy3 -= firestrength;
        enemy3health.innerHTML = "Satyr | " + hpEnemy3 + "HP";
        enemy3.src = "Ressources/Characters/Vilains/Satyr/Damage.png";
        j1action = 0;
        playerSelected = "";
        clickSound.play()

        
        setTimeout(() => {

            enemy3.src = "Ressources/Characters/Vilains/Satyr/Idle.png";
            player1.src = "Ressources/Characters/Heroes/Fire/Attack.png";
            AttackFireSimple.play()
            
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player1.style.filter = "grayscale(100%)";
            player1.src = "Ressources/Characters/Heroes/Fire/Idle.png";
            SatyrDamage.play()

            
        }, 2000);

        if (hpEnemy3 <= 0) {

            setTimeout(() => {

                messageDisplayed.innerHTML = "Le Satyre a été vaincu !";
                enemy3.src = "Ressources/Characters/Vilains/Satyr/Death.png";
                enemiesLeft -= 1;

                setTimeout(() => {

                
                    enemy3.style.visibility = "hidden";
                    if (enemiesLeft <= 0){

                        messageDisplayed.innerHTML = "Nous avons gagné !";

                    }

                    
                }, 1000);
                
            }, 2000);
        }
        
    } 

    if (target && waterAction) {

        target = false;
        waterAction = false;
        messageDisplayed.innerHTML = "Water a blessé le Satyr (" + waterstrength + "pts de dégâts)";
        hpEnemy3 -= waterstrength;
        enemy3health.innerHTML = "Satyr | " + hpEnemy3 + "HP";
        enemy3.src = "Ressources/Characters/Vilains/Satyr/Damage.png";
        j2action = 0;
        playerSelected = "";
        clickSound.play()

        
        setTimeout(() => {

            enemy3.src = "Ressources/Characters/Vilains/Satyr/Idle.png";
            player2.src = "Ressources/Characters/Heroes/Water/Attack.png";
            AttackWaterSimple.play()
            
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player2.style.filter = "grayscale(100%)";
            player2.src = "Ressources/Characters/Heroes/Water/Idle.png";
            SatyrDamage.play()

            
        }, 2000);

        if (hpEnemy3 <= 0) {

            setTimeout(() => {

                messageDisplayed.innerHTML = "Le Satyre a été vaincu !";
                enemy3.src = "Ressources/Characters/Vilains/Satyr/Death.png";
                enemiesLeft -= 1;

                setTimeout(() => {

                
                    enemy3.style.visibility = "hidden";
                    if (enemiesLeft <= 0){

                        messageDisplayed.innerHTML = "Nous avons gagné !";

                    }

                    
                }, 1000);
                
            }, 2000);
        }
        
    } 

    if (target && earthAction) {

        target = false;
        earthAction = false;
        messageDisplayed.innerHTML = "Earth a blessé le Satyr (" + earthstrength + "pts de dégâts)";
        hpEnemy3 -= earthstrength;
        enemy3health.innerHTML = "Satyr | " + hpEnemy3 + "HP";
        enemy3.src = "Ressources/Characters/Vilains/Satyr/Damage.png";
        j3action = 0;
        playerSelected = "";
        clickSound.play()

        
        setTimeout(() => {

            enemy3.src = "Ressources/Characters/Vilains/Satyr/Idle.png";
            player3.src = "Ressources/Characters/Heroes/Earth/Attack.png";
            AttackEarthSimple.play()
            
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player3.style.filter = "grayscale(100%)";
            player3.src = "Ressources/Characters/Heroes/Earth/Idle.png";
            SatyrDamage.play()

            
        }, 2000);

        if (hpEnemy3 <= 0) {

            setTimeout(() => {

                messageDisplayed.innerHTML = "Le Satyre a été vaincu !";
                enemy3.src = "Ressources/Characters/Vilains/Satyr/Death.png";
                enemiesLeft -= 1;

                setTimeout(() => {

                
                    enemy3.style.visibility = "hidden";
                    if (enemiesLeft <= 0){

                        messageDisplayed.innerHTML = "Nous avons gagné !";

                    }

                    
                }, 1000);
                
            }, 2000);
        }
        
    } 

    if (target && windAction) {

        target = false;
        windAction = false;
        messageDisplayed.innerHTML = "Wind a blessé le Satyr (" + windstrength + "pts de dégâts)";
        hpEnemy3 -= windstrength;
        enemy3health.innerHTML = "Satyr | " + hpEnemy3 + "HP";
        enemy3.src = "Ressources/Characters/Vilains/Satyr/Damage.png";
        j4action = 0;
        playerSelected = "";
        clickSound.play()

        
        setTimeout(() => {

            enemy3.src = "Ressources/Characters/Vilains/Satyr/Idle.png";
            player4.src = "Ressources/Characters/Heroes/Wind/Attack.png";
            AttackWindSimple.play()
            
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player4.style.filter = "grayscale(100%)";
            player4.src = "Ressources/Characters/Heroes/Wind/Idle.png";
            SatyrDamage.play()

            
        }, 2000);

        if (hpEnemy3 <= 0) {

            setTimeout(() => {

                messageDisplayed.innerHTML = "Le Satyre a été vaincu !";
                enemy3.src = "Ressources/Characters/Vilains/Satyr/Death.png";
                enemiesLeft -= 1;

                setTimeout(() => {

                
                    enemy3.style.visibility = "hidden";
                    if (enemiesLeft <= 0){

                        messageDisplayed.innerHTML = "Nous avons gagné !";

                    }

                    
                }, 1000);
                
            }, 2000);
        }


    } 
}
    

boutonSpecial.onclick = function() {  //Attaques spéciales nécessiatant de la mana

    if (fireAction && currentmanaJ1 >= 5) {

    
        fireAction = false;
        messageDisplayed.innerHTML = "Fire lance Furie et attaque tous les ennemis !";
        j1action = 0;
        playerSelected = "";
        currentmanaJ1 -= 5;
        j1mana.innerHTML = " | " + currentmanaJ1 + "/" + maxmanaJ1;
        optionsAction.style.visibility = "hidden";
        hpEnemy1 -= 5;
        hpEnemy2 -= 5;
        hpEnemy3 -= 5;
        j1available = false;
        clickSound.play()




        setTimeout(() => {

            //player1.src = "Ressources/Characters/Heroes/Fire/Defend.png";
            enemy1.src = "Ressources/Characters/Vilains/Minotaur/Damage.png";
            enemy2.src = "Ressources/Characters/Vilains/Ogre/Damage.png";
            enemy3.src = "Ressources/Characters/Vilains/Satyr/Damage.png";
            enemy1health.innerHTML = "Minotaure | " + hpEnemy1 + "HP";
            enemy2health.innerHTML = "Ogre | " + hpEnemy2 + "HP";
            enemy3health.innerHTML = "Satyr | " + hpEnemy3 + "HP";
            j1health.innerHTML = "Fire | " + currenthpJ1 + "/" + maxhpJ1 ;
            j2health.innerHTML = "Water | " + currenthpJ2 + "/" + maxhpJ2;
            j4health.innerHTML = "Wind | " + currenthpJ4 + "/" + maxhpJ4;
            FireSpecial.play()
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player1.style.filter = "grayscale(100%)";
            player1.src = "Ressources/Characters/Heroes/Fire/Idle.png";
            enemy1.src = "Ressources/Characters/Vilains/Minotaur/Idle.png";
            enemy2.src = "Ressources/Characters/Vilains/Ogre/Idle.png";
            enemy3.src = "Ressources/Characters/Vilains/Satyr/Idle.png";

            
        }, 3000);

    }

    if (waterAction && currentmanaJ2 >= 5) {

    
        waterAction = false;
        messageDisplayed.innerHTML = "Water se soigne !";
        j2action = 0;
        playerSelected = "";
        currentmanaJ2 -= 5;
        j2mana.innerHTML = " | " + currentmanaJ2 + "/" + maxmanaJ2;
        optionsAction.style.visibility = "hidden";
        clickSound.play()
        j2available = false;

        

        setTimeout(() => {

            player2.src = "Ressources/Characters/Heroes/Water/Defend.png";
            currenthpJ2 += 5;
            j2health.innerHTML = "Water | " + currenthpJ2 + "/" + maxhpJ2;
            WaterSpecial.play()
            
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player2.style.filter = "grayscale(100%)";
            player2.src = "Ressources/Characters/Heroes/Water/Idle.png";

            
        }, 3000);

    }

    if (earthAction && currentmanaJ3 >= 6) {

    
        earthAction = false;
        messageDisplayed.innerHTML = "Earth lance Séïsme ! Tous aux abris !";
        j3action = 0;
        playerSelected = "";
        currentmanaJ3 -= 6;
        j3mana.innerHTML = " | " + currentmanaJ3 + "/" + maxmanaJ3;
        optionsAction.style.visibility = "hidden";
        hpEnemy1 -= 3;
        hpEnemy2 -= 3;
        hpEnemy3 -= 3;
        currenthpJ1 -= 3;
        currenthpJ2 -= 3;
        currenthpJ4 -= 3;
        clickSound.play()
        j3available = false;



        setTimeout(() => {

            player3.src = "Ressources/Characters/Heroes/Earth/Special.png";
            enemy1.src = "Ressources/Characters/Vilains/Minotaur/Damage.png";
            enemy2.src = "Ressources/Characters/Vilains/Ogre/Damage.png";
            enemy3.src = "Ressources/Characters/Vilains/Satyr/Damage.png";
            player1.src = "Ressources/Characters/Heroes/Fire/Death.png";
            player2.src = "Ressources/Characters/Heroes/Water/Death.png";
            player4.src = "Ressources/Characters/Heroes/Wind/Death.png";
            enemy1health.innerHTML = "Minotaure | " + hpEnemy1 + "HP";
            enemy2health.innerHTML = "Ogre | " + hpEnemy2 + "HP";
            enemy3health.innerHTML = "Satyr | " + hpEnemy3 + "HP";
            j2health.innerHTML = "Water | " + currenthpJ2 + "/" + maxhpJ2;
            j1health.innerHTML = "Fire | " + currenthpJ1 + "/" + maxhpJ1;
            j4health.innerHTML = "Wind | " + currenthpJ4 + "/" + maxhpJ4;
            EarthSpecial.play()
            
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player3.style.filter = "grayscale(100%)";
            player3.src = "Ressources/Characters/Heroes/Earth/Idle.png";
            player1.src = "Ressources/Characters/Heroes/Fire/Idle.png";
            player2.src = "Ressources/Characters/Heroes/Water/Idle.png";
            player4.src = "Ressources/Characters/Heroes/Wind/Idle.png";
            enemy1.src = "Ressources/Characters/Vilains/Minotaur/Idle.png";
            enemy2.src = "Ressources/Characters/Vilains/Ogre/Idle.png";
            enemy3.src = "Ressources/Characters/Vilains/Satyr/Idle.png";
            
        }, 3000);

    }

    if (windAction && currentmanaJ4 >= 6) {

    
        waterAction = false;
        messageDisplayed.innerHTML = "Wind lance Concentration ! Sa puissance augmente !";
        j4action = 0;
        playerSelected = "";
        currentmanaJ4 -= 6 ;
        j4mana.innerHTML = " | " + currentmanaJ4 + "/" + maxmanaJ4;
        optionsAction.style.visibility = "hidden";
        clickSound.play()
        j4available = false;

        

        setTimeout(() => {

            player4.src = "Ressources/Characters/Heroes/Wind/Ready.png";
            windstrength += 5;
            j4health.innerHTML = "Wind | " + currenthpJ4 + "/" + maxhpJ4;
            WindSpecial.play()
            
            
            
            
        }, 1000);

        setTimeout(() => {

            messageDisplayed.innerHTML = "";
            player4.style.filter = "grayscale(100%)";
            player4.src = "Ressources/Characters/Heroes/Wind/Idle.png";

            
        }, 3000);

    }

}



//Music ON OFF

musicONOFF.onclick = function() {

    if ( musicONOFF.src = "Ressources/Others/Music Off.png"){


        bgmusic.pause()

        musicPlaying = false;

        musicONOFF.src = "Ressources/Others/Music On.png";
        

    }

    if (musicONOFF.src = "Ressources/Others/Music On.png"){


        bgmusic.play()
    
        musicPlaying = true;

        musicONOFF.src = "Ressources/Others/Music Off.png";
        clickSound.play()

        
    
        }
    
    
}

//Affichage PV ennemis

enemy1.onmouseover = function() {

    infosEnemy3.style.visibility = "visible";
    enemy3health.innerHTML = "Minotaure | " + hpEnemy1 + "HP";



}
enemy1.onmouseleave = function() {

    infosEnemy3.style.visibility = "hidden";



}

enemy2.onmouseover = function() {

    infosEnemy3.style.visibility = "visible";
    enemy3health.innerHTML = "Ogre | " + hpEnemy2 + "HP";



}
enemy2.onmouseleave = function() {

    infosEnemy3.style.visibility = "hidden";



}

enemy3.onmouseover = function() {

    infosEnemy3.style.visibility = "visible";
    enemy3health.innerHTML = "Satyre | " + hpEnemy3 + "HP";



}
enemy3.onmouseleave = function() {

    infosEnemy3.style.visibility = "hidden";



}


