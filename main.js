const prompt =require("prompt-sync")();

let choice = ['rock','paper','scissors']; 

let player = prompt('Please select between Rock, Paper, or Scissors:');

let getPerson = 
    do {
        if(player.toString().toLowerCase() !== 'rock' || player.toString().toLowerCase() !== 'paper'|| player.toString().toLowerCase() !== 'scissors'){
            return `Input invalid, please select from from the choices provided: ${choice[0]}, ${choice[1]}, or ${choice[2]}`;
        }else{
            return;
        }
    } while (getPerson);

   // do{
    //    player = prompt('Please select between Rock, Paper, or Scissors:');
    //} while (;
    //while () {
      //  
        //player = prompt('Please select between Rock, Paper, or Scissors:');
    
    /*prompt === null || prompt === " " || prompt === undefined){
        return `Input invalid, please select from from the choices provided: ${choice[0]}, ${choice[1]}, or ${choice[2]}`;
    } else{
    return};*/


function getComputer(arr) {
    let computer = arr[Math.floor(Math.random() * arr.length)];
    return computer;
};

function game(x, y) {
    if (x.toString().toLowerCase() === y){
        return `You selected ${x} and the computer selected ${y}, so you tied!`
    }
    if (x.toString().toLowerCase() === 'rock' && y === 'paper'){
        return `You selected ${x}, and the computer selected ${y}, you lost!`
    };
    if (x.toString().toLowerCase() === 'rock' && y === 'scissors'){
        return `You selected ${x}, and the computer selected ${y}, you win!`
    };
    if (x.toString().toLowerCase() === 'paper' && y === 'scissors'){
        return `You selected ${x}, and the computer selected ${y}, you lost!`
    };
    if (x.toString().toLowerCase() === 'paper' && y === 'rock'){
        return `You selected ${x}, and the computer selected ${y}, you win!`
    };
    if (x.toString().toLowerCase() === 'scissors' && y === 'rock'){
        return `You selected ${x}, and the computer selected ${y}, you lost!`
    };
    if (x.toString().toLowerCase() === 'scissors' && y === 'paper'){
        return `You selected ${x}, and the computer selected ${y}, you win!`
    };

};

console.log(game(getPerson,getComputer(choice)))