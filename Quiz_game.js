const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "Which is the largest ocean on Earth?",
    choices: ["Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean"
  },
  {
    category: "Sports",
    question: "How many players are there in a soccer team?",
    choices: ["9", "11", "7"],
    answer: "11"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "John Adams"],
    answer: "George Washington"
  },
  {
    category: "Technology",
    question: "Which company created the iPhone?",
    choices: ["Apple", "Samsung", "Google"],
    answer: "Apple"
  }
];

function getRandomQuestion(questionsArray) {
  const index = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[index];
}
// 9. Function getRandomComputerChoice
function getRandomComputerChoice(choicesArray) {
  const index = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[index];
}

// 10–14. Function getResults
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}
const randomQuestion = getRandomQuestion(questions);
const computerAnswer = getRandomComputerChoice(randomQuestion.choices);
console.log("Question:", randomQuestion.question);
console.log("Computer Picked:", computerAnswer);
console.log(getResults(randomQuestion, computerAnswer));
