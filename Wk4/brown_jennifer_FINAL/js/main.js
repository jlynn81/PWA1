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

    var people = [];
    //Student Information

    var student = new Student({
        name: 'Ice Freeze',
        address:{street: '123 Cold Ave', city: 'Frosty', state: 'North Pole'},
        GPA:[2.7, 4.0, 3.75],
        date: new Date().toDateString()

    });

    var student1 = new Student({
        name:'Rusty Reindeer',
        address:{street: '123 Frosty Street', city: 'Frozen', state: 'South Pole'},
        GPA:[3.4, 4.0, 3.25],
        date: new Date().toDateString()

    });

    var student2 = new Student({
        name: 'Santa Claus',
        address: {street: '123 Big Dreams Place', city: 'Rudolph', state: 'North Pole'},
        GPA: [4.0, 3.75, 4.0],
        date: new Date().toDateString()
    });

    people.push(student, student1, student2);



    //Upon click Display next student
    function onClick(event){
        console.log('click');

        displayData();

        event.preventDefault();
        return false;

    }


    //console.log(student1, student2);

    console.log('*********** Original Student List ************');

    console.log('Name: ' + student.name);
    console.log('Address: ' + student.address.street + ' ' + student.address.city + ', ' + student.address.state);
    console.log('GPA: ', student.GPA);
    console.log('Date: ', student.date);

    console.log('Name: ', student1.name);
    console.log('Address: ', student1.address.street + ' ' + student1.address.city + ', ' + student1.address.state);
    console.log('GPA: ', student1.GPA);
    console.log('Date: ', student1.date);

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

    var ary = people[0].GPA || people[1].GPA || people[2].GPA;
    var avg = ary.average();

    //console.log(avg);

    displayData();


    function displayData(){
        var val = people.shift();
        people.push(val);
        //console.log(val);


        document.getElementById('name').innerHTML = 'Name: ' + people[0].name;
        document.getElementById('address').innerHTML = 'Address: ' + people[0].address['street'] + ' ' + people[0].address['city'] + ' ' + people[0].address['state'];
        document.getElementById('gpa').innerHTML = 'GPA: ' + people[0]['GPA'];
        document.getElementById('date').innerHTML = 'Date: ' + people[0].date;
        document.getElementById('gpaavg').innerHTML = 'Average GPA: ' + Math.floor(avg);

        //code that will advance the students by one upon click
        if(people.length === 0){
            //advances the student by one upon clicking the nextBtn
            people++;

            //if you have come to the last student, nextBtn is disabled and reflects 'DONE!!!' inside the button
        }else if(people.length == 0){

            document.getElementById("info_btn").innerHTML = 'Done!!!';
            nextBtn = removeEventListener('click', onClick);
        }


    }


    console.log('*********** Additional Student List ************');

    //student 1 information
    console.log('Name: ', people[0].name);
    console.log('Address: ', people[0].address.street + ' ' + people[0].address.city + ', ' + people[0].address.state);
    console.log('GPA: ', people[0].GPA);
    console.log('Date: ', people[0].date);

    //student 2 information
    console.log('Name: ', people[1].name);
    console.log('Address: ', people[1].address.street + ' ' + people[1].address.city + ', ' + people[1].address.state);
    console.log('GPA: ', people[1].GPA);
    console.log('Date: ', people[1].date);

    //Added Students information
    console.log('Name: ', people[2].name);
    console.log('Address: ', people[2].address.street + ' ' + people[2].address.city + ', ' + people[2].address.state);
    console.log('GPA: ', people[2].GPA);
    console.log('Date: ',people[2].date);




})();  // end wrapper