const startstop=document.getElementById('startstop');
const resetbtn=document.getElementById('reset');

let timeinterval=null;
let timerstatus="stopped";

let seconds=0;
let minutes=0;
let hours=0;

let leadingseconds=0;
let leadingminutes=0;
let leadinghours=0;

function stopwatch(){
    seconds++;
    if(seconds==60){
        minutes++;
        seconds=0;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    if(seconds<10){
        leadingseconds="0"+seconds.toString();
    }else{leadingseconds=seconds;}

    if(minutes<10){
        leadingminutes="0"+minutes.toString();
    }else{leadingminutes=minutes;}

    if(hours<10){
        leadinghours="0"+hours.toString();
    }else{leadinghours=hours;}
    let disp= document.getElementById('timer');
    disp.innerText=leadinghours+":"+leadingminutes+":"+leadingseconds;
}
// window.setInterval(stopwatch,1000);

startstop.addEventListener('click',()=>{
    if(timerstatus==="stopped"){
        timeinterval=window.setInterval(stopwatch,1000);
        document.getElementById('startstop').innerText="Pause";
        document.getElementById('startstop').style.color='yellow';
        timerstatus="started";
    }
    else{
        window.clearInterval(timeinterval);
        document.getElementById('startstop').innerText="Start";
        document.getElementById('startstop').style.color='green';
        timerstatus="stopped";
    }
});
resetbtn.addEventListener('click',()=>{
    window.clearInterval(timeinterval);
    document.getElementById('startstop').innerText="Start";
    document.getElementById('startstop').style.color='green';
    timerstatus="stopped";
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById('timer').innerText="00:00:00";
});