let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice = ()=>{
  const options=["Rock","Paper","Scissor"];
  const randIdx = Math.floor(Math.random()*3);//to get from o to 2
  return options[randIdx];
};

const drawGame = () =>{
  console.log("Game was draw");
  msg.innerText="Game was draw. Play again";
  msg.style.backgroundColor = "#081b31";
}

const showWinner =(userWin, userChoice, compChoice) =>{
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You Win");
    msg.innerText=`You Win!. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else{
    compScore++;
    compScorePara.innerText = compScore;
    console.log("You Lose");
    msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
  }
}

const playGame = (userChoice) =>{
  console.log("User choice = ", userChoice);
  //Generate computer choice
  const compChoice =genCompChoice();
  console.log("Comp choice = ",compChoice);
  if(userChoice == compChoice)
  {
    //draw
    drawGame();
  }
  else{
    let userWin =true;
    if(userChoice === "Rock"){
      userWin = compChoice === "Paper" ? false:true;
    }
    else if(userChoice == "Paper"){
      userWin = compChoice === "Scissor" ?false:true; 
    }
    else{
      //Scissor as userChoice
      userWin = compChoice === "Rock"?false:true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
  const userChoice =choice.getAttribute("id");
  console.log("You Choice",userChoice);
  playGame(userChoice);
  });
});