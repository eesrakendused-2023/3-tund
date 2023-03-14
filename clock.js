let d, hours, minutes, seconds;
let hoursContainer = document.getElementById('hours');
let minutesContainer = document.getElementById('minutes');
let secondsContainer = document.getElementById('seconds');
let dateContainer = document.getElementById('date');
let dayContainer = document.getElementById('day');
let months = ["Jaanuar", "Veebruar", "Märts"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let timeFontSize = 3;
document.getElementById('bigger').addEventListener("click", textBigger);
document.getElementById('smaller').addEventListener("click", textSmaller);
window.addEventListener('keydown', textSize);

function textSize(e){
    console.log(e.keyCode);
    if(e.keyCode == 109){
        textSmaller();
    } else if(e.keyCode == 107){
        textBigger();
    }
}

function textBigger(){
    console.log('text bigger')
    timeFontSize = timeFontSize + 0.1;
    document.getElementById('time').style.fontSize = timeFontSize + "em";
}

function textSmaller(){
    timeFontSize = timeFontSize - 0.1;
    document.getElementById('time').style.fontSize = timeFontSize + "em";
}

function upDateClock(){
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    hoursContainer.innerHTML = hours;
    minutesContainer.innerHTML = ":" + minutes;
    secondsContainer.innerHTML = ":" + seconds;
}

function upDateDate(){
    d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let day = d.getDay();

    if(date < 10){
        date = "0" + date;
    }
    /*if(month < 10){
        month = "0" + month;
    }*/

    console.log(day)
    dayContainer.innerHTML = days[day];
    dateContainer.innerHTML = date + ". " + months[month] + " " + year;
}

upDateClock();
upDateDate();

setInterval(upDateClock, 1000);