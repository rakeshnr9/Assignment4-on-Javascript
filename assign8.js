function function8(){
var arry = [];

  displayStr();

  function myFunction() {
    arry.sort(function(a, b){
      var x = a.toLowerCase();
      var y = b.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    displayStr();
  }

  function displayStr() {
    document.getElementById("arry").innerHTML =
    arry[0]+ "<br>" +
    arry[1] + "<br>" +
    arry[2];
  }
}