'use strict'

// let date = new Date();
// let currentDate = date.getTime();
// let secTime = date.setHours(14, 0, 0, 0);

// function TimeLunch (){
// let res = secTime - currentDate;
// return res;
// }

// let mmsec = TimeLunch();
// // console.log(mmsec);
// let sec = Math.floor((mmsec / 1000) % 60);
// // console.log(sec);
// let min = Math.floor((mmsec / 1000 / 60) % 60);
// // console.log(min);
// let hours = Math.floor(mmsec / (1000 * 60 * 60 * 24));
// // console.log(hours);

// let show = `${hours} ${min} ${sec}`;

// const btn = document.querySelector('#time');
// btn.textContent = show;
//============== задачи ========================
// Часть 1
// ________________
// *События через атрибуты*
// 1. При нажатии на кнопку "Нажми на меня!" - через алерт вывести сообщение "Привет!"
// 2. При наведении на кнопку "Наведи на меня!" - через алерт вывести сообщение "Привет!"
// 3. При двойном нажатии на кнопку "Двойной счелчок по мне!" - через алерт вывести сообщение "Привет!"
// 4. Есть текстовое поле в котором написано "Наведи на меня мышь - а потом убери!". Когда мышка выходит за пределы текстового поля - через алерт вывести сообщение "Привет!"

// *Метод getElementById и работа с атрибутами*
// 5. Есть инпут и кнопка "Нажми на меня!". При заполнения окошка инпут в сплывающем окне должно появляться то, что было напечатано в окошке
// 6. Есть фотография и кнопка "Нажми на меня". По нажатию на кнопку должна появляться другая картинка.

// *Работа с this*
// 7. При нажатии на поле инпут "Нажми на меня!" - текст в инпуте меняеться на "Ой, я поменял текст!"
// 8. При нажатии на поле инпут "Нажми на меня! - через алерт вывести сообщение "Привет!"
// 9. есть input type="submit" с надписью "Нажми на меня!". При нажатии текст на кнопке должен заменится на "Ку-ку".
// 10. есть input type="submit" с надписью "Нажми на меня!". При нажатии текст на кнопке должен заменится на "О, больше на меня не нажать", и кнопка должна стать не активна.
// 11. Есть картинка. при наведении картина меняеться на другую, когда курсор мышки покидает пределы блока с картинкой, начинает отображаться изначальная картинка.
// *Работа с CSS*
// 12. Есть инпут с текстом "ку-ку" и кнопка "Нажми на меня!". При заполнения окошка инпут в сплывающем окне должно появляться то, что было напечатано в окошке
// 13. Есть инпут с текстом "ку-ку" и кнопка "Нажми на меня!" и кнопка "Нажми потом на меня!". При нажатии на кнопку  "Нажми на меня!" - блок-инпут должен исчезать. Потом при нажатии на кнопку "Нажми потом на меня!" блок-инпут должен снова появляться.

