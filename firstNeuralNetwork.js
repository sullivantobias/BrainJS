const BrainJS = require('Brain.js');

const neuralNetwork = new BrainJS.NeuralNetwork({ hiddenLayers: [3] });

const data = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

neuralNetwork.train(data, {
  log: error => console.log(error),
  logPeroid: 100
});

console.log(neuralNetwork.run([1, 0]));