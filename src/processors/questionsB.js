const fs = require('fs');
const rawInput = require('../raw/questionsB');

const processQuestions = () => {
  let file = {};
  let questions = rawInput.split(/\s*Q:\s+/).map((question) => {
    let qObj = {};
    let tempQ = question.split('\n');
    qObj.question = tempQ[0];
    let tempA = tempQ.slice(1).join('\n');
    qObj.answer = tempA;
    return qObj;
  });
  file.questions = questions.slice(1);
  console.log(questions);
  fs.writeFile('../questionsB.json', JSON.stringify(file), function (err) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log('Saved!');
  });
};

processQuestions();
