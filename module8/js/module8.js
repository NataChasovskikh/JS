'use strict'
// Задача №1
// Алерт по нажатию на кнопку.
// При нажатии на кнопку "Нажми на меня"
// выводиться сообщение 'Привет!

// const btn = document.querySelector('button');
// const clickButton = () => alert ('Привет!');
// btn.addEventListener('click', clickButton);
//============================
// Задача №2
// Изменение текста в инпуте.
// По нажатию на кнопку - изменяеться текст в импуте
// const btn = document.querySelector('button');
// const val = document.querySelector('#input');
// const clickButton = () => val.value =  'New Value!';
// btn.addEventListener('click', clickButton);
//================================
// Задача №3
// Изменение текста в инпуте.
// По нажатию на кнопку -  она выводит алертом содержимое инпута
// const btn = document.querySelector('button');
// const val = document.querySelector('#input');

// const clickButton = () => alert(val.value);

// btn.addEventListener('click', clickButton);
//========================================
// Задача №4
// Изменение текста в инпуте.
// По нажатию на кнопку -  она выводит алертосодержимое инпута, возведенное в квадрат
// const btn = document.querySelector('button');
// const val = document.querySelector('#input');
// const clickButton = () => alert(Math.pow(val.value, 2));
// btn.addEventListener('click', clickButton);
//=============================================
// Задача №5
// Задача. Кнопка осуществляет обмесодержимым между двумя инпутами, можетпонажимать на нее несколько раз илвручную сменить содержимое инпутов:
// const btn = document.querySelector('button');
// let val = document.querySelector('#input1');
// let val2 = document.querySelector('#input2');
// const clickButton = () =>{
//    let valFirst = val.value;
//    val.value = val2.value;
//    val2.value = valFirst;
// }
// btn.addEventListener('click', clickButton);
//===========================
// Задача №6
// Задача. При нажатии на кнопку поменяется ее текст:
// const npt = document.querySelector('input');
// const clickButton = () => npt.value =  'New Value!';
// npt.addEventListener('click', clickButton);
//==================
// Задача №7
// Задача. При нажатии на кнопки - одна иних блокирует инпут с помощью атрибут disabled, а другая разблокирует:

// const btn = Array.from(document.querySelectorAll('button'));
// console.log(btn);
// const On = btn[0];
// const Off = btn[1];


// const clickButtonOff = () => (document.querySelector('#input').disabled = false);

// const clickButtonOn = () => (document.querySelector('#input').disabled = true); 

// On.addEventListener('click', clickButtonOn);
// Off.addEventListener('click', clickButtonOff);
//========================================
//=================доп.задание 1 модуль 8 ===============
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// const btn = document.querySelector('.button');

// let i = 0;
// const counter = () => {
//    i++ 
//    btn.textContent = i
// }
// btn.addEventListener('click', counter);
//=======
// let buttonCounter = document.querySelector('button');
// buttonCounter.addEventListener('click', buttonClick);
// function buttonClick () {
// buttonCounter.textContent = Number(buttonCounter.textContent) + 1;
// }
//=================доп.задание 2 модуль 8 ===============
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
// const btn = document.querySelector('button');
// const input = document.querySelectorAll('input');
// const arrayInput = Array.from(input);
// const result = document.querySelector('.result');
// const sumInput = () => {
//    let i = 0;
//    let suma = arrayInput.reduce(function(acc, item){
//    return acc = acc + Number(item.value);   
// }, 0);
// result.textContent = suma;
// }
// btn.addEventListener('click', sumInput);
//=================доп.задание 3 модуль 8 ===============
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/
// class Counter {
//    constructor(onChange) {
//      this.value = 0;
//      this.onChange = onChange;
//      this.increment = this.increment.bind(this);
//      this.decrement = this.decrement.bind(this);
//    }
   
 
//    increment() {
//      this.value += 1;
//      this.onChange(this.value);
    

//    decrement() {
//      this.value -= 1;
//      this.onChange(this.value);
//    } 
// }
 
//  let plus = document.querySelector('button[data-action="add"]');
//  let minus = document.querySelector('button[data-action="sub"]');
//  let valueSpan = document.querySelector('.value'); 
//  function changeValue(value) {
//    valueSpan.textContent = value;
//  } 
//  const counter = new Counter(changeValue); 
// //  console.log(counter.onChange); 
//  plus.addEventListener('click', counter.increment);
//  minus.addEventListener('click', counter.decrement);
 //=================
//  class Counter {
//   constructor(onChange) {
//     this.value = 0;
//     this.onChange = onChange;
//   }
  
//   get increment(){
//     this.onChange(this.value += 1);
//     // this.onChange(this.value ++);

//   }
  
//   get decrement(){
//     this.onChange(this.value -= 1);
//     // this.onChange(this.value --);

//   }
// }

// const value = document.querySelector('.value');

// const counter = new Counter((res) => value.innerHTML = res);

// const onClickHandler = ({target}) => target.dataset.action === 'add'? counter.increment : counter.decrement;

// document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', onClickHandler));

 //=================доп.задание 4 модуль 8 ===============
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/
// const input = document.querySelectorAll('input');
// // console.log(input);

// const arrayInput = Array.from(input);
// // console.log(arrayInput);

// const form = document.querySelector('.question-form');
// // console.log(btn);

// const result = document.querySelector('.result');
// // console.log(result);

// const radioCheck = function(event){
//   event.preventDefault();
//    arrayInput.find(function(i){
    
