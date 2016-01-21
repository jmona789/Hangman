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
}