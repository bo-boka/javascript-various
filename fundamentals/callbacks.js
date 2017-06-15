//function that calls another function
function sayHiLater() {
    var greeting = 'Hi!';
    setTimeout(function() { //js built in setTimeout calls func in param
        console.log(greeting);   //after param time of 3000 ms
    }, 3000);
}

sayHiLater();

// jQuery uses function expressions and first-class functions!
//$("button").click(function() {
//
//});

function tellMeWhenDone(callback) {
    // <some code here for 1st func>

    callback(); // the 'callback', it runs the function I give it!
}

tellMeWhenDone(function() {
    console.log('I am done!');
});

tellMeWhenDone(function() {
    console.log('All done...');
});
