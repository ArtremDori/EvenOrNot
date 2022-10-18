


//показать правила
let rulesPopup = document.querySelector(".rules_btn");
let rulesPopupWindow = document.querySelector('.rules_popup__wrapper');

rulesPopup.addEventListener('click', function () {
    rulesPopupWindow.classList.remove('hidden');
    // document.querySelector('body').classList.toggle('fixed');
});



//закрыть попап с правилами
let rulesPopupClose = document.querySelector(".rules_popup__close");

rulesPopupClose.addEventListener('click', function () {
    rulesPopupWindow.classList.add('hidden');
    // document.querySelector('body').classList.toggle('fixed');
});


let outputEl = document.querySelector(".chosen_nmbr");


let playBtn = document.querySelector(".play");
let gameWindow = document.querySelector(".game_window");



playBtn.addEventListener('click', function () {
    gameWindow.classList.remove('hidden');
    // document.querySelector('body').classList.toggle('fixed');
});

let stopBtn = document.querySelector(".stop");

stopBtn.addEventListener('click', function () {
    gameWindow.classList.add('hidden');
    outputEl.textContent ="";
    // document.querySelector('body').classList.toggle('fixed');
});








let ans;
let corrAns;
let manAns;
let n;


let submitBtn = document.querySelector(".submit");
let rejectBtn = document.querySelector(".reject");


let decide= function () {
    //проверка на чётность, запись в corrAns значения (правда/ложь);
    if (n%2==0){
        corrAns= true;
    } else {corrAns=false;};
};


let play= function() {
    n=Math.round(Math.random()*100, 1);
    decide();

    if (manAns==corrAns){
        outputEl.textContent ="Точно! Откуда ты знал, что число "+n+"?";
        return;
    } else {outputEl.textContent= "Ошибочка вышла, число-то "+n+"!";
        return;
    };
};

submitBtn.addEventListener('click', function () {
    manAns = true;
    console.log(manAns);

    play(manAns);
});

rejectBtn.addEventListener('click', function () {
    manAns = false;
    console.log(manAns);
    play(manAns);
});





















