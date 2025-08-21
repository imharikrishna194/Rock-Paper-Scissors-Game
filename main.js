let playGame = confirm("Shall We Play rock, paper, scissors ?");

if(playGame){
    let playerChoice = prompt("Please Enter rock, paper or scissors")
    
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        
        if(playerOne === "rock" ||
           playerOne === "paper" ||
           playerOne === "scissors"
        ){
            let computerChoice = Math.floor(Math.random() * 3 + 1) ;

            let computer = 
                computerChoice === 1 ? "rock" :
                computerChoice === 2 ? "paper" :
                "scissors" ;

            let result =
            playerOne === computer ? "Tie Game" :
            playerOne === "rock" && computer === "paper" ? "PlayerWins" :
            playerOne === "paper" && computer === "scissors" ? 
            "PlayerWins" :
            playerOne === "scissors" && computer === "rock" ? 
            "PlayerWins" : "ComputerWins" ;

            alert(result);

            let playAgain = confirm("Play Again ?")
            playAgain ? location.reload() : alert("Thanks For Playing:)");

        }
    }
    else{
        alert("Sorry, I Guess You Changed Your Mind, Maybe Next Time!")
    }
}

else{
    alert("Ok, Maybe Next Time!")
}
