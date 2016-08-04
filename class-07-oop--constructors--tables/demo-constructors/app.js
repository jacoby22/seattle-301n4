// Demo for objects to constructors

// var john = {
//   course: '201d7',
//   firstName: 'John',
//   lastInitial: 'S',
//   faveNumber: 2,
//   isCodeNinja: true,
//   intro: function() {
//     console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
//   }
// };

// I would need 143 lines of code to model our class this way
// (13 students * 11 lines each)

// What if... I had a function to make these many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects?

// Something like this would then make Jeff:

// Maybe I could take the desired object literal, and adapt it into a function that would make it?

// That's a constructor function. Let's make one right here.

// var john = {

var mahClass = [];

function Student(firstName, lastInitial, faveNumber){
  this.course = '201d7';
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.faveNumber = faveNumber;
  this.isCodeNinja = true;
  this.intro = function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  };
  console.log(this);
  mahClass.push(this);
  alert('NEW STUDENT HAS BEEN CREATED AND BEEN PUSHED INTO THE ARRAY mahClass');
};

Student.someNewProperty = 'WOOOOO';

var john = new Student('John', 'S', 2);
var uma = new Student('Uma', 'B', 24);
var jennifer = new Student('Jennifer', 'L', 16);
// then 10 more...
