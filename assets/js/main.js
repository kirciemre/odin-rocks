var humanScore = 0;
var machineScore = 0;
const humanScore_span = document.getElementById("humanScore");
const machineScore_span = document.getElementById("machineScore");
const scoreBoard_div = document.querySelector(".score-board");
const message_div = document.querySelector(".message");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const restart_div = document.getElementById("restart");


function randomSelection() {
    const selection = ["r", "p", "s"];
    const selectId = Math.floor(Math.random() * 3);
    return selection[selectId];
}

function wordConversion(key) {
    switch (key) {
        case "r":
            return "Rock";
        case "s":
            return "Scissor";
        case "p":
            return "Paper";
    }
}

function win_status(status, human, machine) {
    switch (status) {
        case 0:
            message_div.innerHTML = "Human choice: " + wordConversion(human) + " | Machine choice: " + wordConversion(machine) + "<br><br> It's a Draw! :|";
            document.getElementById(human).classList.add("white-glow");
            setTimeout(function() { document.getElementById(human).classList.remove("white-glow") }, 500);
            break;
        case 1: // 1 - Human won
            humanScore++;
            humanScore_span.innerHTML = humanScore;
            machineScore_span.innerHTML = machineScore;
            message_div.innerHTML = "Human choice: " + wordConversion(human) + " | Machine choice: " + wordConversion(machine) + "<br><br> You Won! :)";
            document.getElementById(human).classList.add("green-glow");
            setTimeout(function() { document.getElementById(human).classList.remove("green-glow") }, 500);
            break;
        case 2:
            machineScore++;
            machineScore_span.innerHTML = machineScore;
            humanScore_span.innerHTML = humanScore;
            message_div.innerHTML = "Human choice: " + wordConversion(human) + " | Machine choice: " + wordConversion(machine) + "<br><br> You Lose! :'(";
            document.getElementById(human).classList.add("red-glow");
            setTimeout(function() { document.getElementById(human).classList.remove("red-glow") }, 500);
            break;
    }
    if (humanScore == 5) {
        message_div.innerHTML = "You Won the Game! :)";
        document.getElementById("operation").style.display = 'none';
        document.getElementById("restart").style.display = 'block';
    }
    if (machineScore == 5) {
        message_div.innerHTML = "You Lose the Game! :(";
        document.getElementById("operation").style.display = 'none';
        document.getElementById("restart").style.display = 'block';

    }
}


function start_game(userSelection) {
    machineSelection = randomSelection();
    switch (userSelection + machineSelection) {
        case "rs":
        case "pr":
        case "sp":
            win_status(1, userSelection, machineSelection); // 1 - Human won
            break;
        case "rp":
        case "ps":
        case "sr":
            win_status(2, userSelection, machineSelection); // 2 - Human lose
            break;
        case "rr":
        case "pp":
        case "ss":
            win_status(0, userSelection, machineSelection); // 0 - Draw
            break;
    }

}


function main() {
    rock_div.addEventListener('click', function() {
        start_game("r");
    })

    paper_div.addEventListener('click', function() {
        start_game("p");
    })

    scissor_div.addEventListener('click', function() {
        start_game("s");
    })

    restart_div.addEventListener('click', function() {
        location.reload();
        return false;
    })
}

main();