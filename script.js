// const scoreBoard = querySelector(".score board")
// const userBoard = querySelector("#user board")
// const userScore = querySelector("#user score")
// const computerScore = querySelector("#computer score")
// const result = querySelector(".result")





// const btn = document.querySelector("button")
//btn.addEventListener('click', function(evt){
const userChoice = document.querySelector('.choices')
const imgChoice = document.querySelector(".choice")
const rock_div = document.querySelector("#rock")
const paper_div = document.querySelector("#paper")
const scissores_div = document.querySelector("#scissors")
let userScore = 0
let computerScore = 0
function getComputerChoice(){
    const choice = ["rock","paper","scissors"]
    const computerRandom = Math.floor(Math.random()*3)
    return choice[computerRandom]
}
getComputerChoice() //why not work in eventListener



rock_div.addEventListener('click', function(){
    getComputerChoice()
    const choice = ["rock","paper","scissors"] //function cannot work,need redefine here
    const computerRandom = Math.floor(Math.random()*3)
 
    if(choice[computerRandom] === "scissors"){
        console.log("rock covers scissors, you win!")
        userScore++
    }
    if(choice[computerRandom]  === "paper"){
        console.log("rock cannot cover paper, you lose!")
        computerScore++
    }
    if(choice[computerRandom]  === "rock"){
        console.log("It's a draw")
    }
})  

paper_div.addEventListener('click', function(){
    const choice = ["rock","paper","scissors"]
    const computerRandom = Math.floor(Math.random()*3)
     
    if(choice[computerRandom] === "rock"){
        console.log("scissors cannnot cover rock , you lose!")
        computerScore++
    }
    if(choice[computerRandom]  === "paper"){
        console.log("scissors covers paper, you win!")
        userScore++
    }
    if(choice[computerRandom]  === "scissors"){
        console.log("It's a draw")
     }
})

scissores_div.addEventListener('click', function(){
    const choice = ["rock","paper","scissors"]
    const computerRandom = Math.floor(Math.random()*3)  
    if(choice[computerRandom] === "rock"){
        console.log("paper covers rock, you win!")
        userScore++
    }
    if(choice[computerRandom]  === "paper"){
        console.log("It's a draw")
        userScore++
    }
    if(choice[computerRandom] === "scissors"){
        console.log("paper cannot cover scissors, you lose!")
        computerScore++
    }
})

    // return
    // })
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