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

let tie=0;
let counterRound=0;
let maxROund =5;

button1.addEventListener('click',() => game(option1));
button3.addEventListener('click',() => game(option2));
button2.addEventListener('click',() => game(option3));


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
            return result2;
        }
        else if(computerSelection == option2){
            return result1;
        }
        else if(computerSelection == option3){
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

function game(playerChoice){
    let computerChoice = getComputerChoice();
    let output= round(playerChoice,computerChoice);
    
    if(output === result1 || output ===result3){
        if(output === result1){
            counterPlayer++;
        }
        else{
            counterComputer++;
        }
        counterRound++;
    }
    else{
        tie++;
    }

        updateScore();

    if(counterRound === maxROund){
        if(counterPlayer>counterComputer){
            alert("Player won");
            
        }
        else{
            alert("Computer won");
        }
        location.reload();
    }
}

function updateScore(){
    document.getElementById('input1').textContent = counterPlayer;
    document.getElementById('input2').textContent = counterComputer;
    document.getElementById('input3').textContent = tie;
    document.getElementById('result').textContent = "Computer Chose:" + computerChoice;

}