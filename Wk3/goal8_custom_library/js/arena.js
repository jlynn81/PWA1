// Arena Class


var Arena = function(options){
    this.name = options.name;
    this.location = options.location;


};

Arena.prototype = {

    fighters: [],

    register: function (fighter){
        this.fighters.push(fighter);
    },

    fight: function (){

        var f1 = Math.floor(Math.random() * this.fighters.length);

        var f2 = Math.floor(Math.random() * this.fighters.length);

        while(f1 === f2){
            f2 = Math.floor(Math.random() * this.fighters.length);
        }

        var fighter1 = this.fighters[f1];
        var fighter2 = this.fighters[f2];

        var loser = fighter1.strength > fighter2.strength ? fighter2:fighter2

        loser.die();

    }
};


