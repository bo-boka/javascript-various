//literally type "use strict"; within global context or w/in function
//doesn't allow certain things and acts differently on different browsers
function logNewPerson() {
    "use strict";

    var person2;
    persom2 = {};
    console.log(persom2);
}

var person;
persom = {};
console.log(persom);
logNewPerson();
