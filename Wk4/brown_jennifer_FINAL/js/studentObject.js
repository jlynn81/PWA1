/*
 Name: Jennifer L Brown
 Date: 3 December 2013
 Class & Section:  PWA1-####
 Comments: "Final Practical"
 */

var Student = function(data){

    //Student Information
    this.name = data.name;
    this.GPA = data.GPA;
    this.date = data.date;

};

Student.prototype = {

    students: [],


    getStudent: function(data){


        this.street = data.street;
        this.city = data.city;
        this.state = data.state;

    },

    averageGPA: function () {

    }


};

Student.prototype.getStudent.prototype = Student.prototype;







