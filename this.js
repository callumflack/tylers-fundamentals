/*

'this' keyword in JS:
- implicit binding
- explicit binding
- New binding
- window binding

Where is this function invoked? (not defined, invoked)
Is there anything left of the dot? (implicit)

*/

// Implicit binding (80%)
// Left of the dot at call time
// =====================================================

// 1:
var me = {
    name: 'Tyler',
    age: 25,
    sayName: function(){
        console.log(this.name);
    }
}

me.sayName();


// 2:
var sayNameMixin = function(obj){
    obj.sayName = function(){
        console.log(this.name);
    }
};

var me = {
    name: 'Tyler',
    age: 25
};

var you = {
    name: 'Joey',
    age: 21
};

sayNameMixin(me);
sayNameMixin(you);

// call a method on the object:
me.sayName(); // "Tyler"
you.sayName(); // "Joey"


// 3:
var Person = function(name, age){
    return {
        name: name,
        age: age,
        sayName: function(){
            console.log(this.name);
        },
        mother: {
            name: 'Stacey',
            sayName: function(){
                console.log(this.name);
            }
        }
    };
};

var jim = Person('Jim', 42);
jim.sayName(); // 'Jim'
jim.mother.sayName(); // 'Stacey'


// Explicit binding
// Call, apply & bind methods
// =====================================================

// 1:
var sayName = function(){
    console.log('My name is' + this.name);
};

var stacey = {
    name: 'Stacey',
    age: 34
};

stacey.sayName(); // uh-uh

sayName.call(stacey); // explicitly stating the keyword


// 2:
var sayName = function(lang1, lang2, lang3){
    console.log('My name is ' + this.name + 'and I know ' + lang1 + lang2 + lang3);
};

var languages = ['JavaScript', 'Ruby', 'Python'];

// first argument is 'this, then pass along the remaining arguments
sayName.call(stacey, languages[0], languages[1], languages[2]);


// 3: .apply is same as .call but pass in as an array of arguments
sayName.apply(stacey, languages);


// 4: .bind same as .call but returns a new function rather than invoking the original function
var newFn = sayName.bind(stacey, languages[0], languages[1], languages[2]);
console.log('HERE');
newFn();


// New & window binding
// =====================================================

// new binding
var Animal = function(color, name, type){
  // JS creates a new object for us
  // this = {}
  this.color = color;
  this.name = name;
  this.type = type;
};

var zebra = new Animal('black and white', 'Zorro', 'Zebra');

console.log(zebra);


// window binding
var sayAge = function(){
  // strict mode will make errors explicit
  // 'use strict';
  console.log(this.age);
};

var me = {
  age: 25
};

// undefined cause nothing left of the dot, no call/apply/bind
// and not a new object, so it defaults to the window
sayAge();
window.age = 35;
sayAge(); // 35
