//const { mainModule } = require('process');
const fs = require('fs');
const rawInput = require('../raw/questionsA');

const processQuestions = () => {
  let file = {};
  let questions = rawInput.split(/Q:\s*/).map(question => {
    let qObj = {}
    let tempQ = question.split(/\n+/);//replace(/\n+/g, "\n").split('\n');
    qObj.question = tempQ[0];
    let tempA = tempQ.slice(1).map(line => {
      let returnedLine = line;
      if(line[0] !== '-' && line[0] !== '(')
        returnedLine = '\n' + returnedLine;

      return returnedLine;
    });
    qObj.answer = tempA;
    return qObj;
  });
  file.questions = questions.slice(1);
  console.log(questions);
  fs.writeFile('../questionsA.json', JSON.stringify(file), function (err) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log('Saved!');
  });
}

processQuestions();