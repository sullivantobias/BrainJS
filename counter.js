const BrainJS = require('Brain.js');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const counterData = [];

readline.question('I want to learn how to count. Tell me a sequence of digits ? ', firstSeq => {
  const netWork = new BrainJS.recurrent.LSTMTimeStep();
  const res = firstSeq.split('').map(numb => Number(numb));

  counterData.push(res);
  netWork.train(counterData);

  console.log(`i guess the next number is : ${netWork.run(res)}`);

  readline.question('I"m bad, tell me the sequence with the last digit ?', learnSeq => {
    counterData.push(learnSeq);
    netWork.train(counterData);

    readline.question('Tell me the same sequence of numbers without the last number, i want to try ? ', sameSeq => {
      console.log(`i guess the next number is : ${netWork.run(sameSeq)}`);

      readline.close();
    })
  });
});