let choice = ['rock','paper','scissors']

function getComputerChoice() {
    let computer = choice[Math.floor(Math.random*choice.length)];
    document.getElementById("button").innerHTML = "YOU CLICKED ME!";
    return
}

console.log(getComputerChoice())