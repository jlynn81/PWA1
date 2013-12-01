/*
Name: Jennifer L Brown
Date: 1 December 2013
Assignment: Goal1: Assignment: Duel 1
 */

//self-executing function
(function(){

    //Player Names
    var player1 = "Tinkerbell";
    var player2 = "Rose";

    //Player Damage
    var player1Damage = 25;
    var player2Damage = 25;

    //Player Remaining Health
    var player1Health = 100;
    var player2Health = 100;

    var round = 0;

    function fight(){   //fight functionality for the two player battle
        //console.log('in fight function');

        //opening dialogue screen information
        alert(player1 + ":" + player1Health + "*START*" + player2 + ":" + player2Health);

        for(var i=0; i<10; i++){    //if i is less than 10, run the loop

            //random formula is: Math.floor(Math.random() * (max-min) + min);

            var minDam1 = player1Damage * .5;
            var minDam2 = player2Damage * .5;

            //to randomize the attack damage for each player
            var f1 = Math.floor(Math.random()*(player1Damage - minDam1) + minDam1);
            var f2 = Math.floor(Math.random()*(player2Damage - minDam2) + minDam2);

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            player1Health-=f1;
            player2Health-=f2;

            //console.log(player1Health);
            //console.log(player2Health);
            //console.log(player1 + ":" + player1Health + " " + player2 + ":" + player2Health);


            var results = winnerCheck();

            //console.log(results);

            if(results === "No Winner"){
                round++;
                alert(player1 + ":" + player1Health + "*Round*" + round + "*OVER*" + player2 + ":" + player2Health);

            }else{
                alert(results);
                break;
            };
        };

        winnerCheck();

    };

    function winnerCheck(){

        var result = "No Winner";

        if(player1Health<1 && player2Health<1){
            result = "Both Pass On"

        }else if(player1Health<1){
            result = player2 + "WINS!!!"

        }else if(player2Health<1){
            result = player1 + "WINS!!!!"

        };
        return result;
    };

    //this is where the fight will execute
    //console.log('program starts');
    fight();

})();