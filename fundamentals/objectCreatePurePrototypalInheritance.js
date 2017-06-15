// polyfill adds a feature that the engine may lack
//Object.create is a newer feature so some browsers may not have it
if (!Object.create) { //if not in engine
  Object.create = function (o) { //add it to global Object
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {} //creates empty function
    F.prototype = o; //points the obj you passed in to func prototype
    return new F(); //returns new func
  };
}

//make obj
var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}
//create new obj from that obj pointing to prototype and then overwrite values
  //with your values
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);
