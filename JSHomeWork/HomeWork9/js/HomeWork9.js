'use strict'

let startDate;
let currentTime = 0;
let startId;

const start = function (callback){
   let timeId = setInterval(callback, 100);
   return timeId;
}

function time (){
   let mmsec;
   mmsec = currentTime += 100;
   format(mmsec);
}
// startId = start(time);
// console.log(startId);
function format (mmsec){
      
   let msec = Math.floor((mmsec % 1000));
   // console.log(msec);
   let sec = Math.floor((mmsec / 1000) % 60);
   // console.log(sec);
   let min = Math.floor((mmsec / 1000 / 60) % 60);
   // console.log(min);
   let show = ` ${min} : ${sec}.${msec}`;
   console.log(show); 
   return show;
}

const reset = function(id){
   currentTime = 0;
   clearInterval(id);
   clickReset();
}

// reset(startId);

const startBtn = document.querySelector('.js-start');
startBtn.addEventListener('click', pause);
// debugger;
let clickPause = () => startBtn.textContent = "pause";

const laptBtn = document.querySelector('.js-take-lap');
startBtn.addEventListener('click', addUl);
const addLi = document.querySelector('.js-laps')
function addUl (){
   const li = document.createElement("li");
   console.log(li); 
   li.textContent = format(currentTime);
   addLi.appendChild(li);
}

const resetBtn = document.querySelector('.js-reset');
resetBtn.addEventListener('click', function(){
   reset(startId);
});
// resetBtn.addEventListener('click',reset.bind())
let clickStart = () => startBtn.textContent = "continiu";
let clickReset = () => startBtn.textContent = "staRT";


let isClick = false; 
function pause(){
   if(isClick === false && startId){
      clearInterval(startId);
      isClick = true;
      clickPause();
      
   }else {
      startId = start(time);
      isClick = false;
      clickStart();
   }
}

// const lapBtn = document.querySelector('.js-take-lap');
// lapBtn.addEventListener('click', pause);

