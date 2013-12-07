/*
Name: Jennifer L Brown
Date: 1 December 2013
Assignment: Goal4: Assignment: The Duel - Part III
 */

//self-executing function
(function(){

    //Player Names, Damage, Remaining Health (Object with three keys created for both players
    var player1 = {name: 'Hulk', damage: 25, health: 100};
    var player2 = {name: 'Sandman', damage: 25, health: 100};
    //console.log(player1);
    //console.log(player2);

    var fighters = [player1, player2];



    var round = document.getElementById('round');
        round.innerHTML = 'ROUND: ';
        //round = 0;
        console.log(round);

    var fightBtn = document.getElementById('fight_btn');
        fightBtn.addEventListener('click', onFight);
        console.log(fightBtn);


    function fight(){   //fight functionality for the two player battle
        //console.log('in fight function');

        fighters.innerHTML = player1.name + ":" + player1.health + ' ***START*** ' + player2.name + ":" + player2.health;

        //opening dialogue screen information
        console.log(player1.name + ":" + player1.health + ' ***START*** ' + player2.name + ":" + player2.health);

        for(var i = 0; i < 10; i++){    //if i is less than 10, run the loop

            //random formula is: Math.floor(Math.random() * (max-min) + min);

            var minDam1 = fighters[0].damage * .5;
            var minDam2 = fighters[1].damage * .5;

            //to randomize the attack damage for each player

            var f1 = Math.floor(Math.random()*(fighters[0].damage - minDam1) + minDam1);
            var f2 = Math.floor(Math.random()*(fighters[1].damage - minDam2) + minDam2);

            console.log(f1);
            console.log(f2);

            //Fighter inflicted damage
            player1.damage-=f1;
            player2.damage-=f2;

            console.log(player1.health);
            console.log(player2.health);
            console.log(player1.name + ":" + player1.health + " " + player2.name + ":" + player2.health);


            var results = winnerCheck();

            console.log(results);

            if(results === "No Winner"){
                round++;
                fighters.innerHTML = player1.name + ":" + player1.health + "*Round*" + round + "*OVER*" + player2.name + ":" + player2.health;
                console.log(player1.name + ":" + player1.health + " ***Round " + round + " Over***" + player2.name + ":" + player2.health);

            }else{
                return (results);
                break;
            }
        }
    }

    function winnerCheck(){

        var result = "No Winner";

        if(player1.health<1 && player2.health<1){
            result = "Both Pass On"

        }else if(player1.health<1){
            result = player2.name + "WINS!!!"

        }else if(player2.health<1){
            result = player1.name + "WINS!!!!"

        }
        return result;
    }
    function onFight(event){
        console.log('click');

        winnerCheck();
    }


    //this is where the fight will execute
    //console.log('program starts');
    fight();

})();