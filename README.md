Rock Paper Scissors Game/ Project 1

This game is my first project in the Web Development Immersive Program at Per Scholas. It is my version of Rock Paper Scissors Game.
Here is the github-pages website link: https://fan0703.github.io/First-Project-Rock-Paper-Scissors/
More information about the game: https://en.wikipedia.org/wiki/Rock_paper_scissors

Game Functions:

User select one of Rock Paper Scissors image, and computer will choose one of them randomly.

If Rock vs Rock, Scissors vs Scissors, Paper vs Paper, it's even.
If Rock vs Scissors, Scissors vs Paper, Paper vs Rock, it's win.
If Rock vs Paper, Scissors vs Rock, Paper vs Scissors, it's lose.

Who's score reaches 10 points first, who' wins and game over!
Restart button could play again.

Built With: HTML CSS Javascript

How I built this game:

First, I write the skeleton with pseudocode. Then I begin to write the HTML. I built out divs for each component of my game: score board, text, rock paper scissors image and restart button. I used Coolors (https://coolors.co/app)to get a color scheme for my project (All colors are noted in the css file), opting to use soft colors for all components.

Next came functionality. I knew I needed to make the images selected using addEventListener. So I assigned a ID to each image div. I set a variable for the chosen image, then pass it as one of parameters to the function related. Also I use the Math radom method and a array of "rock paper scissors" to decide what's the choice of computer, and also pass it as another parameter to the function. So that I had win ,lose and draw function which can use in addEventListener.

I was struggled by how to make the UI dynamic by using JavaScript.So I went over the lecture and assignment before. After that it's much easier to do it.

I creat a score board to record the points of user and computer and a result text to describe the game's process.

The game was coming together, but I needed the logic to follow the game rules. I used if statements to follow rule patterns, 

Lastly, I tried to make the code as dry as I possibly could, making reusable functions and calling them within the event listeners for each button.

All in all, this project helped me understand the knowledge better, looking back on the homework and labs, everything makes so much more sense... Go figure...

Acknowledgements

I'd like to thank our instructors, Tishana Trainor,Kasper Kain and Manara Ali for helping me solve the problems.
