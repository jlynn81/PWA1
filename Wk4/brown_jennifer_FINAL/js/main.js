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

    var d = new Date();

    var students = [];

    //Student Information
    var student1 = new Student('Rosey Elf', '123 Cold Ave', 'Frosty', 'North Pole', [2.7, 4.0, 3.75]);
    student1.getStudent();

    var student2 = new Student('Icey Cold', '123 Frosty Street', 'Frozen', 'South Pole', [3.4, 4.0, 3.25]);
    student2.getStudent();

    console.log('*********** Original Student List ************');

    console.log('Name: ' + student1.name);
    console.log('Address: ' + student1.street + ' ' + student1.city + ', ' + student1.state);

    console.log('GPA: ', student1.GPA);
    console.log('Date: ', student1.toDateString());


    console.log('Name: ', student3.name);
    console.log('Address: ', people[key][1].address.street + ' ' + people[key][1].address.city + ', ' + people[key][1].address.state);
    console.log('GPA: ', people[key][1].GPA);
    console.log('Date: ', d.toDateString());


    addData();


    //addData function adds the extra student onto the end of the above array
    function addData(){
        var student3 = new Student('Santa Claus', '123 Big Dreams Place', 'Rudolph', 'North Pole', [4.0, 3.75, 4.0]);
        student3.getStudent();



    }

    function displayData(){

        document.getElementById('name').innerHTML = 'Name: ' + people.students[0]['name'];
        document.getElementById('address').innerHTML = 'Address: ' + people.students[0].address['street'] + ' ' + people.students[0].address['city'] + ' ' + people.students[0].address['state'];
        document.getElementById('gpa').innerHTML = 'GPA: ' + people.students[0]['GPA'];
        document.getElementById('date').innerHTML = 'Date: ' + d.toDateString();
        document.getElementById('gpaavg').innerHTML = 'Average GPA: ' + gradeAvg(people);

        //code that will advance the students by one upon click
        if(people.students.length === 0){
            //advances the student by one upon clicking the nextBtn
            people.students++;

            //if you have come to the last student, nextBtn is disabled and reflects 'DONE!!!' inside the button
        }else if(people.students.length < 1){

            document.getElementById("info_btn").innerHTML = 'Done!!!';
        }

    }

    //GPA function for the loop to calculate the average
    var gradeAvg = function (obj){
        var grade = 0;
        var total = 0;

        //loops through the GPA values for the average calculation
        for (var i = 0, j = obj.students.length; i < j; i++){
            //grade will increase by 1 when ran to go through all of the array elements
            grade++;
            //adds all of the GPA's per student
            total = total + obj.students[i]['GPA'];
        }
        //this will give the average for each student
        return total/grade;

    };

    //Upon click Display next student
    function onClick(event){
        console.log('click');

        displayData();

    }




    console.log('************ Students with the added Student *************');
        //student 1 information
        console.log('Name: ', people.students[0].name);
        console.log('Address: ', people.students[0].address.street + ' ' + people.students[0].address.city + ', ' + people.students[0].address.state);
        console.log('GPA: ', gradeAvg(people));
        console.log('Date: ', d.toDateString());

        //student 2 information
        console.log('Name: ', people.students[1].name);
        console.log('Address: ', people.students[1].address.street + ' ' + people.students[1].address.city + ', ' + people.students[1].address.state);
        console.log('GPA: ', people.students[1].GPA);
        console.log('Date: ', d.toDateString());

        //Added Students information
        console.log('Name: ', people.students[2].name);
        console.log('Address: ', people.students[2].address.street + ' ' + people.students[2].address.city + ', ' + people.students[2].address.state);
        console.log('GPA: ', people.students[2].GPA);
        console.log('Date: ', d.toDateString());







})();  // end wrapper