let hours = document.getElementById('hour');
let minute = document.getElementById('minute');
let second=document.getElementById('second');
let submitButton = document.querySelector('button');
let time = document.querySelector('.time');
let one = document.querySelector('.newHour');
let two = document.querySelector('.newMin');
let three = document.querySelector('.newSecond');
let saat;
let dakka;
let saniye;
let audio = document.getElementById('myAudio');
let myInterval;


// Print Second , minute, hour 
function PrintHour() {
    hours.innerHTML = `<option>Hour</option>`;
    for (x = 0; x < 13; x++){
        hours.innerHTML += `<option value='${x}'>${x}</option>`;
    } 
}
PrintHour();



function PrintMminute() {
    minute.innerHTML = `<option>Minute</option>`;
    for (x = 0; x < 60; x++){
        minute.innerHTML += `<option>${x}</option>`;
    }
}
PrintMminute();


function PrintSecond(){
    second.innerHTML = `<option>Second</option>`;
    for (x = 0; x < 60; x++){
        second.innerHTML += `<option>${x}</option>`;
    }
}
PrintSecond();


//------------------------------------------------------------------
// when Any option selected


hours.onchange = function () {
    saat=  this.value;
    saat.length !== 2?one.innerText = `0${saat}`: one.innerText = `${saat}`;
}

minute.onchange = function () {
    dakka = this.value;
    dakka.length !== 2?two.innerText = `0${dakka}`: two.innerText = `${dakka}`;
}


second.onchange=function(){
    saniye = this.value;
    saniye.length !== 2?three.innerText = `0${saniye}`: three.innerText = `${saniye}`;
}


//------------------------------------------------------------------


let hourValue = hours.options[hours.selectedIndex].value;
let minuteValue= minute.options[minute.selectedIndex].value;
let secondValue = second.options[second.selectedIndex].value;
let allOptions = document.querySelector('option');

//-------------------------------------------------------------------



//when button has submited

submitButton.addEventListener('click', function () {
    timer();
    myInterval = setInterval(timer, 1000);
  
});


//----------------------------------------------------------------------
//Timer function

function timer() {
    if (saniye == 0) {
        stop();
        if (dakka == 0) {
            if (saat==0) {
                stop();
                playAudio();
            } else {
                saat--;
                saat < 10 ? one.innerText = `0${saat}` : one.innerText = `${saat}`;  //saat
                dakka = 59;
                dakka < 10 ? two.innerText = `0${dakka}` : two.innerText = `${dakka}`; //dakka
                restart();

            }
           
        } else {
            dakka--;
            dakka < 10 ? two.innerText = `0${dakka}` : two.innerText = `${dakka}`; //dakka 
            restart(); 
       } 
    }
    else {
        saniye--;
        saniye < 10 ? three.innerText = `0${saniye}` : three.innerText = `${saniye}`;  //saniye
    }
}



// ------------------------------------------------------------------
//Stop function

function stop() {
    clearInterval(myInterval);
}

//Restart function
function restart() {
    saniye = 60;
    timer();
    myInterval = setInterval(timer, 1000);
    
}

//-----------------------------------------------------------------
//Play audio function

function playAudio() {
    audio.play();
}



 
