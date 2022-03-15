function computerPlay(){

    let x = Math.floor(Math.random() * 3);
    
    switch (x) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }

}

function playRound(playerSelection , computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection);
    let player = capitalize(playerSelection);
    if(player === computerSelection){
        console.log("It's a tie!")
        return(0)
    }
    let outcome = 0;
    if(player === "Paper"){
        switch (computerSelection){
            case "Rock":
                outcome = 1;
                break;
            case "Scissors":
                outcome = 0;
                break;
        }
    }
     else if(player === "Rock"){
        switch (computerSelection){
            case "Scissors":
                outcome = 1;
                break;
            case "Paper":
                outcome = 0;
                break;
        }
    }
    else if(player === "Scissors"){
            switch (computerSelection){
                case "Paper":
                    outcome = 1;
                    break;
                case "Rock":
                    outcome = 0;
                    break;
            }
    }

    switch(outcome) {

        case 0:
            console.log("toobad you lost")
            return(-1)
            break;
        case 1:
            console.log("you won yay")
            return(1)
            break;



    }







}



function game() {
    let score = 0
    for (let i = 0; i < 5; i++) {
        let x = playRound(prompt("Please enter Rock Paper Or Scissors"), computerPlay())
        score = score + x;
    }
    if(score === 0){
        console.log('its a tie')
    }
    if(score > 0){
        console.log('you won')
    }
    if(score < 0){
        console.log('you lost')
    }
    
}







    
function capitalize(string){
    let initial = string;
    let secondPart = initial.slice(1);
    secondPart = secondPart.toLowerCase();
    let capital = initial.charAt(0).toUpperCase();
    return(capital+secondPart)
}
