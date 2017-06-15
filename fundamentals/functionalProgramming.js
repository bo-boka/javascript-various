//encapsulates tasks of a function and passes them into a func as another func
function mapForEach(arr, fn) {//passes in array and function
    var newArr = [];
    for (var i=0; i < arr.length; i++) { //iteration function
        newArr.push(
            fn(arr[i]) //calls the special task function that was passed in
        )
    };
    return newArr;
}

var arr1 = [1,2,3];
var arr2 = mapForEach(arr1, function(item) {//passed func multiplies arr by 2
   return item * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {//passed func checks truthy/falsey
   return item > 2;
});
console.log(arr3);
//ex with binding
//if wanted to pass in another arg but func in loop only takes one param
  //create another func that has another param
var checkPastLimit = function(limiter, item) {//make sure your param is 1st
    return item > limiter;
}
//bind it to func being passed in with bind's preset param feature
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

//but if we didn't want to call the bind method every time, we could create
  //another func that takes only our chosen param and returns the binded func
var checkPastLimitSimplified = function(limiter) {
    return function(lim, item) {//this func not getting executed, just returning
        return item > lim;    //the func obj to be binded
    }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);

//using underscore library ('_' is the object)
var arr6 = _.map(arr1, function(item) { return item * 3 });
console.log(arr6); //built in underscore func for code we just wrote

var arr7 = _.filter([2,3,4,5,6,7], function(item) { return item % 2 === 0; });
console.log(arr7);
