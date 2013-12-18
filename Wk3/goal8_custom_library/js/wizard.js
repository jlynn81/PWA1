// Wizard Class File
// Keep the constructor small- Use the prototype

var Wizard = function(options){

    //obstract the word new

    return new Wizard.prototype.init (options);//creates a new instance of the init function
                //init is the new constructor of the class




};

Wizard.prototype = {

    init: function (options){
        this.name = options.name;
        this.power = options.power;
        this.strength = options.strength;
    },

    location: 'Skyrim',
    hello: function (){},

    die: function () {
        console.log('I died, ' + this.name);
    }


};

Wizard.prototype.init.prototype = Wizard.prototype;





