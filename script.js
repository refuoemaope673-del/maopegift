
function darkMode() {
  document.body.classList.toggle("dark-mode");
}

function calculate() {
  var people = document.getElementById("people").value;
  var service = document.getElementById("services").value;
  var result = document.getElementById("result");

  if (people == "" || people < 1) {
    result.innerHTML = "Please enter number of people";
    return;
  }

  var price = 0;

  if (service == "Nature") {
    price = 150;
  } else if (service == "village") {
    price = 100;
  } else if (service == "culture") {
    price = 200;
  }

  var total = people * price;
  result.innerHTML = "Total cost: M" + total;
}