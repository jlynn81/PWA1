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
    console.log(player1);
    console.log(player2);


    //variables set within an array
    var fighter = [player1, player2];

        //displays fighter1 information on top bar
        fighter[0] = document.querySelectorAll('#kabal');
        console.log(fighter[0]);
        fighter[0].innerHTML = player1.name +': ' + player1.health + ': ';

        //displays fighter 2 information on top bar
        fighter[1] = document.getElementById('kratos');
        console.log(fighter[1]);
        //fighter[1].innerHTML = player2.name + ': ';

    //fightBtn initialize for data to be accessed for the per round click
    var fightBtn = document.getElementById('fight_btn');
    fightBtn.addEventListener('click', onFight);
    console.log(fightBtn);

    //displays the Fighter Result
    var score = document.querySelector('p');

    var round = 0;
    console.log(round);

    //round variable created to reflect upon click, round will be displayed
    var roundNum = document.getElementById('round_number');
        roundNum.innerHTML = 'Click to Start Fight ';



    function fight(){   //fight functionality for the two player battle
        //console.log('in fight function');

        //= document.getElementById('scores')
        score.innerHTML = player1.name + ': ' + player1.health + player2.name + ': ' + player2.health;
        console.log(score);

        //sets the player damage
        var minDam1 = player1.damage * .5;
        var minDam2 = player2.damage * .5;

        //to randomize the attack damage for each player

        var f1 = Math.floor(Math.random()*(player1.damage - minDam1) + minDam1);
        var f2 = Math.floor(Math.random()*(player2.damage - minDam2) + minDam2);
        console.log(f1);
        console.log(f2);

        //Fighter inflicted damage
        player1.health-=f1;
        player2.health-=f2;

        //variable for the results of the fight
        var results = winnerCheck();
        console.log(results);



        //if the results show that no one wins, then 'No Winner' displays
        if(results === "No Winner"){

            //round advances by one
            round++;
            score.innerHTML = player1.name + ': ' + '' + player1.health + player2.name + ': ' + player2.health;


            //displays fighters current health after each round
            roundNum.innerHTML = 'Round: ' + round + ' Complete';
            console.log(roundNum);

            }else{
                //displays the results in html for score
                score.innerHTML = results;

            }
    }

    function winnerCheck(){

        var result = "No Winner";

        if(player1.health < 1 && player2.health < 1){
            result = "Both Pass On"
            //if both pass on, then fightBtn stops working
            fightBtn.removeEventListener('click', onFight);

        }else if(player1.health < 1){
            result = player2.name + " WINS!!!"
            //if player1 wins, fightBtn stops working
            fightBtn.removeEventListener('click', onFight);

        }else if(player2.health < 1){
            result = player1.name + " WINS!!!!"
            //if player2 wins, fightBtn stops working
            fightBtn.removeEventListener('click', onFight);

        }
        return result;



    }

    //clicking the button initiates the fight and starts each round
    function onFight(event){
        console.log('click');

        //this is where the fight will execute
        //console.log('program starts');
        fight();

    }





})();