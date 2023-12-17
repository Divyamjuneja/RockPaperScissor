const option1 = "rock";
const option2 = "scissor";
const option3 = "Paper";

const result1 = "won";
const result2 = "tie";
const result3 = "lost";

let counterPlayer=0;
let counterComputer=0;

let computerChoice = undefined;
let playerChoice = "sCissor".toLowerCase();
let computerSelection = getComputerChoice();

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

function ifTie(){
    if(round(playerChoice,getComputerChoice()) == result2){    
        return round(playerChoice,getComputerChoice());
    }
}

function game(){
    //Best of 5
    let i=0;
    while(i<5){
        ifTie();
        i++;
    }
    }

game();

function updateScore(){
    if (round() == result1){
        counterPlayer++;
        console.log(counterPlayer);
    }
    else if(round() == result3){
        counterComputer++;
        console.log(counterComputer);
    }
}