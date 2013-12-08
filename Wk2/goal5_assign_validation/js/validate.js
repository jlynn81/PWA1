/*
 Name: Jennifer L Brown
 Date: 7 December 2013
 Assignment: Goal5: Form Validation

     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){

    myform.onsubmit = function(e){

        var userName = document.getElementById('f_username');

        var email = document.getElementById('f_email');

        var phNum = document.getElementById('f_phone');

        var ssn = document.getElementById('f_ssn');

        var passWord = document.getElementById('f_password');




        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField('myform');  //id = is the form input field ID

        e.preventDefault();
        return false;
    };


    var validateField = function(label){
    //You will need to create an else-if statement for each input field id.
    // The format will be similar to the IF statement.

        if (HTMLLabelElement.name === 'f_username'){
            var pattern = '/A-Za-z';



        }else if(inputName.name === 'f_email'){
            pattern = '^[w.-]+@[\w.-]+\.[A-Za-z]{2,6}$';

        }else if(inputName.name === 'f_phone'){
            pattern = '';

        }else if(inputName.name === 'f_ssn'){
            pattern = '';

        }else if(inputName.name === 'f_password'){
            pattern = '';

        }

        var pass = 'the RegEx .test statement is needed here';
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



