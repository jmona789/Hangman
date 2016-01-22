var Letter = require("./letter.js");

var Word = function(wrd){
  this.word = wrd;
  this.lets = [];
  this.found = false;
  this.getLets = function(){
    for (var i = 0; i < this.word.length; i++){
      letter = this.word.charAt(i);
      var let = new Letter(letter);
      this.lets.push(let);
    }
  }
  this.checkIfLetterFound = function(guessLetter){
    whatToReturn = 0;
    for (var i = 0; i < this.lets.length; i++){
      if (this.lets[i].chrac === guessLetter){
        this.lets[i].appear = true;
        whatToReturn += 1;
      }
    }
  }
  this.didWeFindTheWord = function(){
    this.lets.every(function(curLet){
      if (curLet.appear === true){
        this.found = true;
        return this.found;
      }
    })
  }
  this.wordRender = function(){
    var str = "";
    for (var i = 0; i < this.lets.length; i++){
      str += this.lets[i].letterRender(this.lets[i])
    }
  }
}

module.exports = Word;