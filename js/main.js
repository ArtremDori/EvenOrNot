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




let ans;
let corrAns;
let manAns;
let n;
let i=0;
let guessCount=0;




let finalCountResult = function(){

    finalCount = Math.round((guessCount*100/i),1);
    return(finalCount);
};


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
        guessCount++;
        return;
    } else {outputEl.textContent= "Ошибочка вышла, число-то "+n+"!";
        return;
    };
};

submitBtn.addEventListener('click', function () {
    manAns = true;
    console.log(manAns);
    play(manAns);
    i++;
});

rejectBtn.addEventListener('click', function () {
    manAns = false;
    console.log(manAns);
    play(manAns);
    i++;
});


let finalCountTotal = document.querySelector(".game_total");
let finalCountGuessed = document.querySelector(".game_guessed");
let finalCountPercentage= document.querySelector(".game_percentage");
let resultWindow = document.querySelector(".game_result");

// остановка игры, подведение итогов.
let stopBtn = document.querySelector(".stop");

stopBtn.addEventListener('click', function () {
    gameWindow.classList.add('hidden');

    resultWindow.classList.remove("hidden");
    finalCountTotal.textContent ="Всего игр сыграно "+i;
    finalCountGuessed.textContent ="Всего угадано "+guessCount;
    finalCountPercentage.textContent ="Процент угаданного "+finalCountResult(i,guessCount);

    // document.querySelector('body').classList.toggle('fixed');
});




let resultClose=document.querySelector(".close_results");

resultClose.addEventListener('click', function () {
    resultWindow.classList.add("hidden");
});






