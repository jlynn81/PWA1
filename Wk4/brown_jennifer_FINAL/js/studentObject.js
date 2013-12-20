/*
 Name: Jennifer L Brown
 Date: 3 December 2013
 Class & Section:  PWA1-####
 Comments: "Final Practical"
 */

var Student = function(options){

    //Student Information
    this.name = options.name;
    this.address = options.address;
    this.GPA = options.GPA;
    this.date = options.date;

};

Student.prototype = {

    students: [],


    getStudent: function(people){

       this.students.push(people);


    },

    averageGPA: function (obj) {

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


    }


};

Student.prototype.getStudent.prototype = Student.prototype;







