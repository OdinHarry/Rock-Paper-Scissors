let userScore = 0;
let compScore = 0;

function compchoices() {
  let choices = ["rock", "paper", "scissors"];
  const compchoice = Math.floor(Math.random() * 3);
  return choices[compchoice];
}


const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    const userchoice = this.getAttribute("id");
    console.log("userchoice is:" + userchoice);
    const computerchoice = compchoices();
    console.log("Computer choice is:" + computerchoice);

    if (userchoice === computerchoice) {
      document.getElementById("result").innerHTML="It's a tie!";
    } else if (userchoice === "rock") {
      if (computerchoice === "scissors") {
        userScore++;
        document.getElementById("user-score").innerHTML=userScore;
        document.getElementById("result").innerHTML="You win this round!";
      } else {
        compScore++;
        document.getElementById("comp-score").innerHTML=compScore;
        document
          .getElementById("result")
          .innerHTML="The computer wins this round...";
      }
    } else if (userchoice === "paper") {
      if (computerchoice === "scissors") {
        compScore++;
        document.getElementById("comp-score").innerHTML=compScore;
        document
          .getElementById("result")
          .innerHTML="The computer wins this round...";
      } else {
        userScore++;
        document.getElementById("user-score").innerHTML=compScore;
        document.getElementById("result").innerHTML="You win this round!";
      }
    } else if (userchoice === "scissors") {
      console.log("working");
      if (computerchoice === "rock") {
        compScore++;
        document.getElementById("comp-score").innerHTML=compScore;
        document
          .getElementById("result")
          .innerHTML="The computer wins this round...";
      } else {
        userScore++;
        document.getElementById("user-score").innerHTML=compScore;
        document.getElementById("result").innerHTML="You win this round!";
      }
    }
  });
});

const reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    location.reload();
})
