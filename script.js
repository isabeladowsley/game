
window.onload = function () {

    var pointsScored = 0;

    // var quiz = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]

    var question1 = new QuizQuestion ();
        question1.image = './src/images/pizza.jpg';
        question1.question = 'From which country is this dish?';
        question1.input1 = 'Thailand';
        question1.input2 = 'Italy';
        question1.input3 = 'Turkey';
        question1.correctAnswer = 'Italy';
        question1.difficultylabel = 'easy';
        question1.explanation = 'Pizza is a savory dish of Italian origin, consisting of a usually\
                            round, flattened base of leavened wheat-based dough topped with\
                            tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.)\
                            baked at a high temperature, traditionally in a wood-fired oven.';


    question1.appendText();

}




