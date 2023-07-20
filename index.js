

let computerScore = 0;
let playerScore = 0;



function getComputerChoice()
{
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerChoice)
{   
    let computerChoiceText = document.getElementById('computer-selection')
    computerChoiceText.innerText = computerChoice;
    console.log(computerChoice)
    
    if(playerSelection == 'Rock')
    {
        if(computerChoice == 'Paper')
        {
            computerScore++;
        }
        else if (computerChoice == "Scissors")
        {
            playerScore++
        }
        else
        {
            console.log("tie")
        }
    }
    else if (playerSelection == 'Paper')
    {
        if(computerChoice == 'Scissors')
        {
            computerScore++;
        }
        else if (computerChoice == "Rock")
        {
            playerScore++;
        }
        else
        {
            console.log("tie")
        }
    }
    else if (playerSelection == 'Scissors')
    {
        if(computerChoice == 'Rock')
        {
            computerScore++;
        }
        else if (computerChoice == "Paper")
        {
            playerScore++;
        }
        else
        {
            console.log("tie");
        }
    }
    
}

let playerSelection = '';





  window.onload=function(){
        
    const btns = document.querySelectorAll('button');

    btns.forEach(function (btn) {
        let computerScoreText = document.getElementById("computer");
        let playerScoreText = document.getElementById("player");
        btn.addEventListener('click', function() {
        playerSelection = btn.value;
        playRound(playerSelection, getComputerChoice());
        playerScoreText.innerText = playerScore;
        computerScoreText.innerText = computerScore;
        if(computerScore + playerScore == 5)
        {
            
            if(computerScore > playerScore)
            {
                alert("Computer won")
                playerScore = 0;
                computerScore = 0;
            }
            else 
            {
                alert("Player won")
                playerScore = 0;
                computerScore = 0;
            }
        }
        });
    });
  }
