const BrainJS = require('Brain.js');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let hiddenLayers = 0;

const questionLayers = () => {
  return new Promise((resolve, reject) => {
    readline.question('How much layer(s) do you want ? ', answer => {
      hiddenLayers = answer;
      resolve()
    })
  })
};

let res = 0;

const questionInput = nn => {
  return new Promise((resolve, reject) => {
    readline.question('Give an array of two numbers (0 or 1) ! ', answer => {
      res = nn.run(answer);
      resolve()
    })
  })
};

const main = async () => {
  await questionLayers();

  const neuralNetwork = new BrainJS.NeuralNetwork({ hiddenLayers: [hiddenLayers] });

  const data = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
  ];

  neuralNetwork.train(data);

  await questionInput(neuralNetwork);

  readline.close();

  return res;
};

main()
    .then(brainRes => console.log(`Result of output : ${brainRes}`));