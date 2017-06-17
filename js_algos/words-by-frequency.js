//function that takes in File
//func that loops through adding to dict
//func that sorts(break down into functions)

document.getElementById("openFile").addEventListener('change', function(){
  var fr = new FileReader(); //check browser compatibility
  fr.onload = function() {

    var dict = arrayToDictCount(fileToArray(this.result));
    console.log(dict);

  };
  fr.readAsText(this.files[0]);

});

function fileToArray(x){
  // \r \r\n diff on windows vs linux
  x = x.replace(/[\r\n]/g, ' ');
  x = x.replace(/[&\/\\#,+()$`_~%.":;*?!@<>{}-]/g, '');
  var arr = x.split(" ");
  return arr;
}

function arrayToDictCount(x){
  var dict = {}; //to create associative arrays in js, use bracket notation for properties
  for (var i = 0; i < x.length; i++) {
    var word = x[i].toLowerCase();
    if (!dict.hasOwnProperty(word)) {
      dict[word] = 1;
    } else {
      dict[word]++;
    }
  }
  return dict;
}
