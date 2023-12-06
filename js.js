var playing = false;
var score;
var timeremaining;
var action;
var correctans;
//arrayOfFun = [addition, multiplication];
document.getElementById("startreset").onclick =
    function() {
        if (playing == true) {
            location.reload();
        } else {
            playing = true;
            score = 0;
            document.getElementById("scorevalue").innerHTML = score;
            show("timeremaining");
            timeremaining = 60;
            document.getElementById("timeremainingvalue").innerHTML = timeremaining;
            hide("gameover");
            document.getElementById("startreset").innerHTML = "Reset Game";
            startCountdown();
            //arrayOfFun[Math.floor((arrayOfFun.length * Math.random()))]();
            genarateQA();
        }
    }

function startCountdown() {
    action = setInterval(function() {

        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if (timeremaining == 0) {
            clearInterval(action);
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>your score is " + score + ".</P>"
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);

}

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

function show(Id) {
    document.getElementById(Id).style.display = "block";
}


function genarateQA() {
    const operations = ['+', '-', '*', '/'];
    var x = 1 + Math.round(100 * Math.random());
    var y = 1 + Math.round(100 * Math.random());
    var opr = operations[Math.floor((operations.length * Math.random()))];
    switch (opr) {
        case '+':
            correctans = x + y;
            break;
        case '-':
            correctans = x - y;
            break;
        case '*':
            correctans = x * y;
            break;
        case '/':
            correctans = x / y;
            correctans = correctans.toFixed(3);
            break;
        default:
            break;
    }
    //correctans = x + y;
    document.getElementById("question").innerHTML = x + opr + y;
    var correctpos = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctpos).innerHTML = correctans;
    var answers = [correctans];
    for (i = 1; i <= 4; i++) {
        if (i != correctpos) {
            var wrongans;
            do {
                wrongans = (1 + Math.round(100 * Math.random())) + (1 + Math.round(100 * Math.random()));
            } while (answers.indexOf(wrongans) > -1)
            document.getElementById("box" + i).innerHTML = wrongans;
            answers.push(wrongans);
        }

    }


    for (i = 1; i <= 4; i++) {
        document.getElementById("box" + i).onclick = function() {
            if (playing == true) {
                if (this.innerHTML == correctans) {
                    show("correct");
                    hide("wrong");
                    setTimeout(function() {
                        hide("correct");
                    }, 1000);
                    score++;
                    document.getElementById("scorevalue").innerHTML = score;
                    //arrayOfFun[Math.floor((arrayOfFun.length * Math.random()))]();
                    genarateQA();
                } else {
                    show("wrong");
                    hide("correct");
                    setTimeout(function() {
                        hide("wrong");
                    }, 1000);
                }
            }
        }
    }
}

/*function multiplication() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctans = x * y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctpos = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctpos).innerHTML = correctans;
    var answers = [correctans];
    for (i = 1; i <= 4; i++) {
        if (i != correctpos) {
            var wrongans;
            do {
                wrongans = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
            } while (answers.indexOf(wrongans) > -1)
            document.getElementById("box" + i).innerHTML = wrongans;
            answers.push(wrongans);
        }

    }

    for (i = 1; i <= 4; i++) {
        document.getElementById("box" + i).onclick = function() {
            if (playing == true) {
                if (this.innerHTML == correctans) {
                    show("correct");
                    hide("wrong");
                    setTimeout(function() {
                        hide("correct");
                    }, 1000);
                    score++;
                    document.getElementById("scorevalue").innerHTML = score;
                    arrayOfFun[Math.floor((arrayOfFun.length * Math.random()))]();
                } else {
                    show("wrong");
                    hide("correct");
                    setTimeout(function() {
                        hide("wrong");
                    }, 1000);
                }
            }
        }
    }
}*/