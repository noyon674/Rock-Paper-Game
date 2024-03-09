//define user & comp score
let userScore = 0;
let compScore = 0;

//select elements from html file
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

//generate computer choice
const genCompChoice = ()=>{
    const option = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3); //find random index

    //return value according randomly
    return option[randIdx];
};

//if game is draw
const drawGame = ()=>{
    msg.innerText = 'Game Draw. Play Again';
    msg.style.backgroundColor = '#081b31';
};

//wining updates
const showWinner = (userWin)=>{
    if(userWin){
        //when user is win
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = 'You Win!';
        msg.style.backgroundColor = 'green';
    }else{
        //when comp is win
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = 'You Lose';
        msg.style.backgroundColor = 'red';
    };
};

//play the main concept
const playGame = (userChoice)=>{
    //we have userchoice
    console.log('user', userChoice);
    //Generate computer choice
    let compChoice= genCompChoice();
    //we have comp choice
    console.log('computer', compChoice)

    //if choices are same
    if(userChoice == compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){ //if user choice is rock then comp has two option 
            //scissors, paper
           userWin = compChoice === 'paper' ? false : true;
        }else if(userChoice === 'paper'){ //if user choice is paper then comp has two option 
            //rock, scissors
           userWin =  compChoice === 'scissors' ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === 'rock' ? false : true;
        };

        //winning fuction was called
        showWinner(userWin);
    };
};

//get every choice from choices
choices.forEach((choice)=>{
    
    //add event when user clicked the indivisual choice
    choice.addEventListener('click', ()=>{
        //get the choice id when user clicked the choice;
        const userChoice = choice.getAttribute('id');

        //give the user's choice to the main function
        playGame(userChoice);
    });
});