let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");

const msg =document.querySelector("#msg");

const userScorepara =document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");

const genCompChoice = () =>{
    //rock,paper,scissors
    const options =["rock" ,"paper" , "scissors"];
    const randId =Math.floor(Math.random() * 3);
    return options[randId];
}

const showWinner =(userWin,userChoice,compchoice) =>{
         if(userWin){
            // console.log("you win");
            userScore++;
            userScorepara.innerText =userScore;
            msg.innerText =`You win! Your ${userChoice} beats ${compchoice}`;
            msg.style.backgroundColor ="green";

         }else{
            // console.log("you lose");
            compScore++;
            compScorepara.innerText =compScore;
            msg.innerText = `You lose. ${compchoice} beats your ${userChoice}`;
            msg.style.backgroundColor ="red";
         }
};

const drawGame =()=>{
    // console.log("game was draw");
    msg.innerText ="Game was Draw. Play again";
    msg.style.backgroundColor ="black";
};

const playGame = (userChoice) =>{
   console.log("user choice  =",userChoice);
   //generate computer choice
   const compchoice = genCompChoice();
   console.log("comp choice:",compchoice);
   if(userChoice == compchoice){
       //Draw Game
       drawGame();
    }
    else{
        let userWin =true;
        if(userChoice == "rock"){
           userWin= compchoice =="paper" ?false :true;
        }else if(userChoice == "paper"){
            userWin =compchoice == "scissors"?false :true;
        }else{
            userWin = compchoice == "rock"?false :true;
        }
         showWinner(userWin,userChoice,compchoice);
            }
};

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        
         playGame(userChoice);
    });
});