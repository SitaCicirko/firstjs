console.log("Hello world!");

let myName = "Bob";
console.log(myName);

let age = 30;
console.log(age);

let elevationGain = 800;
let trailLength = 5;
let peakHeight = 2500;
let totalStats = elevationGain + trailLength + peakHeight;
console.log("Total stats:", totalStats);

let part1 = "Hiking up";
let part2 = "the mountain";
let part3 = "was breathtaking!";
let hikingSentence = part1 + " " + part2 + " " + part3;
console.log(hikingSentence);

let boots = "Trail shoes";
let pack = "Daypack";
console.log("Before swap: boots =", boots, ", pack =", pack);

let temp = boots;
boots = pack;
pack = temp;

console.log("After swap: boots =", boots, ", pack =", pack);
