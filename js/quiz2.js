// ==========================================
// GERBOO TRADING ACADEMY
// CURRENCY PAIRS QUIZ
// ==========================================

const questions = [

    {
        question: "What is the first currency in a currency pair called?",

        answers: {
            A: "Quote currency",
            B: "Base currency",
            C: "Minor currency",
            D: "Exotic currency"
        },

        correct: "B"
    },


    {
        question: "In EUR/USD, which currency is the base currency?",

        answers: {
            A: "USD",
            B: "GBP",
            C: "EUR",
            D: "JPY"
        },

        correct: "C"
    },


    {
        question: "In EUR/USD, which currency is the quote currency?",

        answers: {
            A: "EUR",
            B: "USD",
            C: "GBP",
            D: "JPY"
        },

        correct: "B"
    },


    {
        question: "Which of the following is a major currency pair?",

        answers: {
            A: "EUR/USD",
            B: "EUR/GBP",
            C: "USD/KES",
            D: "GBP/JPY"
        },

        correct: "A"
    },


    {
        question: "Which statement about exotic currency pairs is correct?",

        answers: {
            A: "They always include two major currencies",
            B: "They only contain the US dollar",
            C: "They generally combine a major currency with a currency from a smaller or emerging economy",
            D: "They have no trading risk"
        },

        correct: "C"
    }

];


// ==========================================
// QUIZ VARIABLES
// ==========================================

let currentQuestion = 0;

let score = 0;

let selectedAnswer = false;


// ==========================================
// ELEMENTS
// ==========================================

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const nextButton =
    document.getElementById("nextBtn");

const feedbackElement =
    document.getElementById("feedback");

const questionNumber =
    document.getElementById("questionNumber");

const questionCount =
    document.getElementById("questionCount");

const progressPercent =
    document.getElementById("progressPercent");

const progressFill =
    document.getElementById("progressFill");

const questionCard =
    document.querySelector(".question-card");

const resultCard =
    document.getElementById("resultCard");

const scoreElement =
    document.getElementById("score");

const resultTitle =
    document.getElementById("resultTitle");

const resultMessage =
    document.getElementById("resultMessage");

const retryButton =
    document.getElementById("retryBtn");


// ==========================================
// LOAD QUESTION
// ==========================================

function loadQuestion() {

    const current = questions[currentQuestion];

    questionElement.textContent =
        current.question;

    questionNumber.textContent =
        currentQuestion + 1;

    questionCount.textContent =
        String(currentQuestion + 1).padStart(2, "0");


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;


    progressPercent.textContent =
        `${progress}%`;


    progressFill.style.width =
        `${progress}%`;


    answersElement.innerHTML = "";

    feedbackElement.textContent = "";

    nextButton.disabled = true;

    selectedAnswer = false;


    Object.entries(current.answers).forEach(
        ([letter, answer]) => {

            const button =
                document.createElement("button");

            button.className = "answer";

            button.dataset.answer = letter;

            button.innerHTML = `
                <span>${letter}</span>
                ${answer}
            `;


            button.addEventListener(
                "click",
                () => selectAnswer(button, letter)
            );


            answersElement.appendChild(button);

        }
    );

}


// ==========================================
// SELECT ANSWER
// ==========================================

function selectAnswer(button, answer) {

    if (selectedAnswer) return;

    selectedAnswer = true;


    const correctAnswer =
        questions[currentQuestion].correct;


    const allAnswers =
        document.querySelectorAll(".answer");


    allAnswers.forEach(answerButton => {

        answerButton.disabled = true;

    });


    if (answer === correctAnswer) {

        score++;


        button.style.borderColor =
            "#22c55e";

        button.style.background =
            "#10251a";


        feedbackElement.textContent =
            "Correct! Well done.";


        feedbackElement.style.color =
            "#22c55e";

    }

    else {

        button.style.borderColor =
            "#ef4444";

        button.style.background =
            "#2a1515";


        feedbackElement.textContent =
            `Not quite. The correct answer is ${correctAnswer}.`;


        feedbackElement.style.color =
            "#ef4444";

    }


    nextButton.disabled = false;

}


// ==========================================
// NEXT QUESTION
// ==========================================

nextButton.addEventListener("click", () => {

    currentQuestion++;


    if (currentQuestion < questions.length) {

        loadQuestion();

    }

    else {

        showResult();

    }

});


// ==========================================
// SHOW RESULT
// ==========================================

function showResult() {

    questionCard.style.display = "none";

    resultCard.style.display = "block";


    scoreElement.textContent =
        `${score}/${questions.length}`;


    const percentage =
        (score / questions.length) * 100;


    if (percentage >= 80) {

        resultTitle.textContent =
            "Excellent Work!";


        resultMessage.textContent =
            "You have a strong understanding of currency pairs.";

    }

    else if (percentage >= 60) {

        resultTitle.textContent =
            "Good Job!";


        resultMessage.textContent =
            "You understand the basics, but a little more review will help.";

    }

    else {

        resultTitle.textContent =
            "Keep Learning!";


        resultMessage.textContent =
            "Review Lesson 2 and try the quiz again.";

    }

}


// ==========================================
// RETRY QUIZ
// ==========================================

retryButton.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;


    questionCard.style.display =
        "block";


    resultCard.style.display =
        "none";


    loadQuestion();

});


// ==========================================
// START QUIZ
// ==========================================

loadQuestion();