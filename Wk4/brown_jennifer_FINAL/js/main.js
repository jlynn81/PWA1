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

    date = new Date();


    //Student Information

   var student1 = new Student({
       name: 'Ice Freeze',
       address:{street: '123 Cold Ave', city: 'Frosty', state: 'North Pole'},
       GPA:[2.7, 4.0, 3.75]

   });

   var student2 = new Student({
       name:'Rusty Reindeer',
       address:{street: '123 Frosty Street', city: 'Frozen', state: 'South Pole'},
       GPA:[3.4, 4.0, 3.25]

   });

    //console.log(student1, student2);


    //addData function adds the extra student onto the end of the above array
    function addData(){
        var student3 = new Student({
            name: 'Santa Claus',
            address: {street: '123 Big Dreams Place', city: 'Rudolph', state: 'North Pole'},
            GPA: [4.0, 3.75, 4.0]
        });




    }

    function displayData(){

        document.getElementById('name').innerHTML = 'Name: ' + people.students[0]['name'];
        document.getElementById('address').innerHTML = 'Address: ' + people.students[0].address['street'] + ' ' + people.students[0].address['city'] + ' ' + people.students[0].address['state'];
        document.getElementById('gpa').innerHTML = 'GPA: ' + people.students[0]['GPA'];
        document.getElementById('date').innerHTML = 'Date: ' + date.toDateString();
        document.getElementById('gpaavg').innerHTML = 'Average GPA: ' + gradeAvg(people);

        //code that will advance the students by one upon click
        if(Students.length === 0){
            //advances the student by one upon clicking the nextBtn
            Students.students++;

            //if you have come to the last student, nextBtn is disabled and reflects 'DONE!!!' inside the button
        }else if(people.students.length < 1){

            document.getElementById("info_btn").innerHTML = 'Done!!!';
        }

        addData();

        console.log('*********** Original Student List ************');

        console.log('Name: ' + student1.name);
        console.log('Address: ' + student1.address.street + ' ' + student1.address.city + ', ' + student1.address.state);

        console.log('GPA: ', student1.GPA);
        console.log('Date: ', date.getDate());


        console.log('Name: ', student2.name);
        console.log('Address: ', student2.address.street + ' ' + student2.address.city + ', ' + student2.address.state);
        console.log('GPA: ', student2.GPA);
        console.log('Date: ', date.getDate());



    }




    //Upon click Display next student
    function onClick(event){
        console.log('click');

        displayData();

    }

    console.log('************ Students with the added Student *************');
        //student 1 information
        console.log('Name: ', student1.name);
        console.log('Address: ', student1.address.street + ' ' + student1.address.city + ', ' + student1.address.state);
        console.log('GPA: ', gradeAvg(Student));
        console.log('Date: ', date.toDateString());

        //student 2 information
        console.log('Name: ', student2.name);
        console.log('Address: ', student2.address.street + ' ' + student2.address.city + ', ' + student2.address.state);
        console.log('GPA: ', student2.GPA);
        console.log('Date: ', date.toDateString());

        //Added Students information
        console.log('Name: ', student3.name);
        console.log('Address: ', people.students[2].address.street + ' ' + people.students[2].address.city + ', ' + people.students[2].address.state);
        console.log('GPA: ', people.students[2].GPA);
        console.log('Date: ', date.toDateString());







})();  // end wrapper