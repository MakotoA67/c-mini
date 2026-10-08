let currentQuestion = 0;
let correctCount = 0;
let answeredCount = 0;

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const codeBlock = document.getElementById("code-block");
const choicesArea = document.getElementById("choices");
const resultArea = document.getElementById("result");
const explanationArea = document.getElementById("explanation");
const scoreArea = document.getElementById("score");
const nextButton = document.getElementById("next-button");

function showQuestion() {
    const q = questions[currentQuestion];

    questionNumber.textContent =
        `問題 ${currentQuestion + 1} / ${questions.length}`;

    questionText.textContent = q.question;

    codeBlock.textContent = q.code;

    choicesArea.innerHTML = "";
    resultArea.textContent = "";
    explanationArea.textContent = "";

    updateScore();

    nextButton.textContent = "次の問題";
    nextButton.disabled = true;

    q.choices.forEach((choice, index) => {
        const button = document.createElement("button");

        button.textContent = choice;
        button.className = "choice-button";

        button.addEventListener("click", () => {
            checkAnswer(index);
        });

        choicesArea.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const q = questions[currentQuestion];

    const buttons =
        choicesArea.querySelectorAll(".choice-button");

    buttons.forEach(button => {
        button.disabled = true;
    });

    answeredCount++;

    if (selectedIndex === q.answer) {
        resultArea.textContent = "正解！";
	explanationArea.textContent = q.explanation;
        correctCount++;
    } else {
        resultArea.textContent = "不正解";

	if (q.feedback && q.feedback[selectedIndex]) {
		explanationArea.textContent = q.feedback[selectedIndex] + "\n\n" + q.explanation;

	} else {
		explanationArea.textContent = q.explanation;
	}
    }

    updateScore();

    nextButton.disabled = false;

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "結果を見る";
    }
}

function updateScore() {
    if (answeredCount === 0) {
        scoreArea.textContent =
            "正解数 0 / 0　正答率 0%";
        return;
    }

    const correctRate =
        Math.round(correctCount / answeredCount * 100);

    scoreArea.textContent =
        `正解数 ${correctCount} / ${answeredCount}　正答率 ${correctRate}%`;
}

function showResult() {
    const correctRate =
        Math.round(correctCount / questions.length * 100);

    questionNumber.textContent = "結果";
    questionText.textContent = "おつかれさまでした！";

    codeBlock.textContent = "";
    choicesArea.innerHTML = "";

    resultArea.textContent =
        `${questions.length}問中 ${correctCount}問正解`;

    explanationArea.textContent =
        `正答率は ${correctRate}% でした。`;

    scoreArea.textContent = "";

    nextButton.textContent = "もう一度挑戦する";
    nextButton.disabled = false;
}

function restartQuiz() {
    currentQuestion = 0;
    correctCount = 0;
    answeredCount = 0;

    showQuestion();
}

nextButton.addEventListener("click", () => {
    if (questionNumber.textContent === "結果") {
        restartQuiz();
        return;
    }

    if (currentQuestion === questions.length - 1) {
        showResult();
        return;
    }

    currentQuestion++;

    showQuestion();
});

showQuestion();
