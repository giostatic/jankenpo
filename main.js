const prompt =require("prompt-sync")();

let getPerson = prompt('Please select between Rock, Paper, or Scissors:');

let choice = ['rock','paper','scissors']; 

function getComputer(arr) {
    let computer = arr[Math.floor(Math.random() * arr.length)];
    return computer;
};

function game(x, y) {
    if( x === null || x === "" || x === undefined){
        return `Input invalid, please select from from the choices provided: ${choice[0]}, ${choice[1]}, or ${choice[2]}`;
    }
    if (x.toLowerCase() === y){
        return `You selected ${x} and the computer selected ${y}, so you tied!`
    }
    if (x.toLowerCase() === 'rock' && y === 'paper'){
        return `You selected ${x}, and the computer selected ${y}, you lost!`
    };
    if (x.toLowerCase() === 'rock' && y === 'scissors'){
        return `You selected ${x}, and the computer selected ${y}, you win!`
    };
    if (x.toLowerCase() === 'paper' && y === 'scissors'){
        return `You selected ${x}, and the computer selected ${y}, you lost!`
    };
    if (x.toLowerCase() === 'paper' && y === 'rock'){
        return `You selected ${x}, and the computer selected ${y}, you win!`
    };
    if (x.toLowerCase() === 'scissors' && y === 'rock'){
        return `You selected ${x}, and the computer selected ${y}, you lost!`
    };
    if (x.toLowerCase() === 'scissors' && y === 'paper'){
        return `You selected ${x}, and the computer selected ${y}, you win!`
    };

};

console.log(game(getPerson,getComputer(choice)))