
let userScore = 0
let computerScore = 0
let computerChoice = null
let userChoiceSelection = null
const userChoice = document.querySelector('.choices')
const imgChoice = document.querySelector(".choice")
const rock_div = document.querySelector("#rock")
const paper_div = document.querySelector("#paper")
const scissores_div = document.querySelector("#scissors")
const userScore_span = document.getElementById("user score")
const computerScore_span = document.getElementById("computer score")
const result = document.getElementById("result textcontent")
const restart = document.querySelector("button")

function getComputerChoice(){
    const choice = ["Rock","Paper","Scissors"];
    const computerRandom = Math.floor(Math.random()*3)
    return choice[computerRandom]   
}
// console.log(getComputerChoice())

function win(userChoiceSelection,computerChoice){
   userScore++
   userScore_span.textContent = userScore
   computerScore_span.textContent = computerScore
   const userUpper = "user".fontsize(3).sup()
   const computerUpper = "computer".fontsize(3).sup()
//    const choiceSelection = ducoment.querySelector()
   result.innerHTML = `${userChoiceSelection}${userUpper} beats ${computerChoice}${computerUpper} , you win!`
}

function lose(userChoiceSelection,computerChoice){
   computerScore++
   userScore_span.textContent = userScore
   computerScore_span.textContent = computerScore
   const userUpper = "user".fontsize(3).sup()
   const computerUpper = "computer".fontsize(3).sup()
   result.innerHTML = `${userChoiceSelection}${userUpper} loses to ${computerChoice}${computerUpper} , you lose!`
}

function draw(userChoiceSelection,computerChoice){
   userScore_span.textContent = userScore
   computerScore_span.textContent = computerScore
   const userUpper = "user".fontsize(3).sup()
   const computerUpper = "computer".fontsize(3).sup()
   result.innerHTML = `${userChoiceSelection}${userUpper} equals ${computerChoice}${computerUpper} , It's a draw!`
}
function gameOver(){
    
    if(userScore === 10){
     result.innerHTML = "Game Over! You Win!"  
     rock_div.style.display = "none"
     paper_div.style.display = "none"
     scissores_div.style.display = "none"
    }
    if(computerScore === 10){
     result.innerHTML = "Game Over! You Lose!"  
     rock_div.style.display = "none"
     paper_div.style.display = "none"
     scissores_div.style.display = "none"
    }
}

function restartGame(){
    location.reload(true)  
}
restart.addEventListener('click', restartGame)

rock_div.addEventListener('click', function(){
    computerChoice = getComputerChoice()
    userChoiceSelection = "Rock"
    if(computerChoice === "Scissors"){
        win(userChoiceSelection,computerChoice)
        gameOver()
    
    }
    if(computerChoice === "Paper"){
        lose(userChoiceSelection,computerChoice)
        gameOver()
    }
    if(computerChoice  === "Rock"){
        draw(userChoiceSelection,computerChoice)
        gameOver()
    }
})  

paper_div.addEventListener('click', function(){
    // gameOver()
    computerChoice = getComputerChoice()
    userChoiceSelection = "Paper"
    if(computerChoice === "Rock"){
        win(userChoiceSelection,computerChoice)
        // gameOver()
    }
    if(computerChoice  === "Paper"){
        draw(userChoiceSelection,computerChoice)
        // gameOver()
    }
    if(computerChoice  === "Scissors"){
        lose(userChoiceSelection,computerChoice)
        // gameOver()
     }
})

scissores_div.addEventListener('click', function(){
    computerChoice = getComputerChoice()
    userChoiceSelection = "Scissors"
    if(computerChoice === "Rock"){
        lose(userChoiceSelection,computerChoice)
        // gameOver()
        
    }
    if(computerChoice === "Paper"){
        win(userChoiceSelection,computerChoice)
        // gameOver()
    }
    if(computerChoice === "Scissors"){
        draw(userChoiceSelection,computerChoice)
        // gameOver()
    }
})




//click play button ,
//show three imgs
//user choose one img to click,the img clicked addeventListener
// computer random
// if conditional
// creat user object{name,score},add action method
// if user win,user score++,if user lose ,computer score++
// if score = 10,game over