/*
	PWA1: Goal8: Simple Library App
*/

//Creates the self executing function
(function(){

    //Variable that stores All the anchor links in an array
    var anchor = document.querySelectorAll('a');

    //Variable that stores the returned value from a call to the Library
    var result = [anchor];

    //Console.log the results sent back from the library
    console.log(result);


    result = Library();


})();  // end wrapper