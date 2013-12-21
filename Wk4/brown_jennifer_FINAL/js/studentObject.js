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
    this.average = options.average;

};




Student.prototype = {

    students: [],


    getStudent: function(people){
        this.students.push(people);
    }



};

Student.prototype.getStudent.prototype = Student.prototype;









