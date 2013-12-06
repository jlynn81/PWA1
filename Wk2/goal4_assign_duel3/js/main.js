/*
Name: Jennifer L Brown
Date: 1 December 2013
Assignment: Goal4: Assignment: The Duel - Part III
 */

//self-executing function
(function(){

    //Player Names, Damage, Remaining Health within an Array
    var player1 = ["Tinkerbell", 25, 100];
    var player2 = ["Rose", 25, 100];

    var round = 0;

    function fight(){   //fight functionality for the two player battle
        //console.log('in fight function');

        //opening dialogue screen information
        alert(player1[0] + ":" + player1[2] + "*START*" + player2[0] + ":" + player2[2]);

        for(var i=0; i<10; i++){    //if i is less than 10, run the loop

            //random formula is: Math.floor(Math.random() * (max-min) + min);

            var minDam1 = player1[1] * .5;
            var minDam2 = player2[1] * .5;

            //to randomize the attack damage for each player
            var f1 = Math.floor(Math.random()*(player1[1] - minDam1) + minDam1);
            var f2 = Math.floor(Math.random()*(player2[1] - minDam2) + minDam2);

            console.log(f1);
            console.log(f2);

            //inflict damage
            player1[2]-=f1;
            player2[2]-=f2;

            console.log(player1[2]);
            console.log(player2[2]);
            console.log(player1[0] + ":" + player1[2] + " " + player2[0] + ":" + player2[2]);


            var results = winnerCheck();

            console.log(results);

            if(results === "No Winner"){
                round++;
                alert(player1[0] + ":" + player1[2] + "*Round*" + round + "*OVER*" + player2[0] + ":" + player2[2]);

            }else{
                alert(results);
                break;
            };
        };

        winnerCheck();

    };

    function winnerCheck(){

        var result = "No Winner";

        if(player1[2]<1 && player2[2]<1){
            result = "Both Pass On"

        }else if(player1[2]<1){
            result = player2[0] + "WINS!!!"

        }else if(player2[2]<1){
            result = player1[0] + "WINS!!!!"

        };
        return result;
    };

    //this is where the fight will execute
    //console.log('program starts');
    fight();

})();