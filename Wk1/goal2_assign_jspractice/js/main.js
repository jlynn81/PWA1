/*
 Name: Jennifer L Brown
 Date: 1 December 2013
 Class & Section:  PWA1-####
 Comments: "Goal 2: JavaScript Practice"
 */

// scope wrapper (self executing function)
(function(){

console.log('--- 1. Create a function named avgNumbers ----')

    var avgNumbers = function (average){
        var num = [56, 25, 36];
        var sum = num[0] + num[1] + num[2];
        average = sum / 3;

        return average;

    };
    console.log('Average: ', avgNumbers());


console.log('--- 2. Create a function named fullName ---')


    var fullName = function (firstName, lastName){
        firstName, lastName = ["Jennifer", "Brown"];

        return firstName, lastName;
    };


    console.log('Full Name: ', fullName().join(" "));



console.log('--- 3. Create a function named wordCount ---')

    var wordCount = function(wdCtr){
        wdCtr = ["This", "is", "a", "crazy", "assignment"];

        return wdCtr;

    };

    //console.log("String: ", wd.join(" "));
    console.log("Word Count: ", wordCount().length);



console.log('--- 4. Create a function named charCount ---')


    var charCount = function(char){
        char = "This is frustrating!";

        return char;

    };

    console.log("Length of String Array Characters: ", charCount().length);


console.log('--- 5. Create a function named vowelsInWord ---')

    var vowelsInWord = function(word){
        var word = "Overwhelming";

        //if there are no vowels "No Vowels within word";
        //if there are vowels ("a", "e", "i", "o", "u") "num + "Vowels within word";

        return word;

    };

    console.log("Number of Vowels: ", vowelsInWord().length);

    vowelsInWord();


console.log('--- 6. Create a function named findNum ---')

    var value1 = [2, 5, 10, 9];
    var value2 = 1;

    var findNum = function(odd, boo){

        if(boo === 2){
            Result = ("$odd" & 1);
        }else{
            Result = (!("$even" & 1));
        };

        return Result;

    };

    var foundNum = findNum(value1, value2);

    console.log("Answer: ", foundNum);

    findNum();





})();