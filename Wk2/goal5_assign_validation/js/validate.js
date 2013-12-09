/*
 Name: Jennifer L Brown
 Date: 7 December 2013
 Assignment: Goal5: Form Validation

     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){

    //variables set up for each input field
    var userName = document.getElementById('f_username');
    var email = document.getElementById('f_email');


    var phNum = document.getElementById ('f_phone');
    var ssn = document.getElementById ('f_ssn');
    var passWord = document.getElementById('f_password');

    var subBtn = document.getElementById("f_submit");

     subBtn.addEventListener('click', onClick);

    function onClick(e){
        console.log('Hi');
        validate(userName);
        validate(email);
        validate(phNum);
        validate(ssn);
        validate(passWord);
        e.preventDefault();
    }

    function validate (user){
        var pattern;
        var pass;

        if (user == userName){
            pattern = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
            pass = pattern.test(user.value);
            console.log(user.value, pass);
        }else if(user == email){
            pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            pass = pattern.test(user.value);

        }else if(user == phNum){
            pattern = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
            pass = pattern.test(user.value);
        }else if(user == ssn){
            pattern = /^\d{3}-\d{2}-\d{4}$/;
            pass = pattern.test(user.value);
        }else if(user == passWord){
            pattern = /^[a-zA-Z]\w{3,14}$/;
            pass = pattern.test(user.value);
        }


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
        }

    }



})();  // end wrapper



