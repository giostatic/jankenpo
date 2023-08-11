const prompt =require("prompt-sync")();

let getPerson = prompt('Please select between Rock, Paper, or Scissors:');

let choice = ['rock','paper','scissors']; 

function getComputer(arr) {
    let computer = arr[Math.floor(Math.random() * arr.length)];
    return computer;
};

function game(x, y) {
    if (x == y){
        return `You selected ${x} and the computer selected ${y}, so you tied!`
    }
    if (x == 'rock' && y == 'paper'){
        return `You selected ${x}, and the computer selected ${y}, you lost!`
    };
    if (x == 'rock' && y == 'scissors'){
        return `You selected ${x}, and the computer selected ${y}, you win!`
    };
    if (x == 'paper' && y == 'scissors'){
        return `You selected ${x}, and the computer selected ${y}, you lost!`
    };
    if (x == 'paper' && y == 'rock'){
        return `You selected ${x}, and the computer selected ${y}, you win!`
    };
    if (x == 'scissors' && y == 'rock'){
        return `You selected ${x}, and the computer selected ${y}, you lost!`
    };
    if (x == 'scissors' && y == 'paper'){
        return `You selected ${x}, and the computer selected ${y}, you win!`
    };

};

console.log(game(getPerson,getComputer(choice)))