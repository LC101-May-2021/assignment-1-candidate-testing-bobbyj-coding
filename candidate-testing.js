const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
// Define questions and correctAnswers variables as arrays. Use the table below to fill these arrays.
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name. ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question);

  // Replace your code from TODO 1.2b with a loop that programmatically asks each question in the array and stores the user's responses.

  // candidateAnswers = input.question(questions[i]);
  for (let i = 0; i < questions.length; i++) {
    let variable = input.question(questions[i]);
    let candidateInput = "";
    candidateInput = variable.toLowerCase(); // Each reply is automatically converted to lower case
    // Checking for the correct answer should be case insensitive (e.g. "Orbit" is the same as "orbit")
    candidateAnswers.push(candidateInput);

  }
  
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  /* if (candidateAnswer === correctAnswer) {
    console.log("Congratulations. Sally Ride is correct!");
  } else {
    console.log("Your answer is incorrect.");
  }
  */

let grade = 0;
let percentage = 0;

// Below converts items in correctAnswers array to lower case
let correctAnswersLower = [];
for (i = 0; i < correctAnswers.length; i++) {
  correctAnswersLower[i] = correctAnswers[i].toLowerCase();
}

correctAnswers = correctAnswersLower; // now lower case

  // Compare the candidate answers with the correct answers
  for (let i = 0; i < correctAnswers.length; i++) {
    if (candidateAnswers[i] == correctAnswers[i]) {
      grade = grade + 1;
    } else {
      grade = grade;
    }
  }

/*  let grade;


  return grade;

*/

  percentage = grade / correctAnswers.length * 100;

  // Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate's responses in addition to the corresponding correct answers.
  for (let i = 0; i < correctAnswers.length; i++) {
    console.log(`${[i+1]}) ${questions[i]}`);
    console.log(`Your answer:  ${candidateAnswers[i]}`);
    console.log(`Correct answer:  ${correctAnswers[i]} \n`);
  }

  if (grade >= 4) {
    console.log(`>>> Overall Grade:  ${percentage}% (${ grade } of 5 responses correct) <<<\n>>> Status:  PASSED <<<`);
  } else {
    console.log(`>>> Overall Grade:  ${percentage}% (${ grade } of 5 responses correct) <<<\n>>> Status:  FAILED <<<`);
}

} 

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Greetings " + candidateName + ".");

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}; 

/* 

const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name. ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer = input.question(question); 

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if (candidateAnswer == correctAnswer) {
    console.log("Congratulations. Sally Ride is correct!");
  } else {
    console.log("Your answer is incorrect.");
  }

// my code inserted here

// Takes user input responses and stores them into candidateAnswers array
for (let i = 0; i < questions.length; i++) {
  let variable = input.question(questions[i]);
  let candidateInput = "";
  candidateInput = variable.toLowerCase(); // Each reply is automatically converted to lower case
  candidateAnswers.push(candidateInput);
}

let grade = 0;
let percentage = 0;

// User answers are compared to correct answers and grade is calculated
for (let i = 0; i < correctAnswers.length; i++) {
  if (candidateAnswers[i] == correctAnswers[i]) {
    grade = grade + 1;
  } else {
    grade = grade;
  }
}

percentage = grade / correctAnswers.length * 100;

if (grade >= 4) {
  console.log(`Overall Grade:  ${percentage}% (${ grade } of 5 responses correct)\nStatus:  PASSED`);
} else {
  console.log(`Overall Grade:  ${percentage}% (${ grade } of 5 responses correct)\nStatus:  FAILED`);
}

// my code ended... return to previous

  //let grade;


  //return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Greetings " + candidateName + ".");

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}; 

*/