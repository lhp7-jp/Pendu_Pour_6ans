const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const myKeyboard = document.getElementById("myKeyboard");
const indexLetter = document.getElementById("indexLetter");
const farmList = [
    "Poule",
    "Lapin",
    "Dindon",
    "Coq",
    "Vache"
];
const cptChar = 1;

alphabet.forEach(Element => {
    let myLetter = Element;
    myLetter = myLetter.toUpperCase();
    let myKey = `<button class ="m-2 btn btn-outline-primary col-2 id="myKey${myLetter}">${myLetter}</button>`;
    myKeyboard.innerHTML += (myKey);
});

function aleaNb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

    let cptChar1 = cptChar + 1;
    let nomAnimal = farmList[aleaNb(0, farmList.length)];
    let tabChar =  nomAnimal.split('');
    tabChar.forEach(Element => {
    let myLetterDisplay = Element;
    let displayChar= `<div class="myLet border border-dark col rounded text-center col-2" id="mydiv${myLetterDisplay}">_</div>`;
    indexLetter.innerHTML += (displayChar);
    });

function Action_Jouer(){
console.log(Element);
};

myKeyboard.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON") {
        console.log(e.target.textContent);
    }
});

let dennis = 2;
document.getElementById(`indexLetter${dennis}`).innerText="Z";


