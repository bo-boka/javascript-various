var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

for (var prop in john) {
    if (john.hasOwnProperty(prop)) { //only 'john' props, not person proto props
        console.log(prop + ': ' + john[prop]);
    }
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}

//gets all methods and properties from params after the 1st and puts them into
  //the first param
//used when you don't want to add them to the prototype chain
_.extend(john, jane, jim); //uses reflection (view underscore src code)
console.log(john);
