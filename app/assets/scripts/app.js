import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");





/*

var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes.");
  }
}

var john = new Person("John Doe", "blue"); // New Object declared
john.greet();

var jane = new Adult("Jane Smith", "orange"); // New Object declared
jane.greet();
jane.payTaxes();

*/






/*Creating Multiple Objects for Sophistication

var john = new Person("John Doe", "blue"); // New Object declared
john.greet();

var jane = new Person("Jane Smith", "green"); // New Object declared
jane.greet();

*/


/* Alternative
function person(name, favColor) {
    console.log("Hello, my name is "+ name + " and my favorite color is "+ favColor + ".");
}
*/


// Object Variables
/*

var john = {
  name: "John Dillinger",
  favoriteColor: "blue",
  greet: function() {
    console.log("Hello, my name is "+ john.name + " and my favorite color is " + john.favoriteColor);
  }
}

john.greet();

*/


/* Alternative Way
var johnName = "John Doe";
var johnFavColor = "red";

person(johnName, johnFavColor);
*/

/* Alternative Function Calling
person(john.name, john.favoriteColor); Object calling
person("Jane Smith", "green");
*/
