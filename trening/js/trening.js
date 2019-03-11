'use strict'
// module 1
// 45)  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
// 46)  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// 47) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// 48)  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
//================
// 30) Возведите 2 в 10 степень. Результат запишите в переменную st.

// let a = 2;
// let pow = Math.pow(a,10);
// console.log('pow:',pow);
// //=================
// // 31) Найдите квадратный корень из 245.

// let b = 2;
// b = Math.sqrt(245);
// console.log('b:',b);
// //=================
// // 32) Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. (toFixed(0))
// let c;
// c = Math.sqrt(379);
// console.log(c.toFixed(0));
// console.log(c.toFixed(1));
// console.log(c.toFixed(2));
// // //=================
// // 33) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны
// let numb = 567;
// let sqrt = Math.sqrt(numb);
// console.log(Math.ceil(sqrt));
// console.log(Math.floor(sqrt));
// // //=================
// // 34) Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
// let a = 5;
// let b = 3;
// let call = a % b;
// if(call === 0){
//    alert('delit')
// }
// else {
//    alert('s ostatkom')
// }
//================
// 35) Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// let min = Math.min (4, -2, 5, 19, -130, 0, 10);
// console.log(min);
// let max = Math.max (4, -2, 5, 19, -130, 0, 10);
// console.log(max);
//================
// 35) Выведите на экран случайное целое число от 1 до 100.
// let random = (Math.random()*100).toFixed();
// console.log(random);
//===variant2
// let random = Math.floor(Math.random()*100) + 1;
// console.log(random);
//===variant3 запомнить этот вариант, он самый используемый, готовая формула
// let min;
// let max;
// let random = min + Math.random()*(max + 1 - min);
// random = Math.floor(random);
//================
// 36) Необходимо написать программу, где бы пользователю предлагалось ввести число на выбор: 1, 2 или 3, а программа должна сказать, какое число ввёл пользователь: 1, 2, или 3.
// let number = Number(prompt('vvedite chislo 1 2 3'));
// switch(number){
//    case 1: console.log('vvedeno: 1');
//    break;
//    case 2: console.log('vvedeno: 2');
//    break;
//    case 3: console.log('vvedeno: 3');
//    break;
//    default: console.log('Я таких значений не знаю');
// }
//===variant2
// let number = Number(prompt('vvedite chislo'));
// alert(`vvedeno ${number}`);
//================
// 37 ) Необходимо написать программу, где бы пользователю предлагалось ввести число  1. Если пользователь ввёл число 1, программа должна вывести сообщение: "Вы ввели число 1". Если пользователь ввёл другое число, программа должна вывести такое сообщение: "Вы ввели число не равное 1"
// const num = Number(prompt('введите число 1'));
// if(num === 1) {
//    alert(`Вы ввели число ${num}`)
// }else {alert('Вы ввели число не равное 1')
// }
//================
// 38 ) Пользователь вводит число. Проверить число на четное или не четное и вывести в консоль результат проверки.
// let nmb = Number(prompt('Введите число'));
// num % 2 === 0 ? console.log('chet') : console.log('nechet');
//================
// 41) Найдите суму всех товаров в корзине магазина без мелочи, с мелочью
// let arr = [88.88, 76.76, 55.55, 77.77];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//    sum += arr[i];
// }
// console.log(parseInt(sum));
// console.log(parseFloat(sum));
//================
// 42) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
// let i = Number(prompt('enter number'));
// switch (i) {
//    case 1: alert('winter');
//    break;
//    case 2: alert('spring');
//    break;
//    case 3: alert('autumn');
//    break;
//    case 4: alert('summer');
//    break;
//    default: alert('not a season')
// }
//================
// 43) Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a = prompt();
// if(a > 0 && a < 5){
//    alert ('true')
// }else{
//    alert('false')
// }
//================
// 44)  Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a = 5;
// let result;
// if(a === 0 || a === 2) {
//    result = a + 7;
// }else {
//    result = a / 10;
// }
// console.log(result);
//================
// const monthName = "January";

// const season = monthName === "June"
//   ? "summer" : monthName === "May"
//   ? "spring" : monthName === "September"
//   ? "autumn" : "winter";

// season; // "winter"

