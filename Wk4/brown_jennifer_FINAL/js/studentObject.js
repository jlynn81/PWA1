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

    var ary = Student.GPA;
    var avg = Math.floor(ary.average());
    console.log(ary.average);

};


Student.prototype = {

    students: [],


    getStudent: function(people){
        this.students.push(people);
    },

    average: function(){
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


Student.prototype.getStudent.prototype = Student.prototype;










