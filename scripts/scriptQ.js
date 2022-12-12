const quest = document.getElementById("q");
const btnO1 = document.getElementById("0");
const btnO2 = document.getElementById("1");
const btnO3 = document.getElementById("2");
const btnO4 = document.getElementById("3");
const totTime = document.getElementById("totalTime");
const quiz_box = document.querySelector(".quiz_box");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const next_btn = document.getElementById("btnNext");
const bottom_ques_counter = document.getElementById("totalQue");
const btnGetScores = document.getElementById("btnScores");

//IMPORT AND SELECT RANDOMLY A NUMBER OF QUIZ QUESTIONS--------------------

var maxNumberOfQuesions = 10;
var buttonId = "";
var score = 0;
var response = 0;
let que_count = 0;
let userScore = 0;
let counter;
let counterLine;

//1. Random number generator function to select a random quiz
function getRandomInt(maxValue) {
    let rv = Math.random();
    return Math.floor(rv * maxValue);
}

//2. popupale array with all quiz objects
var allQuizzes = getAllQuizzes();

//3. Select randomly e.g. 20 question IDs and populate quizzes array

var questions = [];
for (let i = 0; i < maxNumberOfQuesions; i++) {
    questions.push(allQuizzes[getRandomInt(allQuizzes.length)]);
}

//event.preventDefault();





// getting questions and options from array
function showQuetions(index) {
    quest.textContent = questions[index].q;
    btnO1.textContent = questions[index].options[0];
    btnO2.textContent = questions[index].options[1];
    btnO3.textContent = questions[index].options[2];
    btnO4.textContent = questions[index].options[3];
}









//This function gets the selected button id and chenages the background of the selected button.
//code modified from https://softauthor.com/make-selected-clicked-button-active-in-javascript/
let prevButton = null;
const wrapper = document.getElementById("wrapper");
wrapper.addEventListener('click', (e) => {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    e.target.classList.add('active'); // Add .active CSS Class
    buttonId = e.target.id;

    if (prevButton !== null) {
        prevButton.classList.remove('active');  // Remove .active CSS Class
    }
    prevButton = e.target;
    //Check answer
    if (questions[que_count].correctAnswer == buttonId) {
        response = 1;
    }
    else {  
        response = 0;
    }
});//-----------------------------------------------------------------------------



next_btn.onclick = () => {
    //Reset buttons state to inactive state;
    btnO1.classList.remove('active');
    btnO2.classList.remove('active');
    btnO3.classList.remove('active');
    btnO4.classList.remove('active');


    score += response;//add score from the previous question recorded when the last button in the options list was clicked 

    if (que_count < questions.length-1) {
        que_count += 1;//increase counter
        showQuetions(que_count);
        queCounter(que_count);//display current question footer
    }
    else {
        debugger;
        localStorage.setItem(player, score);//Store score in local storage
        alert(player + ", Your total score is : " + score + " out of " + maxNumberOfQuesions); //Display score
        window.location.href = "index.html"; //hide info box//Go to start form 
    }

}


function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    index += 1;
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}


function startTotalTimer(time) {
    time *= 60;//minutes to seconds
    let min = 0;
    let sec = 0;
    let totSec = 0;
    var totalTimeSec=time;
    let counter = setInterval(timer, 1000);
   
    function timer() {
      
        updateTimerLine(totSec/totalTimeSec);

        totSec += 1;
        min = Math.floor(totSec / 60);
        sec = totSec % 60;
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }


        time = min + ":" + sec;
        totTime.textContent = time; //changing the value of timeCount with time value
        //time--; //decrement the time value

        if (min >  totalTimeSec/60) { //if timer is less than 0
            clearInterval(counter); //clear counter
            totTime.textContent = "Time Off"; //change the time text to time off
        }
    }
}

function updateTimerLine(f) {  
    let lineWidth=f*quiz_box.clientWidth;
    time_line.style.width = lineWidth+"px"; //increasing width of time_line with px by time value
    if (lineWidth > quiz_box.clientWidth - 1) { //if time value is greater than 549
        clearInterval(counterLine); //clear counterLine
    }
}

// get the max score of the prompted user from the local storage
btnGetScores.onclick = () => {
    var player = prompt("Enter your initials").toUpperCase();
debugger;
    var index = 0;
    var maxScore=0;

    for (let key in localStorage) {
        if (key === player) {
            var score=localStorage.getItem(key);
            maxScore=score>maxScore ? score : maxScore;
        }
    }
    alert(player + ", Your max score is : " +maxScore);
}


var player = prompt("Enter your Initials").toUpperCase();
localStorage.setItem(player, 0);
queCounter(que_count);
startTotalTimer(maxNumberOfQuesions);//20 minutes total time
showQuetions(que_count);