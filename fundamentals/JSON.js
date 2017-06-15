
//object literal syntax
var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}
//JSON synatx
// similar to object literal except property names must be wrapped in quotes
//can wrap them in quotes w obj literals but it's not optional w JSON
var person = {
    "name": "Sarah",
    "student": true
}

//to turn an obj literal into JSON
console.log(JSON.stringify(objectLiteral));

//to turn JSON into obj literal
var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log(jsonValue);
