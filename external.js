const option1 = "rock";
const option2 = "scissor";
const option3 = "paper";

const result1 = "won";
const result2 = "tie";
const result3 = "lost";

let counterPlayer=0;
let counterComputer=0;

var  button1 = document.querySelector("#btn1");
var  button2 = document.getElementById('btn2');
var  button3 = document.getElementById('btn3');

let computerChoice = undefined;
let computerSelection = getComputerChoice();

function getPlayerChoice(playerSelection){
        return playerSelection;
    }

button1.addEventListener('click',() => {
    console.log(round(getPlayerChoice("rock"),getComputerChoice()));
});
button2.addEventListener('click',() => {
    console.log(round(getPlayerChoice("paper"),getComputerChoice()));

});
button3.addEventListener('click',() => {
    console.log(round(getPlayerChoice("scissor"),getComputerChoice()));
});


function getComputerChoice(){
    let selection = Math.random();

    if(selection<=0.33 && selection>=0){
        computerChoice = option1;
    }
    else if(selection<=0.66 && selection>=0.34){
        computerChoice = option2;
    }
    else{
        computerChoice = option3;
    }
    // console.log(computerChoice);
    return computerChoice;

}

// function rules(){
//     if("rocks" )
// }
function round(playerSelection,computerSelection){
    if(playerSelection == option1){
        if(computerSelection == option1){
            console.log(option1);
            return result2;
        }
        else if(computerSelection == option2){
            console.log(option2);
            return result1;
        }
        else if(computerSelection == option3){
            console.log(option3);
            return result3;
        }
    }
    else if(playerSelection == option2){
        if(computerSelection == option1){
            return result3;
        }
        else if(computerSelection == option2){
            return result2;
        }
        else if(computerSelection == option3){
            return result1;
        }
    }
    else if(playerSelection == option3){
        if(computerSelection == option1){
            return result1;
        }
        else if(computerSelection == option2){
            return result3;
        }
        else if(computerSelection == option3){
            return result2;
        }
    }
}


// let result =    round(getPlayerChoice(),getComputerChoice());
// console.log(result);
// button1.addEventListener('click' , () => alert("hello") );
// function game(){
//     //Best of 5
//     let i=1;
//     while(i<=5){
//         let playerChoice = getPlayerChoice();
//         let computerChoice = getComputerChoice();
//         let opRound = round(playerChoice,computerChoice);

//         if( opRound == result2){ 
//             console.log("------------------")
//             console.log("player chose " + playerChoice);
//             console.log("computer chose " + computerChoice);
//             console.log("Tie, Enter the value again!")
//             continue;
//         }
//         else{
//             if (opRound == result1){
//                 counterPlayer++;
//                 console.log("------------------")
//                 console.log("player chose " + playerChoice);
//                 console.log("computer chose " + computerChoice);
//                 console.log("Round " + i + " is won by player:" + counterPlayer);
//             }
//             else if(opRound == result3){
//                 counterComputer++;
//                 console.log("-------------------")
//                 console.log("computer chose " + computerChoice);
//                 console.log("player chose " + playerChoice);
//                 console.log("Round " + i + " is won by computer:" + counterComputer);
//             }
//             i++;
//         }
//     }
//     if(counterPlayer>counterComputer){
//         console.log("player wins")
//     }
//     else{
//         console.log("computer wins")
//     }
//     }

// game();

function updateScore(){
    
}