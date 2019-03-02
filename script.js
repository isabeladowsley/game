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

function checkAnswer(question, game) {
  $("#checkbtn").click(function() {
    if ($("input[type=radio]:not(:checked)").length === 3) {
      alert("You must select one country");
      return false;
    } else  if ($("input[type=radio]:checked").val() === question.correctAnswer) {
        alert("You did it! :)");
        alert(question.explanation);
        game.pointsScored++;
        return true;
      } else if ($("input[type=radio]:checked").val() != question.correctAnswer) {
        alert("Well wrong answer! Let's try again on the next question");
        alert(question.explanation);
        return false;
      }
  });
}


 // Next Page Button

 
 function nextPage (game) {
    document.getElementById("nextbtn").addEventListener("click", function() {
    //   for (i = 0; i < game.questions.length; i++) {
        game.questions[game.index + 1].showQuestion();
        game.index++;
    });
  };

   // Previous Page Button

   function previousPage (game) {
    document.getElementById("previousbtn").addEventListener("click", function() {
    //   for (i = 0; i < game.questions.length; i++) {
        game.questions[game.index - 1].showQuestion();
        game.index--;
    });
  };

// Applying

window.onload = function() {
  var question1 = new QuizQuestion(
    "From which country is this dish?",
    "./src/images/pizza.jpg",
    "Thailand",
    "Italy",
    "Turkey",
    "Italy",
    "easy",
    "Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and other ingredients baked at a high temperature, traditionally in a wood-fired oven."
  );
  var question2 = new QuizQuestion(
    "In which country is this building situated?",
    "./src/images/opera.jpg",
    "Japan",
    "South Africa",
    "Australia",
    "Australia",
    "easy",
    "The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour in Sydney, Australia. It is one of the 20th century's most famous and distinctive buildings. The building was designed by Danish architect Jørn Utzon, and was formally opened on 20 October 1973."
  );

  quiz = new QuizGame([question1, question2], 0, 0);
    
  question1.showQuestion();


  checkAnswer(quiz.questions[quiz.index], quiz);
  nextPage(quiz);
  previousPage(quiz);

  quiz.updatePointsTable();






  // question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20]



 
 
};


