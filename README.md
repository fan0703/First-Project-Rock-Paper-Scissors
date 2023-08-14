Rock Paper Scissors Game/ Project 1

This game is my first project in the Web Development Immersive Program at Per Scholas. It is my version of Rock Paper Scissors Game.
More information about the game: https://en.wikipedia.org/wiki/Rock_paper_scissors

Game Functions:

User select one of Rock Paper Scissors image, and computer will choose one of them randomly.

If Rock vs Rock, Scissors vs Scissors, Paper vs Paper, it's even.
If Rock vs Scissors, Scissors vs Paper, Paper vs Rock, it's win.
If Rock vs Paper, Scissors vs Rock, Paper vs Scissors, it's lose.
<!-- When a tower (sending tower) is clicked, the topmost disk is selected, and it turns red. -->

<!-- When all disks are moved to the rightmost tower, the player wins! -->

<!-- Reset button places all disks in first tower. -->

Built With: HTML CSS Javascript

How I built this game:

<!-- First, I sketched onto paper how I wanted the game to appear in the browser. I also created user stories for the game, and made note of the rules. Once I began to code this project, I built out divs for each component of my game: disks, towers, the gameboard. I used Coolors (https://coolors.co/app)to get a color scheme for my project (All colors are noted in the css file), opting to use softer colors for all components, and keeping the brighter color to highlight the chosen disk.

I was frustrated by how the disks wouldn't stack over the towers visually. The disk divs offset the tower, making the make the game look weird. So I decided to take a screen shot of the three tower images I built in HTML/CSS (without the disks) and use that screen shot as a background image for the game. I used Flexbox to make the three tower divs align with the three towers in the image. I also used flex to keep the disks centered and sticky to the bottom of the tower divs.

Next came functionality. I knew I needed the most basic function, to make the disks move from one tower to another. So I assigned a variable to each tower div and to each disk. My original thought was to add a disk based on the id, but I was having difficulty targeting the disk in the DOM. When that failed, I opted to make a disk move to the next tower when the tower was clicked using addEventListener. I set a variable for the chosen disk, then added it to the next tower. This worked, but I was using the appendChild method and the disks were being added to the bottom, not the top. I used the insertBefore method to get the disk to the top. However, if a tower was empty, there was nothing to he insertBefore method, and I used the appendChild method for those cases. I was then able to move any disk to any tower by clicking the tower.

The game was coming together, but I needed the logic to follow the game rules. I used if/else if/else statements with boolean logic to follow rule patterns, added a variable to note when a disk is in play (making moving any other disk illegal), and my game was working according to the rules.

Lastly, I tried to make the code as dry as I possibly could, making reusable functions and calling them within the event listeners for each button.

All in all, this project was the most challening thing I've done! Also, looking back on the homework and labs, everything makes so much more sense... Go figure...

Acknowledgements

I'd like to thank our instructors, Hector Guevara and Don McLamb for challenging me to find the solutions on my own, and helping me "keep my problems small".

I'd also like to thank Jimmy Byess for helping me target the disks. That really propelled my project! -->