//       if((i.checked === true)){
//          result.textContent = `Result: ${i.value}`;
//       }
//       // console.log(i.value);  
//    });
// };
// form.addEventListener('submit', radioCheck);
//===============
// const form = document.querySelector('.question-form');
// const chkd = document.querySelectorAll('input');
// const result = document.querySelector('.result');

// form.addEventListener('submit', show );

// function show(e) {
//   e.preventDefault();
//   Array.from(chkd).find(i => i.checked === true ? result.innerHTML = ` Result:${i.parentElement.textContent};` : null);
// }
//============
// const result = document.querySelector(".result");
// const btn = document.querySelector(".btn");
// const arr = Array.from(document.querySelectorAll("input"));
// console.log(arr);


// const checkInput = (event) => {
//   event.preventDefault();
//   arrayInput.find(function(item) {
//     if ((item.checked === true)) {
//       result.textContent = `Result: ${item.value}`;
//     }
  
//   });
// };
// btn.addEventListener("click", checkInput);
//=================доп.задание 5 модуль 8 ===============

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
// const pic = document.querySelector('.images');
// const picAlert = (event) =>{
//    alert (event.target.src);
// }
// pic.addEventListener('click', picAlert);
//====================
// const images = document.querySelector('.images');
// images.addEventListener('click', ({target})=> alert(target.src));
//======
// const images = document.querySelector('.images');
// images.addEventListener('click', ({target})=> target.nodeName === "IMG"? alert(target.src):null);

//=================доп.задание 6 модуль 8 ===============
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/
// const list = document.querySelector('.list');
// function clickDel(event){
//   let target = event.target;
//    if(target.nodeName !== 'BUTTON') return;
//    target.parentNode.remove();
// };

// list.addEventListener('click', clickDel);
//===============

// const list = document.querySelector('.list');

// function deleteUl(event){
//     event.preventDefault();
//     let target = event.target;
//     if(target.nodeName !=='BUTTON')return;
//     target.parentNode.remove();
// }
// list.addEventListener('click', deleteUl);
//=================доп.задание 7 модуль 8 ===============
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/
// const inputList = document.querySelector('.input-list');
//   const inputs = document.querySelectorAll('input');

//   let inputType = () => {
//     inputs.forEach(el => {
//       if(el.value.length > 0){
//         if (Number(el.dataset.length) === el.value.length){
//           el.classList.add('valid');
//         }else
//           el.classList.add('invalid');
//       }
//       })
//   };

//   inputList.addEventListener('focusout', inputType); 


//==============
// const list = document.querySelector(".input-list");

// const checkInput = event => {
//   const target = event.target;

//   // console.log(event.target); // для себя - посмотреть
//   // console.log(target.nodeName); // для себя - посмотреть
//   // console.log(parent); // для себя - посмотреть
//   if (target.nodeName !== "INPUT") return;
//   // console.log(target.dataset.length); // для себя - посмотреть
//   // console.log(target.value); // для себя - посмотреть
//   compareValue(target);
// };

// function compareValue (elem) {
//   const value = elem.value
//   if (Number(elem.dataset.length) === (String(value).length)) {
//     // console.log(true);// для себя - посмотреть
//     // console.log(elem.dataset.length);// для себя - посмотреть
//     // console.log(value.length);// для себя - посмотреть
//     elem.classList.add("valid");
//   } else {
//     // console.log(false);// для себя - посмотреть
//     // console.log(elem.dataset.length);// для себя - посмотреть
//     // console.log(value.length);// для себя - посмотреть
//     elem.classList.add("invalid");
//   }
// }
// list.addEventListener("focusout", checkInput);



//=================доп.задание 8 модуль 8 ===============
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

// const mess = document.querySelector('.message');
// const input = document.querySelector('.input');
// const text = document.querySelector('.input-value');
// input.addEventListener('focus', render);
// function render(){
//     mess.textContent = "Input is in focus!";
// };

// function textInput(){
//     text.textContent = `Current input value:${input.value}`;
// };
// input.addEventListener('input', textInput);

//=================доп.задание 9 модуль 8 ===============
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

// let openModal = document.querySelector('.btn');
// let modal = document.querySelector('.js-modal-backdrop');
// let clouse = document.querySelector('[data-action="close-modal"]');

// openModal.addEventListener('click', open);
// function open(){
//   modal.classList.remove('modal-hidden');
// }

// modal.addEventListener('click', clous);

// function clous(event) {
//   if(event.target === clouse || event.target === modal){
//     modal.classList.add('modal-hidden');
//   }
// }

//=================
// const btn = document.querySelector(".btn");
// const modal = document.querySelector(".js-modal-backdrop");
// const clsd = document.querySelector(".close-btn");

// btn.addEventListener("click", show);
// modal.addEventListener("click", hide);


// function show(){
//   modal.classList.remove("modal-hidden");
// }

// function hide({target}) {
//   target.dataset.action === "close-modal" || target === modal ?modal.classList.add('modal-hidden'):null;
  
// };

//=================доп.задание 10 модуль 8 ===============
/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/
// const menu = document.querySelector(".js-menu");

// function activeLink(event) {
//   const target = event.target;
//   event.preventDefault();
//   if (target.nodeName !== "A") return;

//   changeStatus(target);
// }
// function changeStatus(target) { 
//   const currentTarget = document.querySelector(".active");
//   if (currentTarget) {
//     currentTarget.classList.remove("active");
//   }
//   target.classList.add("active");
// }

// menu.addEventListener("click", activeLink);


//=======================================================

  // let i = 0;
  // for(i <= 10; i++){
  //   console.log("Hello world!");
  // } 

