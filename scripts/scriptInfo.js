const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

const btnGetScores = document.getElementById("btnScores");



// if exitQuiz button clicked
exit_btn.onclick = ()=>{
   
    window.location.href = "index.html"; //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
  
  
    window.location.href = "formQuestions.html"; //hide info box
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
