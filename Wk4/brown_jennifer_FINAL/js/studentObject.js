/*
 Name: Jennifer L Brown
 Date: 3 December 2013
 Class & Section:  PWA1-####
 Comments: "Final Practical"
 */

var Student = function(name, street, city, state, GPA){

    //Student Information
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
    this.GPA = [];

    this.date = new Date();

    return Student.prototype;

};

Student.prototype = {

    getStudent: function(){
        return this.name + ' ' + this.street + ' ' + this.city + ' ' + this.state + ' ' + this.GPA + ' ' + this.date;


    }


};