// //более понятная запись того же:
// const season = 
//    monthName === "June" ? "summer" 
//    : monthName === "May" ? "spring" 
//    : monthName === "September" ? "autumn" 
//    : "winter";
//================
// module 2
// На цикл в цикле.
// 12) Выведите на экран таблицу умножения (как в школьной тетради).
// for (let i = 1; i <= 9; i++) {
//    for (let j = 1; j <= 9; j++)
//    console.log(`${i} * ${j} = ${i*j}`);   
// };
// 13) Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
// let a = '';
// let  b = [];
// for (let i = 1; i <= 10; i++) {
//    let a = '';
//    for (let j = 1; j <= i; j++){
//       a = a + String(i);           
//    }
//    b.push(a);
// }
// console.log(b); 
// 14) Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
// const arr = [];
// for(let i = 1; i <= 10; i++) {
//   let str = '';
//   for(let j = 1; j <=i; j++) {
// str = str + 'x'
//   }
//   arr.push(str);
// }
// console.log(arr);
// *Многомерные массивы*
// 15) Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// let arr = [[1, 2, 3], [4, 5], [6]]
// let sum = 0;
// for (let i of arr) {
//   for (let j of i) {
//     sum +=j
//   }
// }
// console.log(sum)
// 16) Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// let array = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let summy = 0;
// for( let i of array){
//    for(let j of i){
//       for (let b of j){
//          summy = summy +b;
//       }
//    }
// }
// console.log(summy);
//================================================================
//========= day 2 ==============================
//Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.Работать должно так:
// function isEmpty(obj) {
//    if(Object.keys(obj).length){
//       return true;
//    }return false 
//  } 

//  let schedule = {}; 

//  alert( isEmpty(schedule) ); // true 
//  schedule["8:30"] = "подъём"; 
//  alert( isEmpty(schedule) ); // false

//=======================================
// Сумма свойств
// важность: 5
// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.
// Например:
// "use strict";
// let salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };
// //... ваш код выведет 650
// // P.S. Сверху стоит use strict, чтобы не забыть объявить переменные.
// function getSumm (obj){
//    let summ = 0;
//    for(let key in obj){
//       summ += obj[key];
//    }return summ;
// }
// console.log(getSumm({}));
// console.log(getSumm(salaries));
//=======================================
// Свойство с наибольшим значением
// важность: 5
// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

// Если объект пустой, то пусть он выводит «нет сотрудников».
// let salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };

// function maxSalaries (obj){
//    let max = 0;
//    let name = '';
//    for(let i in obj){
//       if(obj[i] > max){
//          max = obj[i];
//          name = i;
//       }
//    }return name;  
      
// }
// console.log(maxSalaries(salaries));

// ... ваш код выведет "Петя"
//=======================================
// // Умножьте численные свойства на 2
// // Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:

// // до вызова
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj,callback){
//   for(let key in obj){
//     if(callback(obj[key])){
//       obj[key] = obj[key]*2;
//     }
//   }
//   return obj;
// }

// console.log(multiplyNumeric(menu,isNumeric));
// // multiplyNumeric(menu);

// // после вызова
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// console.log(multiplyNumeric(menu,isNumeric));

// // P.S. Для проверки на число используйте функцию:

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }
//==================================================
// Задание 10 Найти последовательность Хэеса, то есть пользователь вводит число и в результате должно быть выдано сообщение, с самой последовательностью, количеством шагов,
// которое понадобилось для нахождения этой последовательности, и вершиной последовательности, это максимальное число из этой последовательности. Последовательность
// Хэеса считается так: если ввели число 9, то проверяем его, если оно чётное, делим на 2, если нечетное, умножаем на 3 и прибавляем 1, и так до тех пор пока число не будет равно 1.

// function number(a) {
//   let i = 0;
//   let max = 0;
//   do {
//     if( a % 2 === 0){
//       a = a / 2;      
//     }
//     else {
//       a = (a * 3) + 1;
//       if (a >= max) {
//         max = a;
//       }
//     }
//     i = i + 1;
//     console.log(a);    
//   }while ( a !== 1)
//   console.log('max', max);
//   return `${a} ${i}`;
// }
// console.log(number(prompt('введите число')));
//===== 2 variant ================
// const Xeksa = function(num) {
//   let counter = 0;
//   let max = 0;
//   do {
//     if (num % 2 === 0 ) {
//       console.log(`${num} / 2 = ${num / 2}`);
//       num = num / 2;
//     } else {
//       console.log(`${num} * 3 + 1 = ${(num * 3) + 1}`);
//       num = (num * 3) + 1;
//       if (num >= max) {
//         max = num;
//       }
//     }
//     counter += 1;
//   } while (num !== 1);
//   console.log('counter:', counter);
//   console.log('max', max);
// };
// Xeksa(9);





// 9*3+1=28
// 28/2=14
// 14/2=7
// 7*3+1=22
// 22/2=11
// 11*3+1=34
// 34/2=17
// 17*3+1=52
// 52/2=26
// 26/2=13
// 13*3+1=40
// 40/2=20
// 20/2=10
// 10/2=5
// 5*3+1=16
// 16/2=8
// 8/2=4
// 4/2=2
// 2/2=1
//================================================================
//========= day 3 ==============================
// let Kate = {
//    name: 'Kate',
//    surname: 'Hrybkova',
//    age: '24',
// }
// let Lora = {
//    name: 'Lora',
//    surname: 'Plushkina',
//    age: '28',
// }
// let Richard = {
//    name: 'Richard',
//    surname: 'Robinson',
//    age: '50',
// }

