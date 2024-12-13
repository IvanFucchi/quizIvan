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
  const totalQuestions = questions.length;
  
  const showQuestion = () => {
      const question = questions[currentQuestionIndex];
  
      // Aggiorna il testo della domanda
      document.querySelector(".question-section h2").innerHTML = question.question;
  
      // Aggiorna il contatore delle domande esistente
      document.getElementById("current-question").textContent = currentQuestionIndex + 1;
      document.getElementById("total-questions").textContent = `/ ${totalQuestions}`;
  
      const answersSection = document.querySelector(".answers-section");
      answersSection.innerHTML = ""; // Pulizia delle risposte precedenti
  
      // Miscelazione casuale delle risposte
      const allAnswers = [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5);
  
      allAnswers.forEach(answer => {
          const button = document.createElement("button");
          button.className = "answer-option";
          button.textContent = answer;
  
          // Gestore clic risposta
          button.onclick = () => handleAnswer(answer === question.correct_answer);
  
          answersSection.appendChild(button);
      });
  };
  
  const handleAnswer = (isCorrect) => {
      if (isCorrect) score++; // Incrementa il punteggio se la risposta è corretta
      goToNextQuestion();
  };
  
  const goToNextQuestion = () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < totalQuestions) {
          clearTimeout(timer);
          startTimer();
          showQuestion();
      } else {
          // Salva il punteggio in sessionStorage per usarlo nella pagina dei risultati
          sessionStorage.setItem("score", score);
          sessionStorage.setItem("totalQuestions", totalQuestions);
  
          // Reindirizza alla pagina dei risultati
          window.location.href = "results.html";
      }
  };
  
  const startTimer = () => {
      let timeLeft = 30; // Tempo limite per ogni domanda
      const timerElement = document.getElementById("timer-value");
      timerElement.textContent = timeLeft;
  
      timer = setInterval(() => {
          timeLeft--;
          timerElement.textContent = timeLeft;
          if (timeLeft <= 0) {
              clearInterval(timer);
              goToNextQuestion(); // Passa automaticamente alla prossima domanda
          }
      }, 1000);
  };
  
  // Inizializzazione
  showQuestion();
  startTimer();
  
  