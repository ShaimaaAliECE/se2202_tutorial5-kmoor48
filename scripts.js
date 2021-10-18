let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

/*var userInitialization = document.createElement('button');
userInitialization.innerHTML= "Start Game";
userInitialization.addEventListener('click',(initialEvent.target.hidden=true));
*/
document.getElementById("next-lbl").innerHTML=nextPlayer;
//makes player value x at top of page


//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is



//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{ 
    for(let b of document.getElementsByTagName("td") ){
        let button = document.createElement('button');
        button.innerHTML = '[ ]';
        document.getElementById(b.id).appendChild(button);
    }


    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{ 
    let a = event.target;
    a.innerHTML = nextPlayer;
    if(nextPlayer=='X'){
        nextPlayer='O';
    }else{
        nextPlayer= 'X';
    }
    document.getElementById("next-lbl").innerHTML = nextPlayer;
    a.disabled=true;
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        let EndGame = document.createElement('h1');
        EndGame.innerHTML = "game over";
         document.getElementbyId('game-over-lbl').appendChild(EndGame);
    
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{ 
    let amountOfButtons = document.querySelectorAll('button');
    let count = 0;
for(let i = 0; i<amountOfButtons.length; i++){
    if(amountOfButtons[i].disabled==true){
        count++;
    }
}
if(count==amountOfButtons.length){
    //if count has been filled (pushed) and its disabled then the game is over
    return true;
    //game over is true bc amount of presses=amount of buttons
    }else{
    return false;
}
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
