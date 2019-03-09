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

// Timer

var counter;
var timeleft;

function myTimer() {
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if (timeleft <= 0) {
    document.getElementById("countdown").innerHTML = "Your time has ended!"
    $("input[type=radio]").attr('disabled', true);
  }
};


function myStopFunction() {
  clearInterval(counter);
}

// Sound effects

var correctBeep = new Audio("./src/sounds/correct.wav"); 
var wrongBeep = new Audio("./src/sounds/wrong.wav"); 
var nextBeep = new Audio('./src/sounds/next.wav');


// First pages

QuizGame.prototype.load = function () {
  $("#hello").show();
  $("#rules").hide();
  $("#quiz").hide();
}

QuizGame.prototype.hello = function () {
  $("#hellobtn").click(function() {
    nextBeep.play();
    $("#hello").hide();
    $("#rules").show();
});
};

QuizGame.prototype.start = function (game) {
  $("#startbtn").click(function() {
    nextBeep.play();
    $("#rules").hide();
    $("#quiz").show();
    $('#alert3').hide();
    game.questions[0].showQuestion();
    timeleft = 10;
    counter = setInterval(myTimer, 1000);   
    });    
};


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

 // Next Page Button

 var game = new QuizGame
 function nextPage (game) {
    document.getElementById("nextbtn").addEventListener("click", function() {
      if (game.index <= 19) {
        nextBeep.play();
        $("input[type=radio]").attr('disabled', false);
        $('.alert').hide();
        $('#checkbtn').prop('disabled', false);
        game.index++;
        game.questions[game.index].showQuestion();
        myStopFunction();
        timeleft = 10;
        counter = setInterval(myTimer, 1000);   
      } else {
        $('#alert3').dialog();
        }  
  });
};

// Previous Page Button
   function previousPage (game) {
    document.getElementById("previousbtn").addEventListener("click", function() {
        game.questions[game.index - 1].showQuestion();
        game.index--;
    });
  };



