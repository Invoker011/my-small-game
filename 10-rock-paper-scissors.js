    let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    };
    updateScoreElement();
    //using default operator istead of if statement.
    /* instead of score===null we can also use !score.
    if(score=== null){
    score = {
        win: 0,
        losses: 0,
        ties: 0
    };
    }*/
    function playGame(PlayerMove){
    const computerMove = pickComputerMove();
    let result = '';
    if(PlayerMove === 'rock'){
        if(computerMove === 'rock'){
        result = 'Tie';
        }
        else if(computerMove === 'paper'){
            result = 'You Lose';
        }
        else{
            result = 'You Win';
        }
    }
    else if(PlayerMove ==='paper'){
        const computerMove = pickComputerMove();
        if(computerMove === 'rock'){
            result = 'You Win';
        }
        else if(computerMove === 'paper'){
            result = 'Tie';
        }
        else{
            result = 'You Lose';
        }

    }
    else if(PlayerMove === 'scissor'){
        const computerMove = pickComputerMove();
        if(computerMove === 'rock'){
            result = 'You Lose';
        }
        else if(computerMove === 'paper'){
            result = 'You Win';
        }
        else{
            result = 'Tie';
        }   
    }
    if(result === 'You Win'){
        score.wins +=1;
    }else if(result === 'You Lose'){
        score.losses +=1;
    }else if (result === 'Tie'){
        score.ties +=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You
    <img src="${PlayerMove}-emoji.png" class = "move-icon">
    <img src = "${computerMove}-emoji.png" class ="move-icon">
    Computer`;
    /*      alert(`You picked ${PlayerMove}. Computer picked ${computerMove}. ${result}.
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`);*/
    }
    function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
    function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber >=0 && randomNumber < 1/3 ){
        computerMove = 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    }
    else{
        computerMove = 'scissor'
    }
    return computerMove;

    }
