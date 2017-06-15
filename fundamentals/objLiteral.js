//object literal syntax
var Tony = {
    firstname: 'Tony',
    lastname: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Tony);

//passing obj in on the fly
greet({
    firstname: 'Mary',
    lastname: 'Doe'
});

// adding another property (an object)
Tony.address2 = {
    street: '333 Second St.'
}
