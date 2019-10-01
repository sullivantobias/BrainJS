const BrainJS = require('Brain.js');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


// days where social media is the most used
const socialMedias = {
  "Facebook": "Monday",
  "Instagram": "Tuesday",
  "Twitter": "Wednesday",
  "Snapchat": "Thursday",
};

const trainingData = [];

for (let name in socialMedias) {
  const days = socialMedias[name];
  trainingData.push({
    input: { [days]: 1 },
    output: { [name]: 1 }
  });
}

const netWork = new BrainJS.NeuralNetwork();

netWork.train(trainingData);

const retrieveName = day => {
  const result = netWork.run({
    [day]: 1
  });

  let maxPercentage = 0;
  let websiteName = '';
  for (let name in result) {
    if (result.hasOwnProperty(name)) {
      if (result[name] > maxPercentage) {
        maxPercentage = result[name];
        websiteName = name;
      }
    }
  }

  return websiteName;
};

readline.question('Choose a day of the week to know which socialMedia is the most used ! ', answer => {
  let res = retrieveName(answer);
  console.log(`Most used media on ${answer} is : ${res}`);

  const result = netWork.run({
    [answer]: 1
  });

  readline.question('Want to see full result ? (Y/N)', letter => {
    if (letter === 'Y') console.log(result);
    else readline.close();

    readline.close();
  })
});

