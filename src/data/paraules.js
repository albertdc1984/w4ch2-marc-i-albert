const paraules = ["hola", "commit", "coders", "penjat"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const paraula = paraules[getRandomInt(paraules.length)];

const lletraALletra = Array.from(paraula);

let paraulaObject = [];

lletraALletra.forEach((letterToArray) => {
  paraulaObject.push({
    text: letterToArray,
    utilitzat: false,
    encertat: false,
  });
});

export default paraulaObject;
