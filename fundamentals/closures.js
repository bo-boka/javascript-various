//function that returns a function
function greet(whattosay) {
   return function(name) {
       console.log(whattosay + ' ' + name);
   }
}
greet("Hi")("Sarah");
//or
var sayHi = greet('Hi');
sayHi('Tony');
//the 'whattosay' var is still recognized by the inner function even though
//its func has already been executed and popped off the execution stack
  //because the engine still keeps variables in memmory in the scope chain
  //accessed as a reference to outer variables (free variables)
  //the execution context has 'closed in' its outer variables

//Closures, cont.
//output of first 'buildFunctions' is three '3's because when the log func is
  //pushed into the array during the loop, it only pushes the function and not
  //the current value of 'i' - 'i' value is already 3 by time next func is called
function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
      //let j = i; //only if newer js version w 'let', otherwise see below
        arr.push(
            function() {
                console.log(i);
            }
        )
    }
    return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

//by pushing an IIFE to array and passing in 'i', a new execution context is
  //created that holds that value in it's mem
function buildFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}

var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();

//js built in set function uses closures
function sayHiLater() {
    var greeting = 'Hi!';
    setTimeout(function() { //
        console.log(greeting);
    }, 3000);
}

sayHiLater();

// jQuery uses function expressions and first-class functions!
//$("button").click(function() {
//
//});
