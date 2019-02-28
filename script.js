
window.onload = function () {

    var pointsScored = 0;

    var quiz = [question1, question2] 
    
    // question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20

    var question2 = new QuizQuestion ();
    question2.image = './src/images/opera.jpg';
    question2.question = 'In which country this building is situated?';
    question2.input1 = 'Japan';
    question2.input2 = 'South africa';
    question2.input3 = 'Australia';
    question2.correctAnswer = 'Australia';
    question2.difficultylabel = 'easy';
    question2.explanation = "The Sydney Opera House is a multi-venue performing'\
                             arts centre at Sydney Harbour in Sydney, Australia. \
                             It is one of the 20th century's most famous and distinctive buildings.\
                             The building was designed by Danish architect Jørn Utzon,\
                             the building was formally opened on 20 October 1973.";

    question2.appendText();
    question2.addImage();
    question2.checkAnswer();
    question2.checkIfSelected();
    question2.nextPage();
    question2.previousPage();

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
    question1.addImage();
    question1.checkAnswer();
    question1.checkIfSelected();
    question1.nextPage();
    question1.previousPage();






}




