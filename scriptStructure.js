
var pointsScored = 0;
var input1 = document.getElementById('input1')
function QuizQuestion () {
    this.question,
    this.image,
    this.input1 = "",
    this.input2,
    this.input3,
    this.correctAnswer,
    this.difficultylabel,
    this.explanation
}

QuizQuestion.prototype.checkAnswer = function () {
    document.getElementById("checkbtn").addEventListener("click", function () {
        if(document.getElementsByTagName(form).checked.innerHTML = this.correctAnswer) {
            alert ("You did it! :)");
            alert (this.explanation);
            pointsScored +=1 ; 
            return true;
        } else if (document.getElementsByTagName(form).checked.innerHTML != this.correctAnswer) {
            alert ("Well wrong answer! Let's try again on the next question");
            alert (this.explanation);
            return false;
        } 
    })
};

QuizQuestion.prototype.checkIfSelected = function () {
    document.getElementById("checkbtn").addEventListener("click", function () {
        if(document.getElementsByTagName(form).checked) {
            return true;
        } else {
          alert ("You must select a button");
          return false;
        }
    })
};

QuizQuestion.prototype.appendText = function () {
    // $("#question-text").append(this.question)
    document.getElementById("question-text").innerHTML = this.question;
    // $("#input1").html(this.input1);
    // $('#input1').val(this.input1);
    document.getElementById("input1").innerHTML = this.input1;
    document.getElementById("input2").innerHTML = this.input2;
    document.getElementById("input3").innerHTML = this.input3;
    }
    




// $("#input1").attr('value', this.input1);
// $("#input2").attr('value', `${this.input2}`);
// $("#input2").attr('value', `${this.input3}`);

// QuizQuestion.prototype.checkDiffficulty = function () {
// };