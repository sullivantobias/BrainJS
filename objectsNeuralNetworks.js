const BrainJS = require('Brain.js');

const ambiant = [
  { hot: 1, cold: 0 },
  { hot: 0, cold: 1 },
  { hot: 0.8, cold: 0.2 },
  { hot: 0.1, cold: 0.9 },
  { hot: 0.3, cold: 0.7 },
];

const colors = [
  { red: 1, blue: 0.1, grey: 0.1 },
  { red: 1, blue: 0.9, grey: 0.9 },
  { red: 0.8, blue: 0.2, grey: 0.2 },
  { red: 0.2, blue: 0.8, grey: 0.9 },
  { red: 0, blue: 0.9, grey: 0.7 },
];

const trainingData = [];

for (let i = 0; i < colors.length; i++) {
  trainingData.push({
    input: ambiant[i],
    output: colors[i]
  });
}

const net = new BrainJS.NeuralNetwork({ hiddenLayers: [12, 6, 3]});

net.train(trainingData);

console.log(net.run({
  hot: 0.1, cold: 0.9
}));