const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15; // 15 seconds per question

const questionSection = document.querySelector(".question-section h2");
const answersSection = document.querySelector(".answers-section");
const timerValue = document.getElementById("timer-value");
const currentQuestionLabel = document.getElementById("current-question");
const totalQuestionsLabel = document.getElementById("total-questions");
const timerContainer = document.getElementById("timer")

function startQuiz() {
  totalQuestionsLabel.textContent = ` / ${questions.length}`;
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  timeLeft = 15
  clearInterval(timer);
  startTimer();


  if (currentQuestionIndex >= questions.length) {
    endQuiz();
    return;
  }

  const questionObj = questions[currentQuestionIndex];

  // Display question text
  questionSection.innerHTML = questionObj.question;

  // Clear previous options
  answersSection.innerHTML = "";

  // Generate options
  const answers = [...questionObj.incorrect_answers, questionObj.correct_answer];
  shuffleArray(answers);

  answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-option");
    button.onclick = () => handleAnswer(answer);
    answersSection.appendChild(button);
  });

  currentQuestionLabel.textContent = currentQuestionIndex + 1;
}

function handleAnswer(selectedAnswer) {
  const questionObj = questions[currentQuestionIndex];

  // Check if answer is correct
  if (selectedAnswer === (questionObj && questionObj.correct_answer)) {

    score++;
  }

  // Move to the next question
  currentQuestionIndex++;
  displayQuestion();
}

function startTimer() {
 
  timerValue.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timerValue.textContent = timeLeft;

    if (timeLeft <= 0) {
      currentQuestionIndex++;
      displayQuestion();
      clearInterval(timer);
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timer);
  timerContainer.style.display = "none"
  questionSection.innerHTML = "<strong>Quiz Completed!</strong>";
  answersSection.innerHTML = `Your score: <strong>${score}/${questions.length}</strong>`;
  timerValue.textContent = "";
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Start the quiz when the page loads
startQuiz();
