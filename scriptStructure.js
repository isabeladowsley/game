
var pointsScored = 0;
var quiz = [];
var currentQuestion = 0;

function QuizQuestion () {
    this.question,
    this.image,
    this.input1,
    this.input2,
    this.input3,
    this.correctAnswer,
    this.difficultylabel,
    this.explanation
}

QuizQuestion.prototype.appendText = function () {
    document.getElementById("question-text").innerHTML = this.question;
    document.getElementById("label1").innerHTML = this.input1;
    document.getElementById("label2").innerHTML = this.input2;
    document.getElementById("label3").innerHTML = this.input3;
    debugger
    }
    

QuizQuestion.prototype.addImage =  function () {
    var img = document.getElementById("question-img");
    img.src = this.image;
    img.width = 500;
    img.height = 260;
}

QuizQuestion.prototype.checkAnswer = function () {
    var correctAnswer = this.correctAnswer;
    var explanation = this.explanation;
    $('#checkbtn').click(function() { 
        debugger
        if ($("input[type=radio][checked]").val() === correctAnswer){
            alert ("You did it! :)");
            alert (explanation);
            pointsScored +=1 ; 
            console.log(pointsScored);
            return true;      
        } else if ($("input[type=radio][checked]").val() !== correctAnswer){
            debugger
            alert ("Well wrong answer! Let's try again on the next question");
            alert (explanation);
            return false;
        } 
    })
}

QuizQuestion.prototype.checkIfSelected = function () {
    document.getElementById("checkbtn").addEventListener("click", function () {
        if(document.getElementsByTagName(form).checked) {
            return true;
        } else {
          alert ("You must select a button");
          return false;
        }
    });
}

QuizQuestion.prototype.checkIfSelected = function () {

}

QuizQuestion.prototype.nextPage = function () {
    document.getElementById('nextbtn').addEventListener("click", function () {
    for (i=0 ; i < quiz.length; i++) {
        quiz[i].style.display = 'none';
        quiz[i + 1].style.display = 'block'
        }
    });
}

QuizQuestion.prototype.previousPage = function () {
    document.getElementById('previousbtn').addEventListener("click", function () {
    for (i=0 ; i < quiz.length; i++) {
        console.log('you did!');
        quiz[i].style.display = 'none';
        quiz[i - 1].style.display = 'block'
        }
    });
}



//     $('#btn').click(function(){
//         $(quiz.get(currentQuestion)).fadeOut(function(){
//             currentQuestion = currentQuestion + 1;
//             if(currentQuestion == 20){
//                    alert("You have scored "+ poinstScores + " out of 20");
//             }else{
//             $($questions.get(currentQuestion)).fadeIn();
//             }
//     });
// });
// }

// QuizQuestion.prototype.checkDiffficulty = function () {
// };
