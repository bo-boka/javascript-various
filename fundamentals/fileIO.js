//make sure input type=file
document.getElementById("openFile").addEventListener('change', function(){
  var fr = new FileReader();
  fr.onload = function() {
    //make sure file output surrounded in <pre> tag
    document.getElementById("fileContents").textContent = this.result;
  }
  fr.readAsText(this.files[0]);
});
