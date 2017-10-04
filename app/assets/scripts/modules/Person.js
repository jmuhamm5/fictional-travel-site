class Person {

    constructor(fullName, favColor) {
      this.name = fullName;
      this.favoriteColor = favColor;
    }

    greet() {
      console.log("Hi there, my name is "+this.name+" and my favorite color is "+this.favoriteColor+".");
    }
}

export default Person;


//module.exports = Person;

// console.log("Hello from Person.js");
//
// exports.exampleProperty = "Super magical example value";
// exports.exampleFunction = function() {
//   alert("This is an example.");
// }
