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

// Sound effects

var correctBeep = new Audio("./src/sounds/correct.wav"); 
var wrongBeep = new Audio("./src/sounds/wrong.wav"); 


// Check Button

QuizGame.prototype.checkAnswer = function () {

    $('.alert').show();

    if ($("input[type=radio]:not(:checked)").length === 3) {
        wrongBeep.play();
        $('#alert1').addClass('alert-danger').text('You must select one country');
  
      return false;
    } else  if ($("input[type=radio]:checked").val() === this.questions[this.index].correctAnswer) {
        correctBeep.play();
        $('#alert1').removeClass('alert-danger').addClass('alert-success').text("You did it!");
        $('#alert2').addClass('alert-light').text(this.questions[this.index].explanation);
        
        if (this.questions[this.index].difficultylabel === 1) {
            this.pointsScored += 1;
        }
        else if (this.questions[this.index].difficultylabel === 2) {
            this.pointsScored += 2;
        }
        else if (this.questions[this.index].difficultylabel === 3) {
            this.pointsScored += 3;
        }   
        $('#checkbtn').prop('disabled', true);
        return true;
      } else if ($("input[type=radio]:checked").val() != this.questions[this.index].correctAnswer) {
        wrongBeep.play();
        $('#alert1').addClass('alert-danger').text("Well wrong answer! Let's try again on the next question");
        $('#alert2').addClass('alert-light').text(this.questions[this.index].explanation);
        $('#checkbtn').prop('disabled', true);
        return false;
      }
      
  }

 
  //   Timer setup

var timeleft = 10;

var counter = setInterval(myTimer, 1000);

function myTimer () {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
    if(timeleft <= 0){
         document.getElementById("countdown").innerHTML = "Your time has ended!"
          $("input[type=radio]").attr('disabled', true);
    }      
}

function myStopFunction() {
    clearInterval(counter);
}


 // Next Page Button

 
 function nextPage (game) {
    document.getElementById("nextbtn").addEventListener("click", function() {
        $("input[type=radio]").attr('disabled', false);
        $('.alert').hide();
        $('#checkbtn').prop('disabled', false);
        game.questions[game.index + 1].showQuestion();
        game.index++;
        myStopFunction();
        timeleft = 10;
        counter = setInterval(myTimer, 1000);        
  });
};

// Previous Page Button
   function previousPage (game) {
    document.getElementById("previousbtn").addEventListener("click", function() {
        game.questions[game.index - 1].showQuestion();
        game.index--;
    });
  };


//   Countdown function 


QuizGame.prototype.counter = function () {
  setInterval(alertFunc, 10000);
    function alertFunc () {
    alert('Time is over');
    $("input[type=radio]").attr('disabled', true);
};
};

 
