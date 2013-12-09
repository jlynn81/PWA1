/*
 Name: Jennifer L Brown
 Date: 7 December 2013
 Assignment: Goal5: Form Validation

     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){

    //variables set up for each input field
    var userName = document.forms ['myform'] ['f_username'].value;
    var email = document.forms ['myform'] ['f_email'].value;
        var atpos = email.indexOf('@');
        var dotpos = email.lastIndexOf('.');
    var phNum = document.forms ['myform'] ['f_phone'].value;
    var ssn = document.forms ['myform'] ['f_ssn'].value;
    var passWord = document.forms ['myform'] ['f_password'].value;



    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField(userName);  //id = is the form input field ID
        validateField(email);
        validateField(phNum);
        validateField(ssn);
        validateField(passWord);

        e.preventDefault();
        return false;
    };


    var validateField = function(user){
    //You will need to create an else-if statement for each input field id.
    // The format will be similar to the IF statement.

        if (user === 'f_username'){
            var pattern = /[A-Z]$+[a-z]$/;

        }else if(user === 'f_email'){
            email = /(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})/;

        }else if(user === 'f_phone'){
            pattern = '';

        }else if(user === 'f_ssn'){
            pattern = '';

        }else if(user === 'f_password'){
            pattern = '';

        }

        var pass = 'the RegEx .test statement is needed here';
        var errorMsg = user.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || user.value.length < 2){
            errorMsg.style.display='block';
            user.style.backgroundColor = 'red';
        } else if (pass && user.value.length > 5){
            errorMsg.style.display='none';
            user.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            user.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



