const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS?"
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
  /* console.log(candidateAnswer);  
  for (i = 0; i < questions.length; i++) {
    //trialAnswers =[];
    //candidateAnswers[i] = [];
    candidateAnswers = input.question(questions[i]);
    candidateAnswers[i] = input.question('Enter Element ' + (i+1));
    //console.log(candidateAnswers + candidateAnswers[i]);
    //candidateAnswers.push(input.question(questions[i]));
    //console.log(candidateAnswers);
    //console.log(candidateAnswers[0]);
    /*candidateAnswers.shift();
    /*candidateAnswers[i].shift();
    /*candidateAnswers.push(questions[i]);
    
    
    /*trialAnswers = [];
    candidateAnswers = input.question(questions[i]);
    trialAnswers.concat(questions[i]);
    console.log(trialAnswers);
    
    }
    console.log(candidateAnswers);
}

console.log(candidateAnswers); */

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  if (candidateAnswer == correctAnswer) {
    console.log("Congratulations. Sally Ride is correct!");
  } else {
    console.log("Your answer is incorrect.");
  }

  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Greetings " + candidateName + ".");

  /* console.log(`For Question 1 [or ${questionNumber}], your answer was ${candidateAnswers}, while the correct answer was: ${correctAnswers} `) */
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