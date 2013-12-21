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



    people.push(new Student({
        name: 'Ice Freeze',
        address:{street: '123 Cold Ave', city: 'Frosty', state: 'North Pole'},
        GPA:[2.7, 4.0, 3.75],
        date: new Date().toDateString()

    }));

    people.push(new Student({
        name:'Rusty Reindeer',
        address:{street: '123 Frosty Street', city: 'Frozen', state: 'South Pole'},
        GPA:[3.4, 4.0, 3.25],
        date: new Date().toDateString()

    }));



    //Upon click Display next student
    function onClick(event){
        console.log('click');

        displayData();

    }

    //console.log(student1, student2);

    console.log('*********** Original Student List ************');

    console.log('Name: ' + people[0].name);
    console.log('Address: ' + people[0].address.street + ' ' + people[0].address.city + ', ' + people[0].address.state);
    console.log('GPA: ', people[0].GPA);
    console.log('Date: ', people[0].date);

    console.log('Name: ', people[1].name);
    console.log('Address: ', people[1].address.street + ' ' + people[1].address.city + ', ' + people[1].address.state);
    console.log('GPA: ', people[1].GPA);
    console.log('Date: ', people[1].date);


    //addData function adds the extra student onto the end of the above array
    function addData(){

        people.push = new Student({
            name: 'Santa Claus',
            address: {street: '123 Big Dreams Place', city: 'Rudolph', state: 'North Pole'},
            GPA: [4.0, 3.75, 4.0],
            date: new Date().toDateString()
        });

    }

    addData();

    function displayData(){
        var val = people.shift();
        people.push(val);


        document.getElementById('name').innerHTML = 'Name: ' + people.students[0]['name'];
        document.getElementById('address').innerHTML = 'Address: ' + people[0]['street'] + ' ' + people[0]['city'] + ' ' + people[0]['state'];
        document.getElementById('gpa').innerHTML = 'GPA: ' + people[0]['GPA'];
        document.getElementById('date').innerHTML = 'Date: ' + people[0]['date'];
        document.getElementById('gpaavg').innerHTML = 'Average GPA: ' + people[0]['gpa'];



        //code that will advance the students by one upon click
        if(people.students.length === 0){
            //advances the student by one upon clicking the nextBtn
            people.students++;

            //if you have come to the last student, nextBtn is disabled and reflects 'DONE!!!' inside the button
        }else if(people.students.length < 1){

            document.getElementById("info_btn").innerHTML = 'Done!!!';
        }


    }

    Array.prototype.average = function(){
        var av = 0;
        var cnt = 0;
        var len = this.length;
        for (var i = 0; i < len; i++) {
            var e = +this[i];
            if(!e && this[i] !== 0 && this[i] !== '0') e--;
            if (this[i] == e) {av += e; cnt++;}
        }
        return av/cnt;

    };

    var ary = people[0].GPA;
    var avg = ary.average();
    console.log(avg);

    console.log('*********** Additional Student List ************');

    //student 1 information
    console.log('Name: ', people[0].name);
    console.log('Address: ', people[0].address.street + ' ' + people[0].address.city + ', ' + people[0].address.state);
    console.log('GPA: ', people[0].GPA);
    console.log('Date: ', date);

    //student 2 information
    console.log('Name: ', people[1].name);
    console.log('Address: ', people[1].address.street + ' ' + people[1].address.city + ', ' + people[1].address.state);
    console.log('GPA: ', people[1].GPA);
    console.log('Date: ', date);

    //Added Students information
    console.log('Name: ', people[2].name);
    console.log('Address: ', people[2].address.street + ' ' + people[2].address.city + ', ' + people[2].address.state);
    console.log('GPA: ', people[2].GPA);
    console.log('Date: ', date);




})();  // end wrapper