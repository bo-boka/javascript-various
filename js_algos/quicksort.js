// var arr = [4, 8, 9, 6, 11, 7];
// console.log(arr);

function quicksort(x, start, end){
  console.log(x);
  var
      pivot = x[end],
      wall = start;
  if (start < end){ //base case (breaks out of recursion)
    for (var i = start; i < end; i++){
      if (x[i] > pivot){
        // x = swap(x, x[i], wall);
        var temp = x[i];
        x[i] = x[wall];
        x[wall] = temp;
        wall++;
      }
    }
    // x = swap(x, end, wall);
    var tempp = x[end];
    x[end] = x[wall];
    x[wall] = tempp;
    wall++;
    // console.log(x);
    quicksort(x, start, wall-1);
    quicksort(x, wall+1, end);
  }
  return x;
}

// function swap(y, a, b){
//   var temp = y[a];
//   y[a] = y[b];
//   y[b] = temp;
//   // console.log(arr);
//   return y;
// }

quicksort([4, 8, 9, 6, 11, 7], 0, 5);
// arr.forEach(function(value, index, array) {
//     console.log(index, "->", value);
// });
