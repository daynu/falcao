function getComputerChoice()
{
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerChoice)
{
    if(playerSelection == 'Rock')
    {
        if(computerChoice == 'Paper')
        {
            return "Computer wins!"
        }
        else if (computerChoice == "Scissors")
        {
            return "Player wins!"
        }
        else
        {
            return "Tie"
        }
    }
    else if (playerSelection == 'Paper')
    {
        if(computerChoice == 'Scissorsr')
        {
            return "Computer wins!"
        }
        else if (computerChoice == "Rock")
        {
            return "Player wins!"
        }
        else
        {
            return "Tie"
        }
    }
    else if (playerSelection == 'Scissors')
    {
        if(computerChoice == 'Rock')
        {
            return "Computer wins!"
        }
        else if (computerChoice == "Paper")
        {
            return "Player wins!"
        }
        else
        {
            return "Tie"
        }
    }
    
}


function game()
{   
    let playerScore = 0
    let computerScore = 0;
    for(let i = 0; i < 5; i++)
    {
        const playerSelection = prompt("Rock, Paper or Scissors?: ")
        const computerSelection = getComputerChoice();
        const winner = playRound(playerSelection, computerSelection)
        if(winner == "Player wins!") playerScore += 1
        else if (winner == "Computer wins!") computerScore += 1

        console.log("player : " + playerScore + "   computer: " + computerScore)
    }

    if(playerScore > computerScore) console.log("Player wins")
    else if (playerScore < computerScore) console.log("Computer wins")
    else console.log("Tie")
}

game();
