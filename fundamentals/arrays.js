var arr = [
    1,
    false,
    {
        name: 'Tony',
        address: '111 Main St.'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "hello"
];

var nums = [4, 8, 9, 6, 11, 7];
console.log(nums);

console.log(arr);
arr[3](arr[2].name);
console.log(arr[4]);
arr.shift(); //pulls out 1st element
arr.pop(); //pulls last element out

arr.forEach(function(value, index){ //array iteration, doesn't work on old browsers
  console.log(value, index); // comma concatenates w space between
});
