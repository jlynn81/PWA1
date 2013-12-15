/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

/* Student: Jennifer L Brown
    Date: 12 December 2013
    Assignment: Goal 7: Advanced Objects
 */

(function(){

    //Array with names
    var names = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


    var people = [];



    function displayNames(){

     //this is the loop for the People Array
        for (var i = 0; i < 3; i++){

            var p = names.splice(Math.floor(Math.random() * names.length), 1)[0]; //picks a number between 0-4 with random numbers
            console.log(p);

            var person = new Person(names[p], i); //each person has a name, place and row
            console.log(person);

            people.push(person); //this pushes the person instances into the array people

            document.getElementById('r2c1').innerHTML = p;
            document.getElementById('r3c1').innerHTML = names[0];
            document.getElementById('r1c1').innerHTML = names[1];

        }
        console.log(people);


    }

    displayNames();

   var populateHTML = function(){




   };

    populateHTML();


    this.action = setInterval(runUpdate, 1000/30 );

    function runUpdate(){
        people.forEach(function(e){
            e.update();
        })
    }




})();  // end wrapper