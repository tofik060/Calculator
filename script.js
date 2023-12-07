function caldis(val) {
    document.getElementById("result").value += val;
    //console.log("Display: " + val);
  }
  function calFunction(event) {
    if (
      event.key == "0" ||
      event.key == "1" ||
      event.key == "2" ||
      event.key == "3" ||
      event.key == "5" ||
      event.key == "6" ||
      event.key == "7" ||
      event.key == "8" ||
      event.key == "9" ||
      event.key == "+" ||
      event.key == "-" ||
      event.key == "/" ||
      event.key == "*"
    ) {
      document.getElementById("result").value += event.key;
    }
  }

  var cal = document.getElementById("calcu");
  cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
      var x = document.getElementById("result").value;
      //console.log("Calcu: " + x);
      solve();
    }
  };

  function solve() {
    var x = document.getElementById("result").value;
    var y = math.evaluate(x);
    document.getElementById("result").value = y;
    //console.log("Value of X: " + x)
    //console.log("Result sum: " + y)
  }

  function clr() {
    document.getElementById("result").value = "";
  }