// let showGreet = function(){
//    return `Dear ${this.name} ${this.surname}, congratulation! your are ${this.age} years old`;
// }
// console.log(showGreet.call(Kate));
// console.log(showGreet.call(Lora));
// console.log(showGreet.call(Richard));
//==================================================
// let Kate = {
//    name: 'Kate',
//    surname: 'Hrybkova',
//    age: '24',
//    DoubleTrouble: function(){
//       console.log(`${this.name} ${this.surname} is: ${this.age} ho-ho`);
      
//    }
// }
// let Lora = {
//    name: 'Lora',
//    surname: 'Plushkina',
//    age: '28',
// }
// let Richard = {
//    name: 'Richard',
//    surname: 'Robinson',
//    age: '50',
//    DoubleTrouble: function(){
//       console.log(`${this.name} ${this.surname} is: ${this.age} wo-wo`);
      
//    }
// }

// const fn = function(callback){
//    return callback();
// }

// fn(Kate.DoubleTrouble.bind(Kate));
// fn(Kate.DoubleTrouble.bind(Lora));
// fn(Richard.DoubleTrouble.bind(Richard));
// fn(Richard.DoubleTrouble.bind(Kate));
//==================================================


// let n = 'Natasha';
// let a = 'girl';
// let person = undefined;




// switch( person  + 1) {
//    case true: console.log('красит ногти');
//    break;

//    case false: console.log('не красит ногти');
//    break;

//    default: console.log( 'введите данные');
//    break;  
// }

// switch( person ) {
//    case 'girl': console.log('красит ногти');
//    break;

//    case 'boy': console.log('не красит ногти');
//    break;

//    case 'child': console.log('не красит ногти');
//    break;

//    case 'man': console.log('не красит ногти');
//    break;

//    default: console.log( 'введите данные');
//    break;   
// }

// if(person === 'girl'){

// } else if (father = 'man' && person === 'boy') {

// } else if (person === 'child'){

// } else if (person === 'man' ) {

// } else {

// }


// let nmb = function showNmb(){
//    let a = 2;
//    let b = 4;
   
//    function summy (){
//       return a + b;
//    } 
//    return summ();
// }

// // console.log(b);
// let a = nmb();
// console.log(a);

// let Cat = {
//    color: grey,
//    age: 5,
// }

// function Cat(color, age) {
//    this.color = color;
//    this.age = age;
//    return this;
// }

// console.log(Cat.call({},'grey', 5));
// console.log(new Cat('grey', 5));


// let array = [10, 20, 30, 40, 50, 60];
// function myReduce (){
//   let acc = 0;
//   for (let i of array) {     
//      acc +=i
//   }
//   return acc;  
// }
//  console.log(myReduce());

//=====================================
// function myReduce(fn, initialValue){
//    // console.log(returnAnswer());   
//    function returnAnswer (){
//       let sum = 0;
//       for (let i of arr) {     
//          sum +=i
//       }
//       return sum;  
//    }
// }
//  myReduce();
//  console.log(initialValue(returnAnswer.call(),arr));
//==========================
 
// let myreduce = function(arr, fn, initialValue) {
  
//    let length = arr.length;
//    let result = initialValue;
//    for (let i = 0; i < length; i++) {
//      result = fn.call(null, result, arr[i],i,arr);
//    }
//    return result;
//  };

//  let arrResult = result;
//  myreduce();
//  console.log(arrResult);
//=============================================================
//============= module 7 ==========================

// console.log(navigator.userAgent);

// if("navigator" in window) {
//   console.log('navigator на месте!');
// }
 
// console.log(window.location);

// console.log(history.current);

//===== с помощью js добавляем код в html ===========

let title = document.createElement('h2');
title.style.textAlign = 'center';
title.classList.add('red-text');
title.textContent = 'Hello!';
let div = document.querySelector('.first');
div.appendChild(title);
div.innerHTML += '<ul class="myList"><li><p>very</p></li><li>strange</li></ul>';
let myList = document.querySelector('.myList');
myList.style.listStyle = 'none';
myList.style.color = 'blue';
let body = document.body;
body.style.textAlign = 'center';

div.insertAdjacentHTML('beforebegin', '<h3>Привет</h3>');
let text = document.querySelector('h3');
text.classList.add('green');
let textGreen = document.querySelector('.green');
textGreen.style.color = 'green';

let image = document.createElement('img');
image.src = 'https://lifeo.ru/wp-content/uploads/milie-kartinki-kotikiv-dlya-srisovki-11-1-min-500x625.jpg';
div.append(image);
image.classList.add('img-style');
image.style.display = 'block';
image.style.margin = 'auto';
image.style.backgroundColor = 'aqua';
image.style.padding = '20px';


 
 












   







