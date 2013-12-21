/*
 Name: Jennifer L Brown
 Date: 3 December 2013
 Class & Section:  PWA1-####
 Comments: "Final Practical"
 */

(function(){

    //variable information created for the Button to be clicked
    var nextBtn = document.getElementById("info_btn");
    nextBtn = addEventListener('click', onClick);

    //Student Information

    var people = [];

    var student1 = new Student({
       name: 'Ice Freeze',
       address:{street: '123 Cold Ave', city: 'Frosty', state: 'North Pole'},
       GPA:[2.7, 4.0, 3.75],
       date: new Date().toDateString()

    });


    var student2 = new Student({
       name:'Rusty Reindeer',
       address:{street: '123 Frosty Street', city: 'Frozen', state: 'South Pole'},
       GPA:[3.4, 4.0, 3.25],
       date: new Date().toDateString()

    });




    console.log(student1, student2);

    console.log('*********** Original Student List ************');

    console.log('Name: ' + student1.name);
    console.log('Address: ' + student1.address.street + ' ' + student1.address.city + ', ' + student1.address.state);
    console.log('GPA: ', student1.GPA);
    console.log('Date: ', student1.date);

    console.log('Name: ', student2.name);
    console.log('Address: ', student2.address.street + ' ' + student2.address.city + ', ' + student2.address.state);
    console.log('GPA: ', student2.GPA);
    console.log('Date: ', student2.date);


    //addData function adds the extra student onto the end of the above array
    function addData(){
        var student3 = new Student({
            name: 'Santa Claus',
            address: {street: '123 Big Dreams Place', city: 'Rudolph', state: 'North Pole'},
            GPA: [4.0, 3.75, 4.0],
            date: new Date().toDateString()
        });

        console.log(student3);
        people.push(student1, student2, student3);
        console.log(people);
    }



    addData();



    function displayData(){

        document.getElementById('name').innerHTML = 'Name: ' + people[0]['name'];
        document.getElementById('address').innerHTML = 'Address: ' + people[0]['street'] + ' ' + people[0]['city'] + ' ' + people[0]['state'];
        document.getElementById('gpa').innerHTML = 'GPA: ' + people[0]['GPA'];
        document.getElementById('date').innerHTML = 'Date: ' + people[0]['date'];
        document.getElementById('gpaavg').innerHTML = 'Average GPA: ' + people[0][average()];

        average();

        //code that will advance the students by one upon click
        if(people.length === 0){
            //advances the student by one upon clicking the nextBtn
            people++;

            //if you have come to the last student, nextBtn is disabled and reflects 'DONE!!!' inside the button
        }else if(people.length < 1){

            document.getElementById("info_btn").innerHTML = 'Done!!!';
        }


    }






    //Upon click Display next student
    function onClick(event){
        console.log('click');

        displayData();

    }









})();  // end wrapper