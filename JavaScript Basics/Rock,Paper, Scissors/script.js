/*
1. create random function to get pc input = done
2. Write a function that plays a single round of the game
2.1. use tolowercase = done

*/
const arr = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let index = Math.floor(Math.random()*arr.length);
    return index;
}

let User = prompt('Rock, Paper or Scissors?');
let userSelection = User.toLowerCase();
let computerSelection = arr[getComputerChoice()];
console.log(computerSelection);