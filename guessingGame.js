let maximum = parseInt(prompt("Enter the maximum num"));
while(!maximum){
    maximum = parseInt(prompt("Enter a valid number"));
}
let target = (Math.floor(Math.random()*maximum)+1);
let guess = (prompt("Enter a guess num"));
let attempts = 1;
while(parseInt(guess) !== target){
    guess = parseInt(guess);
    if(guess === 'q') break;
    if(guess>target){
        guess = prompt("Number too high, Guess again.");
        attempts++;
    }
    else if(guess<target){
        attempts++;
        guess = prompt("Number too low, Guess again");
    }
    else{
        guess = prompt("Invalid guess. Guess again or 'q' to quit");
    }
}
if(guess === 'q'){
    console.log('exiting...');
}
else{
console.log(`You Guessed it Right!! after ${attempts} attempts`);
}