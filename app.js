var number = Math.floor(Math.random() * 10) + 1;
var counter = 0;
var x = document.getElementById("container");
x.style.display = "none";

function startGame() {
  number = Math.floor(Math.random() * 10) + 1;
  for (let i = 1; i <= 10; i++) {
    document.getElementById(i).disabled = false;
  }
  counter = 0;
  if (checkName(document.getElementById("fname").value) == true) {
    x.style.display = "block";
    updateText();
    document.getElementById("container2").style.display = "none";
    document.getElementById("retry").style.display = "none";
    document.getElementById("exit").style.display = "none";
    document.getElementById("endLable").style.display = "none";
    document.getElementById("comments").style.display = "none";

  }
}

function buttonPressed(num) {
  counter++;
  updateText();
  document.getElementById("comments").style.display = "block";
  document.getElementById("container2").style.display = "none";
  if (num == number) {
    endGame(1);
  }
  else if (counter == 4) {
    endGame(0);
  }
  else if ((number - num == 1) || (number - num == (-1))) {
    document.getElementById('comments').innerHTML = "wrong choise but very hot range of 1 numbers your current number is: " + num;
  }

  else if ((number - num == 2) || (number - num == (-2))) {
    document.getElementById('comments').innerHTML = "wrong choise but range of 2 numbers your current number is: " + num;
  }
  else {
    document.getElementById('comments').innerHTML = "wrong choise your current number is: " + num;
  }
}

function checkName(inputtx) {
  if (inputtx.length == 0) {
    alert("Please insert name");
    return false;
  }
  else if (inputtx.length > 15 || inputtx.length < 2) {
    alert("User name should be 2-15 chars");
    return false;
  }
  return true;
}

function endGame(num) {
  for (let i = 1; i <= 10; i++) {
    document.getElementById(i).disabled = true;
  }
  document.getElementById("comments").style.display = "none";
  document.getElementById("retry").style.display = "block";
  document.getElementById("exit").style.display = "block";

  document.getElementById("endLable").style.display = "block";
  if (num) {
    document.getElementById("endLable").innerHTML = "You Won the lucky number was: " + number;
    document.getElementById("endLable").style.color = 'green';
  }
  else {
    document.getElementById("endLable").innerHTML = "You Lose the number was: " + number;
  }
}

function updateText() {
  document.getElementById("Header").innerHTML = "Hello " + document.getElementById("fname").value + "! You have: " + (4 - counter) + " attempts";
}

function colorChange(value){
  document.getElementById("body").style.backgroundColor = value;
}