// *Задачи*
// 14. *Есть инпут с текстом "ку-ку" и кнопка "Нажми на меня!".  При нажатии на кнопку "Нажми на меня!" - в блоке-инпут  должен меняться текст и цвет текста "Ой, я поменял свой текст и css!"
// 15. *Есть input type="submit" с надписью "Нажми на меня!". При нажатии текст на кнопке должен заменится на "О теперь на меня больше не нажать!", она становиться не активна, и появляется вторая кнопка с надписью "Нажми, что бы отблокировать элемент". При нажатии на  кнопку с надписью "Нажми, что бы отблокировать элемент" - эта кнопка исчезает, и на изначальной кнопке восстанавливаться надпись "Нажми на меня!" и она становиться активной.
// 16. *Создать кнопку с текстом "0". Кнопка считает кол-во нажатий по ней.
// 17. *Есть инпут с текстом "ку-ку" и кнопка "Нажми на меня!" и кнопка "Нажми потом на меня!". При нажатии на кнопку "Нажми на меня!" - в блоке-инпут должено появляться сообщение о том, какие классы были использованы, при создании этого инпута - "Мои css классы: eee www ddd".
// 18.  *Есть инпут без текста и 4 кнопки.
// 1-я кнопка "Я добавляю+", при нажатии на которую в поле инпут появиться знак "+".
// 2-я кнопка "Я добавляю-", при нажатии на которую в поле инпут появиться знак "-".
// 3-я кнопка "Я добавляю/", при нажатии на которую в поле инпут появиться знак "/".
// 4-я кнопка "Я добавляю*", при нажатии на которую в поле инпут появиться знак "*".
// 5-я кнопка "1", при нажатии на которую в поле инпут появиться знак "1"
// ......
// 14-я кнопка "9", при нажатии на которую в поле инпут появиться знак "9"
// Часть 2
// ________________
// 1. Есть HTML-разметка: https://codepen.io/Foxy1337/pen/zpQNQm
// Написать скрипт: при нажатии на кнопку, добавлять в div с идентификатором «container» фрагмент разметки:
// <div class="item">
// <h3>Заголовок</h3>
// <p>текст текст текст</p>
// </div>
// 2. При нажатии на ссылку, равномерно перемещать HTML-элемент с классом .play вправо - https://codepen.io/Foxy1337/pen/NXVjLQ
// 3. * Создать скрипт, который при нажатии на гиперссылку «Добавить» будет показывать в нижней части окна браузера уведомление, подобно тем, которые появляются в социальных сетях при получении сообщения. - https://codepen.io/Foxy1337/pen/OzYgpJ
// 4. При нажатии на гиперссылку менять фоновый цвет элемента с классом .play на прозрачный. Примечание: используйте CSS-свойство opacity. -https://codepen.io/Foxy1337/pen/MrdoVE
// 5. * Познакомьтесь с компонентом Bootstrap — индикатором загрузки (Индикатор загрузки в Bootstrap, видео об индикаторе загрузки в Bootstrap). Создайте скрипт, который будет анимировать изменение показателя индикатора загрузки
// 6. * Создать скрипт, который при нажатии на гиперссылку анимировал движение элемента с классом .play по параболе в ветками вниз.

//===========ДОПЫ=================
//========доп.задание 1 модуль 9========
/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
*/

// const colors = [
//    "#FFFFFF",
//    "#2196F3",
//    "#4CAF50",
//    "#FF9800",
//    "#009688",
//    "#795548"
//  ];
 
//  const start = document.querySelector('[data-action="start"]');
//  const stop = document.querySelector('[data-action="stop"]');
//  const body = document.querySelector('body');
//  start.addEventListener('click', changColor);
//  stop.addEventListener('click', stopColor);
//  let inter;
 
//  function changColor(){
//    inter = setInterval(() => {
//      let rand = Math.floor(Math.random() * colors.length);
//      body.style.backgroundColor = colors[rand];
//      console.log(rand);    
//    }, 1000);
//    start.disabled = true;
   
//  };
 
//    function stopColor(){
//      clearInterval(inter);
//      start.disabled = false;
//    }

//========доп.задание 2 модуль 9========
/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
//   let date = new Date (time)
//   let minutes = date.getMinutes();
//   if(minutes < 10){
//     minutes = '0' + minutes;
//   }
//   let seconds = date.getSeconds();
//   if(seconds < 10){
//    seconds = '0' + seconds;
//   }
//   let milisec = parseInt((date.getMilliseconds()) / 100);
  
//    return `${minutes} : ${seconds}. ${milisec}`;
//   }
 
//  console.log(
//    getFormattedTime(1523621052858)
//  ); // 04:12.8
 
//  console.log(
//    getFormattedTime(1523621161159)
//  ); // 06:01.1
 
//  console.log(
//    getFormattedTime(1523621244239)
//  ); // 07:24.2

//================
// let minutes;
// let seconds;
// let milliseconds;

// function getFormattedTime(time) {
//   let date = new Date(time);
//   console.log(date);
  
//   minutes = ("0" + date.getMinutes()).slice(-2);
//   seconds = ("0" + date.getSeconds()).slice(-2);
//   milliseconds = parseInt(date.getMilliseconds() / 100);

//   return `${minutes}:${seconds}.${milliseconds}`;
// }

//========доп.задание 3 модуль 9========

/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");

// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null
// };

/*
* Вспомогательные функции
*/

/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
// function updateClockface(elem, time) {
  // Используйте функцию getFormattedTime из задания #1
  // elem.textContent = getFormattedTime(time);
// }

