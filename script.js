var questions = [
//{
 //   title: "A stereo miking technique is which of the following:",
 //   choices: ["Miking a stereo system to create feedback", "When two or more microphones are used in an array to capture a sound source", "two people staring into eachother's eyes while yelling the vowels 'E' and 'O' into their respective microphones","I don't friggin know, dude"],
  //  answer: "When two or more microphones are used in an array to capture a sound source"
//},

{
    title: "Who was responsible for being the first to pioneer multi-track recording and overdubbing, inventing the delay/echo audio effect in the process? Hint: they used tape machines",
    choices: ["Alan Blumlein", "The Beatles", "Les Paul", "Phil Spector"],
    answer: "Les Paul"
},

{
    title: "Which of the following frequencies will be the most unidirectional?",
    choices: ["82Hz", "54.5Hz", "1kHz", "4kHz" ],
    answer: "4kHz"
},

{
    title: "The fundamental frequency being sounded is 360hz. What would be the frequency exactly one octave above the fundamental frequency?",
    choices: ["620hz", "540hz", "690Hz", "720hz"],
    answer: "720hz"
},

{
    title: "The pickups on a guitar or dynamic microphone function through what process",
    choices: ["electro-magnetic transduction", "electro-magnetic conduction", "elctro-flux", "elctro-wavelength magnetism" ],
    answer: "electro-magnetic transduction"
},

{
    title: "The human ear has a frequency response peak in what spectrum of frequencies?",
    choices: ["2-6kHz","3-5kHz", "4-6khz", "1-4khz"],
    answer: "3-5kHz"
},

{
    title: "This type of data, vs audio data or a .wav file is not actual audio information but is data that tells a synth patch what notes to play: ",
    choices: [".mp3", ".flac", "MIDI", ".sound"],
    answer: "MIDI"
},

{
    title: "Located within the Cochlea, on the Basilar Membrane, a type of cell that transmits a neuro-chemical signal to the brain is called: ",
    choices: ["Stereocillia", "Cocillia", "Audiate", "Dancing Hair" ],
    answer: "Stereocillia"
},

{
    title: "What three ions are resonsible for charging the cells in the Cochlea?",
    choices: ["Sodium, Calcium, Iron", "Zinc, Calcium, Magnesium", "Potassium, Magnesium, Sodium", "Sodium, Calcium, Potassium"], 
    answer: "Sodium, Calcium, Potassium"
},

];

//Interval timer that counts down from 20

//var interval;
//var totalSeconds = 0;
//var secondsElapsed = 0;
var totalScore;
var currentQuestion = 0;
var expectedAnswer;
var questionStartTime;
var timeLimit = 20000 //20 seconds
function Start(){
document.getElementById("startButton").remove()
displayQuestion(0)
}

function displayQuestion(index){
    //set questionStartTime
    questionStartTime = new Date().getTime()
currentQuestion = index;
var Question = questions[index];
document.getElementById("title").innerHTML = Question.title
document.getElementById("choice0").innerHTML = Question.choices[0]
document.getElementById("choice1").innerHTML = Question.choices[1]
document.getElementById("choice2").innerHTML = Question.choices[2]
document.getElementById("choice3").innerHTML = Question.choices[3]
expectedAnswer = Question.answer;
document.getElementById("timer").innerHTML = 20;
setTimeout(timerEnded, timeLimit);
setInterval(function() {
    var currentTime = new Date().getTime()
    var timeElaspsed = (currentTime - questionStartTime)/1000;
    document.getElementById("timer").innerHTML = Math.ceil(20 - timeElaspsed)
}, 1000);

}

function timerEnded(){
 displayQuestion(currentQuestion + 1);

}

function buttonClicked() {

 // alert(event.srcElement.id)  // srcElement of the event is the button that was clicked
//alert(event.srcElement.id)
var buttonID = event.srcElement.id
var choiceIndex = 0 //which choice did they select?
//var timeStamp = new Date().getTime()
//var secondsElapsed = (timeStamp - questionStartTime)/1000;


if (buttonID == "choice0"){
    choiceIndex = 0;

}
else if (buttonID == "choice1"){
    choiceIndex = 1;

}
else if (buttonID == "choice2"){
    choiceIndex = 2;

}
else if (buttonID == "choice3"){
    choiceIndex = 3;

}
var Question = questions[currentQuestion];
var selectedChoice = Question.choices[choiceIndex];
if (selectedChoice == expectedAnswer){
    document.getElementById("answerRightWrong").innerHTML = "Correct!";
}
else{
    document.getElementById("answerRightWrong").innerHTML = "WRONG!";
}
setTimeout(function(){
displayQuestion(currentQuestion + 1);
document.getElementById("answerRightWrong").innerHTML = "";
}, 3000);
}




//Is triggered by the "begin game" button's onclick function
//resets to 20 seconds for every new question
// score (leftover seconds is recorded and added to total for game)
//Highscores (scores from highest to lowest) recorded in the local storage
//Ability to input intiials as a string to be stored and recorded next to the player's new score


//Each new question takes inputs of A, B, C, D multiple choice style
//has a submit function linked to which choice selected
//triggers a function that evaluates whether the answer is true or false
//If it's true, the amount of seconds left is added to the player's total 
//and an alert pops up telling them "Congrats, you got it right! Ready for the next question?"
//and when the player hits ok the next question is pulled up and timer starts going down from 20
//If it's false an alert pops up saying "Sorry, wrong answer. Ready for the next question?"
//and the leftover amount of seconds is not added to the total score
//pressing ok pulls up the next question and the timer starts going down from 20

//Build interval countdown clock
//Build five different question windows
//Each new window pulls questions from an array of strings