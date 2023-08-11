
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
   result.innerHTML = userChoiceSelection + " beats " + computerChoice + ", you win!"
}

function lose(userChoiceSelection,computerChoice){
    computerScore++
    userScore_span.textContent = userScore
    computerScore_span.textContent = computerScore
    result.innerHTML = userChoiceSelection + " beats " + computerChoice + ", you lose!"
}

 function draw(userChoiceSelection,computerChoice){
   
    userScore_span.textContent = userScore
    computerScore_span.textContent = computerScore
    result.innerHTML = userChoiceSelection + " beats " + computerChoice + ", It's a draw!"
 }


rock_div.addEventListener('click', function(){
    // getComputerChoice()
    computerChoice = getComputerChoice()
    userChoiceSelection = "Rock"
    if(computerChoice === "Scissors"){
        // console.log("rock covers scissors, you win!")
        win(userChoiceSelection,computerChoice)
       
    
    }
    if(computerChoice === "Paper"){
        // console.log("rock cannot cover paper, you lose!")
        lose(userChoiceSelection,computerChoice)
        // computerScore_span.innerHTML = computerScore
    }
    if(computerChoice  === "Rock"){
        console.log("It's a draw")
        draw(userChoiceSelection,computerChoice)
    }
})  

paper_div.addEventListener('click', function(){
    computerChoice = getComputerChoice()
    userChoiceSelection = "Paper"
    if(computerChoice === "Rock"){
        // console.log("scissors cannnot cover rock , you lose!")
        win(userChoiceSelection,computerChoice)
    }
    if(computerChoice  === "Paper"){
        // console.log("scissors covers paper, you win!")
        draw(userChoiceSelection,computerChoice)
    }
    if(computerChoice  === "Scissors"){
        lose(userChoiceSelection,computerChoice)
     }
})

scissores_div.addEventListener('click', function(){
    computerChoice = getComputerChoice()
    userChoiceSelection = "Scissors"
    if(computerChoice === "Rock"){
        // console.log("paper covers rock, you win!")
        lose(userChoiceSelection,computerChoice)
        
    }
    if(computerChoice === "Paper"){
        // console.log("It's a draw")
        win(userChoiceSelection,computerChoice)
    }
    if(computerChoice === "Scissors"){
        // console.log("paper cannot cover scissors, you lose!")
        draw(userChoiceSelection,computerChoice)
    }
})

//     if(userScore === 10 || computerScore === 10){
//         console.log("Game over!")
//     }
//  })
// })
//  })


//click play button ,
//show three imgs
//user choose one img to click,the img clicked addeventListener
// computer random
// if conditional
// creat user object{name,score},add action method
// if user win,user score++,if user lose ,computer score++
// if score = 10,game over