/*
* Подсветка активной кнопки
*/
// function setActiveBtn(target) {
//   if(target.classList.contains('active')) {
//     return;
//   }
  
//   startBtn.classList.remove('active');
//   stopBtn.classList.remove('active');
  
//   target.classList.add('active');
// }
// let interval;
// let between = 0;
// function startTimer(){
//   let date= Date.now() - between;
//   interval = setInterval(()=>{
//     let newDate =Date.now();
//     let TimeChengeMil = newDate-date;
//     let forCount =new Date (TimeChengeMil);
//     let minutes = forCount.getMinutes();
//     let seconds = forCount.getSeconds();
//     let milisec =parseInt((forCount.getMilliseconds())/100);
//     if(seconds < 10){
//    seconds = '0' + seconds;
//   }
//   let send = ( `минут: ${minutes} секунд:${seconds}. милисек:${milisec}`);
//   clockface.textContent=send;
//   between = TimeChengeMil;
//     }, 100)
   
// }
// function stopTimer (){
//   clearInterval(interval);
 
// };

// startBtn.addEventListener('click', startTimer);
// stopBtn.addEventListener('click', stopTimer);
//=========
// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");

// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null
// };

// function getFormattedTime(time) {
//   let myDate = new Date(time);
//   let minutes = myDate.getMinutes();
//   let second = Math.abs(Math.floor(myDate.getSeconds()));
//   let millisecond = Math.abs(Math.floor(myDate.getMilliseconds() / 100) % 60);
//   if (second.toString().length == 1) second = '0' + second;
//   if (minutes.toString().length == 1) minutes = '0' + minutes;

//   return `${minutes}:${second}.${millisecond}`;
// }

// function updateClockface(elem, time) {
//   // Используйте функцию getFormattedTime из задания #2
//   elem.textContent = getFormattedTime(time);
// }

// function startTimer() {
//   timer.startTime = Date.now();

//   if (timer.id != null) {
//     clearInterval(timer.id);
//   }

//   timer.id = setInterval(function () {
//     timer.deltaTime = (Date.now() - timer.startTime);
//     updateClockface(clockface, timer.deltaTime);
//   }, 100);
  
// }

// stopBtn.addEventListener('click', function () {
//   console.log("clear called");
//   clearInterval(timer.id);
// });

// startBtn.addEventListener('click', startTimer);

// /*
//  * Подсветка активной кнопки
//  */
// function setActiveBtn(target) {
//   if (target.classList.contains('active')) {
//     return;
//   }

//   startBtn.classList.remove('active');
//   stopBtn.classList.remove('active');

//   target.classList.add('active');
// }

// //========доп.задание 4 модуль 9========

 /*
 * Есть переменная quantity хранящиая в себе
 * текущее количество единиц какого-то товара на складе.
 * 
 * Напиши функцию processOrder(value), получающую
 * кол-во товаров заказанных покупателем, и возвращающую промис.
 * 
 * Для имитации проверки достаточного количества товаров
 * на складе используй setTimeout с задержкой 500мс.
 * 
 * Если на складе товаров больше либо равно заказанному
 * количеству, функция возвращает промис который исполняется
 * успешно со строкой "Ваш заказ готов!".
 * 
 * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
 * 
 * Если же пользователь ввел не число, то промис выполняется с ошибкой
 * и значением "Некорректный ввод!".
*/

// const DELAY = 1000;
// const quantity = 100;

// function processOrder(amount) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(isNaN(amount)) {
//         reject('Некорректный ввод!');
//       } else {
//         quantity - amount > 0 ? resolve("Ваш заказ готов!") : resolve("К сожалению на складе не достаточно товаров!");
//       }
//     }, DELAY);
//  });
// }
//===============
// const DELAY = 1000;
// const quantity = 100;

// function processOrder(order){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(!isNaN(order)){
//         if(order <= quantity){          
//           resolve("Ваш заказ готов!")
//         }else resolve("К сожалению на складе не достаточно товаров!");
//       }else reject("Некорректный ввод!");
//     },DELAY/2)
//   }) 
// };
// // Вызовы функции для проверки
// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(500)
//   .then(console.log) // К сожалению на складе недостаточно товаров!
//   .catch(console.log);

// processOrder("lorem")
//   .then(console.log)
//   .catch(console.log); // Некорректный ввод!
//===================================


  

