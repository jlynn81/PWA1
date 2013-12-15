/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

(function(){

    var jobs = ['Pulling Sleigh', 'Delivering Presents', 'Bringing Joy', 'Helping Santa'];

    var actions = ['Working', 'Sleeping', 'Eating', 'Playing'];

    var Person = function(name, row){
        this.name = name;
        this.row = row;

        this.job = jobs.splice(Math.floor(Math.random() * jobs.length), 1)[0];
        console.log(this.job);
        document.getElementById('r1c2').innerHTML = this.job;
        document.getElementById('r2c2').innerHTML = this.job;
        document.getElementById('r3c2').innerHTML = this.job;

        this.action = actions.splice(Math.floor(Math.random() * actions.length), 1)[0];
        console.log(this.action);
        document.getElementById('r1c3').innerHTML = this.action;
        document.getElementById('r2c3').innerHTML = this.action;
        document.getElementById('r3c3').innerHTML = this.action;
    };



    Person.prototype.update = function(){
        //console.log(this.name, "Hello!: ");
        //console.log(this.row);

    };


window.Person = Person;

})();  // end wrapper
