// Constructors
var quiz;

function QuizQuestion(question, image, input1, input2, input3, correctAnswer, difficultylabel, explanation) {
  this.question = question;
  this.image = image;
  this.input1 = input1;
  this.input2 = input2;
  this.input3 = input3;
  this.correctAnswer = correctAnswer;
  this.difficultylabel = difficultylabel;
  this.explanation = explanation;
}

QuizQuestion.prototype.showQuestion = function() {
  document.getElementById("question-text").innerHTML = this.question;
  document.getElementById("question-img").src = this.image;
  document.getElementById("label1").innerHTML = this.input1;
  document.getElementById("input1").setAttribute("value", this.input1);
  document.getElementById("label2").innerHTML = this.input2;
  document.getElementById("input2").setAttribute("value", this.input2);
  document.getElementById("label3").innerHTML = this.input3;
  document.getElementById("input3").setAttribute("value", this.input3);
};

function QuizGame(questions, index, pointsScored) {
  this.questions = questions;
  this.index = index;
  this.pointsScored = pointsScored;
}

QuizGame.prototype.updatePointsTable = function() {
    document.getElementById("points").innerHTML = this.pointsScored;
}


// Check Button

QuizGame.prototype.checkAnswer = function () {
    if ($("input[type=radio]:not(:checked)").length === 3) {
      alert("You must select one country");
      return false;
    } else  if ($("input[type=radio]:checked").val() === this.questions[this.index].correctAnswer) {
        alert("You did it! :)");
        alert(this.questions[this.index].explanation);
        
        if (this.questions[this.index].difficultylabel === 1) {
            this.pointsScored += 1;
        }
        else if (this.questions[this.index].difficultylabel === 2) {
            this.pointsScored += 2;
        }
        else if (this.questions[this.index].difficultylabel === 3) {
            this.pointsScored += 3;
        }   
        return true;
      } else if ($("input[type=radio]:checked").val() != this.questions[this.index].correctAnswer) {
        alert("Well wrong answer! Let's try again on the next question");
        alert(this.questions[this.index].explanation);
        return false;
      }
  }

 // Next Page Button
 
 function nextPage (game) {
    document.getElementById("nextbtn").addEventListener("click", function() {
        game.questions[game.index + 1].showQuestion();
        game.index++;
    });
  };

// Previous Page Button
   function previousPage (game) {
    document.getElementById("previousbtn").addEventListener("click", function() {
        game.questions[game.index - 1].showQuestion();
        game.index--;
    });
  };
