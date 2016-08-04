
//*********************************************************
// Universal Translator
//*********************************************************

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

// TODO: specify a home planet and a language
// you'll need to add parameters to this constructor

// TODO: sayHello() prints out (console.log's) hello in the
// language of the speaker, but returns it in the language
// of the listener (the sb parameter above).
// use the 'hello' object at the beginning of this exercise
// to do the translating
// console.log(hello.this);

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

function SentientBeing (homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language = language;
}

SentientBeing.prototype.sayHello = function(sb) {
  // console.log('"' + hello[this.language] + '" from ' + this.homePlanet + ' to ' + sb.homePlanet);
  return (hello[sb.language]);
};

function Human(){};
function Klingon(){};
function Romulan(){};

Human.prototype = new SentientBeing('Earth', 'federation standard');
Klingon.prototype = new SentientBeing('Qo\'noS', 'klingon');
Romulan.prototype = new SentientBeing('Romulus', 'romulan');

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

var munir = new Human();
var nadia = new Klingon();

assert((munir.sayHello(nadia)) === 'nuqneH',
  'Nadia should hear nuqneH');

function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}
