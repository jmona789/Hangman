var prompt = require("prompt");
prompt.start();
var Word = require("./word.js");

var game = {
  wordBank :["javascript", "developer", "software engineer", "apple", "hardware", "back end", "front end"],
  guessesRemaining : 10,
  currentWrd : null,
  startGame : function(){
    num = Math.floor(Math.random() * (7 - 1) + 1)
    var word = new Word(this.wordBank[num]);
    this.currentWrd = word;
    this.currentWrd.getLets();
    this.keepPromptingUser();
  },
  keepPromptingUser : function(){
    var self = this;
    prompt.get(["guessLetter"], function(err, result){
      console.log("The letter or space you guessed is " + result.guessLetter);
      var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);
      if (findHowManyOfUserGuess === 0){
        console.log("You guessed wrong!");
        self.guessesRemaining -= 1;
      }else{
        console.log("You guessed right!")
        if (self.currentWrd.didWeFindTheWord() === true){
          console.log("You Won!!");
          return 1;
        }else{
          console.log("guessesRemaining:" + self.guessesRemaining);
          console.log(self.currentWrd.wordRender());
        }
      }
      if (self.guessesRemaining > 0 && self.currentWrd.found === false){
        self.keepPromptingUser();
      }
      else if(self.guessesRemaining === 0){
        console.log("Game over bro");
        console.log("The word was" + self.currentWrd.word);
      }else{
        console.log(self.currentWrd.wordRender());
      }
    });
  }
};

game.startGame();