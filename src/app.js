require('dotenv').config();
const express = require('express');
const colors = require('colors');
const { QUESTION_SET } = require('./config');
const questionsA = require('./questionsA.json');
const questionsB = require('./questionsB.json');

const app = express();

app.use(express.static('public'));

// ********************
//    HELPER METHODS
// ********************
printQSet = () => {
  console.log(
    colors.magenta(
      `Question set is currently -------->  ${QUESTION_SET.toUpperCase()}`
    )
  );
};

resetStatus = () => {
  currentSet = QUESTION_SET;
  questionNum = 0;
  showAnswer = false;
  running = false;
};

showAnswer = (qs) => {
  const space = '                                                     ';
  const answer =
    typeof qs[questionNum].answer === 'string'
      ? qs[questionNum].answer
      : qs[questionNum].answer.join('\n');
  console.log(colors.green('\033[2A' + `${space}\n${space}` + answer));
};

showQuestion = (question) => {
  console.log(
    colors.bold.yellow(
      '________________________________________________________\n\n'
    )
  );
  console.log(colors.blue(question));
  console.log(colors.grey('\n<<< show answer? enter [ y / n ] >>>'));
  showingQuestion = true;
};

handleMoveOn = (qs) => {
  showingAnswer = false;
  questionNum++;
  if (qs[questionNum]) {
    showQuestion(qs[questionNum].question);
  } else if (currentSet === 'a' && QUESTION_SET === 'ab') {
    currentSet = 'b';
    questionNum = 0;
    console.log('Moving on to question set B!');
    console.log(colors.grey('\n<<< press ENTER when ready to move on >>>'));
    showingQuestion = false;
  } else {
    console.log(
      `\n You finished all the questions in question set ${QUESTION_SET}!!`
    );
    running = false;
    questionNum = 0;
    showingAnswer = false;
    currentSet = 'a';
    showingQuestion = false;
  }
};

const readline = require('readline');
const { toLowerCase } = require('./raw/questionsA');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const helpMsg = {
  guide:
    'To update the selected question set, type one of the following: A , B , AB ',
  commands: `Available Commands:
  A // set questionSet = A
  B // set questionSet = B
  AB // set questionSet = A & B
  start [ start the questions ]
  stop [ stop the questions ]
  skip [ skip a question ]`,
};
let running = false;
let currentSet = QUESTION_SET;
let questionNum = 0;
let showingAnswer = false;
let showingQuestion = false;

printQSet();
console.log(colors.yellow(helpMsg.guide));
rl.on('line', (input) => {
  input = input.toLowerCase();
  readline.moveCursor(process.stdout, 0, -1);

  if (input === 'help') {
    console.log(colors.yellow(helpMsg.commands));
  }

  // if questions haven't started yet
  if (!running) {
    if (input === 'a' || input === 'b' || input === 'ab') {
      QUESTION_SET = input;
    } else if (input === 'start') {
      running = true;
      currentSet = QUESTION_SET === 'ab' ? 'a' : QUESTION_SET;
      console.log(colors.yellow('press ENTER to begin the questions'));
    } else {
      console.log(
        colors.grey(
          'type [ start ] to begin, or type [ help ] for more information'
        )
      );
    }
  }
  // if questions have started
  else {
    const qs = currentSet === 'a' ? questionsA.questions : questionsB.questions;
    if (input === 'stop') {
      resetStatus();
      console.log('stopping quiz early...');
      console.log(helpMsg.guide);
    }

    if (!showingQuestion) {
      showQuestion(qs[questionNum].question);
      return;
    }

    if (input === 'skip') {
      handleMoveOn(qs);
    } else if (!showingAnswer) {
      if (input === 'y') {
        showAnswer(qs);
        showingAnswer = true;
        console.log(colors.grey('\n<<< press ENTER when ready to move on >>>'));
      }
      if (input === 'n') {
        showingAnswer = true;
        console.log(colors.grey('\n<<< press ENTER when ready to move on >>>'));
      }
      if (input === '') {
        showingAnswer = true;
        console.log(
          colors.grey('are you sure?\n<<< press ENTER to move on >>>')
        );
      }
    } else {
      if (input === 'y') {
        showAnswer(qs);
        showingAnswer = true;
        console.log(colors.grey('\n<<< press ENTER when ready to move on >>>'));
      }
      if (input === '') {
        handleMoveOn(qs);
      }
    }
  }
});

rl.on('close', function () {
  console.log(
    '\n-------------------------------------> ending process, bye now!'
  );
  process.exit(0);
});

app.get('/info', (req, res, next) => {
  //res.send(' this ');
});

module.exports = app;
