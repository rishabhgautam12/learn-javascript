const prompt =require('prompt-sync')();
function guessNum() {

    // generating a random integer from 1 to 10
    let rand = Math.floor(Math.random() * 100);
    rand+=1;
    
    let num = parseInt(prompt("Guess a number from 1 to 10: "));

    while(num !== rand) {
        if(num>rand){
            console.log("your guess is too large")
        }
        else{
            console.log("your guess is too small")
        }
        num = parseInt(prompt(" Guess a number from 1 to 10: "));
    }

    if(num == rand) 
        console.log("You guessed the correct number.");
    
 
}
guessNum();