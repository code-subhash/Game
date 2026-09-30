let moves = ["rock", "paper", "scissors"];

const computerMoveBtn = document.getElementById("computer-move-button");

const playerPoints = document.getElementById("player-wins");
const computerPoints = document.getElementById("computer-wins");
const roundInfo = document.getElementById("round-info");
function makeMove(playerMove) {
    if(roundInfo.querySelector("p").textContent === "Round 10 of 10") {
        alert("Game Over! Please refresh the page to play again.");
        const finalResult = document.createElement("p");
        if(parseInt(playerPoints.textContent) > parseInt(computerPoints.textContent)) {
            finalResult.textContent = "You won the game!";
        } else {
            finalResult.textContent = "Computer won the game!";
        }
        roundInfo.appendChild(finalResult);
        return;
    }
    let computerMove = moves[Math.floor(Math.random() * 3)];
    if(computerMove === "rock") {
        computerMoveBtn.textContent = "🪨";
    } 
    else if(computerMove === "paper") {
        computerMoveBtn.textContent = "📄";
    }
    else {
        computerMoveBtn.textContent = "✂️";
    }

    let result = "";

    if(playerMove === computerMove) {
        result = "It's a Tie";
    }

    else{
        switch(playerMove){
            case "scissors":
                result = (computerMove === "paper" ? "You Won" : "Computer Won");
                break;
            case "rock":
                result = (computerMove === "scissors" ? "You Won" : "Computer Won");
                break;
            case "paper":
                result = (computerMove === "rock" ? "You Won" : "Computer Won");
                break;
        }

        if(result === "You Won"){
            playerPoints.textContent = parseInt(playerPoints.textContent) + 1;
        }
        else if(result === "Computer Won"){
            computerPoints.textContent = parseInt(computerPoints.textContent) + 1;
        }

        

        
    }

    let currentRound = parseInt(roundInfo.querySelector("p").textContent.split(" ")[1]);
    roundInfo.querySelector("p").textContent = `Round ${currentRound + 1} of 10`;
    const tableElement = document.createElement("tr");
    tableElement.innerHTML = `
        <tr style="text-align: center;">
            <td>${currentRound}</td>
            <td>${playerMove}</td>
            <td>${computerMove}</td>
            <td>${result}</td>
        </tr>`;
    document.getElementById("game-history").appendChild(tableElement);

    
}