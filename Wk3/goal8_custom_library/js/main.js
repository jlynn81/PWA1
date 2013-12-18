/* 
	Arena Battle!!!
	Author: JavaScript Development Team
	PWA1: Goal 8
*/

/*
	=====================================================
	Javascript pattern: self-executing function
	syntax: (function(){})();
	
	Create a private scope for the application's main code
*/

(function(){

    /* Creating wizards from the Wizard Factory
    ------------------------------------------------------------------------------------ */

    var gandolf = Wizard({
        name: 'Gandolf the Grey',
        power: 'fire',
        strength: 20
    });

    var dementor = Wizard ({
        name: 'Dementor',
        power: 'ice',
        strength: 15
    });

    var merlin = Wizard({
        name: 'Merlin',
        power: 'earth',
        strength: 30
    });

    /* Create an Arena to fight in!
    ------------------------------------------------------------------------------------ */
	var thunderDome = new Arena ( {
        name: 'The Thunder Dome',
        location: 'Skyrim'
    });

    thunderDome.register(gandolf);
    thunderDome.register(dementor);
    thunderDome.register(merlin);

    //create a random fight



})();



