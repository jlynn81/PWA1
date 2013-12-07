/*
 * GUESSING GAME:
 *
 * Created By: Jennifer L. Brown
 * Date: 6 December 2013
 * 
 * GUESSING GAME
 */

//Game variables
(function (){

    //this selects the output from the html
    var output = document.querySelector('#output');
    console.log(output);

    //this selects the user input from the html
    var input = document.querySelector('#input');
    console.log(input);

    var btn = document.querySelector('button');
    console.log(btn);
    btn.addEventListener('click', onClick);


    //variable stores a random number between 1 and 10
    var missingNumber = Math.floor(Math.random() * 10) + 1;
    console.log(missingNumber);


    //variable for the number of tries is set to 3
    var maxTries = 3;

    var userInput;
    //console.log('input:', userInput);

    function checkInput(){
        //if the user inputs a number less than the missing number
        if(userInput < missingNumber){
            output.innerHTML = 'Your guess is too low!';
        //if the user inputs a number greater than the missing number
        }else if(userInput > missingNumber){
            output.innerHTML = 'Your guess is too high!';

        }
        //if the input is equal to the missingNumber then the User is a Winner
        if(userInput == missingNumber){
            output.innerHTML = "You're a Winner!";
        }
    }

    //this function runs when the user clicks the button 'guess'
    function numTries(){
       if(userInput > maxTries){
           btn.removeEventListener('click', onClick);
           btn.innerHTML = 'Game Over!';
           //output.innerHTML = "You guessed too many times, Game Over!";
       }else if(userInput != maxTries){
           output.innerHTML = "Try again!";
       }

    }

    function validInput(){
        //this sets the value for the userInput
        userInput = input.value;
        console.log('input:', userInput);

        //if the user doesn't type in a number user is prompted for a number
        if(isNaN(userInput)){
            output.innerHTML = 'You have not entered a number! Please enter a number between 1-10';
        }
        //if the input is blank, user is prompted to input a number
        else if(userInput == ''){
            output.innerHTML = 'You need to enter a number!';

        //else the number is inputted to reflect that it is lower than the randomly generated number
        }else if(userInput < 1 || userInput > 10){
            output.innerHTML = 'Pick a number between 1 - 10 ';
        }else{
            //this checks the input from the user that the right parameters were entered
            checkInput();
        }
    }

    //this will run the onClick function for the button
    function onClick(event){
        console.log('click');
        numTries();

        validInput();


    }
//    function changeText(event){
//        console.log('Game Over!');
//        btn.innerHTML = 'Game Over!';
//    }


})();