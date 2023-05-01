//Own Variables
let outputEl = document.getElementById("grade-out");

//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

//Function
function btnClicked() {
  //Input
  let ans1 = document.getElementById("question1-in").value.toLowerCase();
  let ans2 = document.getElementById("question2-in").value.toLowerCase();
  let ans3 = document.getElementById("question3-in").value.toLowerCase();
  let ans4 = document.getElementById("question4-in").value.toLowerCase();
  let val1;
  let val2;
  let val3;
  let val4;

  //Process
  if (ans1 == "11" || ans1 == "eleven") {
    val1 = 1;
    document.getElementById("answer1").innerHTML = `<p>You are Correct!</p>`;
    document.getElementById("answer1").style.color = "green";
  } else if (ans1 == "") {
    val1 = 0;
    document.getElementById(
      "answer1"
    ).innerHTML = `<p>Please Input an Answer</p>`;
  } else {
    val1 = 0;
    document.getElementById("answer1").innerHTML = `<p>You are Incorrect!</p>`;
    document.getElementById("answer1").style.color = "red";
  }
  if (ans2 == "england") {
    val2 = 1;
    document.getElementById("answer2").innerHTML = `<p>You are Correct!</p>`;
    document.getElementById("answer2").style.color = "green";
  } else if (ans2 == "") {
    val2 = 0;
    document.getElementById(
      "answer2"
    ).innerHTML = `<p>Please Input an Answer</p>`;
  } else {
    val2 = 0;
    document.getElementById("answer2").innerHTML = `<p>You are Incorrect!</p>`;
    document.getElementById("answer2").style.color = "red";
  }
  if (ans3 == "2" || ans3 == "two") {
    val3 = 1;
    document.getElementById("answer3").innerHTML = `<p>You are Correct!</p>`;
    document.getElementById("answer3").style.color = "green";
  } else if (ans3 == "") {
    val3 = 0;
    document.getElementById(
      "answer3"
    ).innerHTML = `<p>Please Input an Answer</p>`;
  } else {
    val3 = 0;
    document.getElementById("answer3").innerHTML = `<p>You are Incorrect!</p>`;
    document.getElementById("answer3").style.color = "red";
  }
  if (ans4 == "1863" || ans4 == "eighteen sixty three") {
    val4 = 1;
    document.getElementById("answer4").innerHTML = `<p>You are Correct!</p>`;
    document.getElementById("answer4").style.color = "green";
  } else if (ans4 == "") {
    val4 = 0;
    document.getElementById(
      "answer4"
    ).innerHTML = `<p>Please Input an Answer</p>`;
  } else {
    val3 = 0;
    document.getElementById("answer4").innerHTML = `<p>You are Incorrect!</p>`;
    document.getElementById("answer4").style.color = "red";
  }

  //Output
  let total = val1 + val2 + val3 + val4;
  let percent = (total / 4) * 100;
  if (total === 0) {
    outputEl.innerHTML = `<p>You got 0/4 correct (${percent}%)! I expected better</p>`;
  } else if (total === 1) {
    outputEl.innerHTML = `<p>You got 1/4 correct (${percent}%)! Not Terrible</p>`;
  } else if (total === 2) {
    outputEl.innerHTML = `<p>You got 1/4 correct (${percent}%)! That's decent</p>`;
  } else if (total === 3) {
    outputEl.innerHTML = `<p>You got 3/4 correct (${percent}%)! You did pretty good</p>`;
  } else {
    outputEl.innerHTML = `<p>You got 4/4 correct (${percent}%)! Amazing Job!</p>`;
  }
}
