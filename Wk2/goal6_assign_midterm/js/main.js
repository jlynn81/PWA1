/*
 Name: Jennifer L Brown
 Date: 3 December 2013
 Class & Section:  PWA1-####
 Comments: "Mid Terms for PWA-1"
 */

(function(){

    //this selects the output information from the html
    var output = document.getElementById('output');

    //variable information created for the Button to be clicked
    var nextBtn = document.getElementById("info_btn");
    nextBtn = addEventListener('click', onClick);

    //Student Information
    var people = {
        students: [ {name: 'Jane Doe', address: {street: '123 Cold Ave', city: 'Frosty', state: 'North Pole'}, GPA:[2.7, 4.0, 3.75]},
                    {name: 'John Doe', address: {street: '123 Frosty Street', city: 'Frozen', state: 'South Pole'}, GPA:[3.4, 2.9, 4.0, 3.25]}
                  ]
    };

    displayData();

    //addData function adds the extra student onto the end of the above array
    function addData(){
        people.students.push('Santa Claus', '123 Big Dreams Place', 'Rudolph', 'North Pole', [4.0, 3.75, 4.0]);
    }

    //function created for the Next Button

    function displayData(){

        //this will put the information from the object array into the form
        people.students.name = document.getElementById('name');
        people.innerHTML = ('Name: ' + people.students.name);
        people.students.address = document.getElementById('address');
        people.students.gpa = document.getElementById('gpa');



        for(var i = 0; i = people.students.length; i++){
            document.write(people[i]);

        }


        if(people.students > 1){
            //click next for more student data
            nextBtn = addEventListener('click', onClick);
        }else if(people.students < 1){
            nextBtn = document.getElementById('info_btn').disabled;
            nextBtn.innerHTML = ('DONE!!!');
        }

       // average(obj);


    }

    //this is the loop for the GPA Average calculation
//    var obj;
//    function average(obj){
//        var grade = 0;
//        var total = 0;
//
//        for (var i= 0, j = obj.students.length; i < j; i++){
//            //grade will increase by 1 when ran
//            grade++;
//            //adds all of the GPA's per student
//            total = total + people.students[i]['GPA'];
//        }
//        //this will give the average for each student
//        return total/grade;
//    }



    function onClick(event){
        console.log('click');
    }

    console.log('*********** Original Student List ************');

    console.log('Name: ', people.students[0].name);
    console.log('Address: ', people.students[0].address.street + ' ' + people.students[0].address.city + ', ' + people.students[0].address.state);
    console.log('GPA: ', people.students[0].GPA);
    console.log('Date: ' );
    console.log('Average GPA: ');

    console.log()



    console.log('************ Students with the added Student *************');

    //Upon click Display next student
    //if you have come to the last student, remove the event for Btn and change text to Done







})();  // end wrapper