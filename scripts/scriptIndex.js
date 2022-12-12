
const btnGetScores = document.getElementById("btnScores");
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


