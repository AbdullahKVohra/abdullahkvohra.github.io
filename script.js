console.log("Welcome to Tic Tac Toe!");
let music = new Audio("music.mp3");
let turnAudio = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3");
let gameflag = false;

let turn = "X";

// Function to change the term
const changeTurn = () => {
    return turn === "X" ? "O" : "X" 
}

// Function to check for a win (unfinished)
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");

    // wins = [box1, box2, box3, width, height, angle, transformx, transformy]
    let wins = [
        [0, 1, 2, 31, 0.3, 0, 7, 7.3],
        [3, 4, 5, 31, 0.3, 0, 7, 22.3],
        [6, 7, 8, 31, 0.3, 0, 7, 37.3],
        [0, 3, 6, 31, 0.3, 90, 22, 8],
        [1, 4, 7, 31, 0.3, 90, 22, -7],
        [2, 5, 8, 31, 0.3, 90, 22, -22],
        [0, 4, 8, 44, 0.3, 45, 18, 15.5],
        [2, 4, 6, 44, 0.3, 135, 18, -16.5],
    ];
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]]. innerText) && (boxtext[e[1]].innerText === boxtext [e[2]]. innerText) && (boxtext [e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " WON!";
            gameflag = true; 
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "180px";            
            document.querySelector(".line").style.width = `${e[3]}vw`;
            document.querySelector(".line").style.height = `${e[4]}vh`;
            document.querySelector(".line").style.transform = `rotate(${e[5]}deg) translate(${e[6]}vw, ${e[7]}vw)`
        }
    })
}

// Game logic

music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turnAudio.play();
            turn = changeTurn();
            checkWin();
            if (!gameflag){
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }  
        }
    })
})

// onlick listener for reset button

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    gameflag = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0 ].style.width = "0px";
    document.querySelector(".line").style.width = "0vw";
    document.querySelector(".line").style.height = "0vh";

})