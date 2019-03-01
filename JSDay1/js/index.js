'use strict'

//JS чутливий до регістру


// var year = 2018;
// let month = "November"
// const date = 27;
// let number = 10;
// // let Number = 50;
// let numBer = 100;

// let summ = number * Number + numBer;
// console.log('summ',summ);
// alert('summ', summ);
// const answer1 = confirm('Are you ready');
// const answer2 = prompt('Are you ready');


// console.log(confirm("hello "));

// console.log ('answer1',answer1);

// console.log(typeof number);
// console.log(typeof month);
// console.log(typeof month === typeof month);

// console.log(month.length);
// console.log(month.indexOf('N'));
// console.log(month.indexOf('n'));


// console.log(month.includes('Nov'));
// console.log(month.includes('nov'));

// const fontSize = '5.5px';
// const usersLength = 20;

// console.log('преобразование в целое число', Number.parseInt (fontSize) );
// console.log('преобразование в число с дробью', Number.parseFloat (fontSize) );

// console.log('проверка на число', Number.isNaN(Number(fontSize)));
// console.log('проверка на число', Number.isNaN(usersLength));


// const a = 0.3;
// const b = 0.5;

// console.log('a+b', a+b);
// console.log('a+b', (a+b).toFixed(10));

// const text = 'Преобразование В Целое Число'

// console.log('преобразование к нижнему регистру', text.toLowerCase());
// console.log('преобразование к верхнему регистру', text.toUpperCase());

// const name = 'John';
// const years = 40;
// const height = 180;


// 



// const num = 20;
// const result = num < 30 && num > 10;
// console.log(result); //false

// const text = 'numjfkncjf';
// const result = text.length < 30 && text.length > 5;
// console.log(result); //false


// const obj = {
//    id: 'asasa',
//    name: 'Alex',
//    role: 'admin',
// };

// const resultObj = obj.role === 'admin' || obj.role === 'moderator';
// console.log(resultObj);


// if (resultPrompt =prompt ('введите значение'));
// alert ('нет прав');
// else {
//    alert('добро пожаловать');
// }  // дописать, пример в слеке


// let value = 0;
// value += 50;
// value += 50;
// value -= 30;

// console.log('value', value);








// let guest;
// let name;
// name = 'Mango';
// guest = name;

// console.log(guest);


// const day = 2;
// const month = 10;
// const year = 2017;

// const date ='0' + day + "\\" + month + "\\" + year;

// console.log(date); // 02\10\2017


// const name = prompt('Введите имя');
// alert (name);


// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message = `${name} прибывает на отдых ${date} в ${roomType}.`;

// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.


// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";

// let totalWidth = Number.parseInt(padding) + Number.parseInt(border) + Number.parseInt(contentWidth) + 'px';

// console.log(totalWidth); // '125px'



// const year = prompt ('Какой сейчас год?')
// if (year === '2019') { alert ('Все верно!') }
// else { alert ('Но ведь на вдоре 2018!') }


// const value = prompt('Введите произвольное целое число');

// if (value === null) { alert ('Приходите еще!')}
// else if (Number.isInteger (Number(value))) { alert('Спасибо!')}
// else { alert('Необходимо было ввести целое число!')};



// const num = Number.parseInt(Math.random() * 100);

// let type;
// switch (num % 2) {
//    case 0:
//    type = 'even';
//    break;
//    default:
//    type = 'odd';
//    break;
// }

// console.log(`${num} is ${type}`);




// let hours = 7;
// let minutes = 3;
// let seconds = 42;

// const time = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds <10 ? '0' + seconds : seconds}`;


// console.log('Time is: ', time);



// const promptValue = prompt ('Введите число от 1 до 5');
// if (Number.isInteger(+promptValue) && (promptValue > 0 && promptValue <=5)) {
//    switch (+promptValue) {
//       case 1 : alert ("Каталог хостелов")
//       break;
//       case 2 : alert ("Каталог бюджетных отелей")
//       break;
//       case 3 : alert ("Каталог отелей ***")
//       break;
//       case 4 : alert ("Каталог отелей ****")
//       break;
//       case 5 : alert ("Каталог лучших отелей")
//       break;

//    }

// } 
// else if(promptValue === null) {
//    alert ('очень жаль, приходите еще!')}
//    else {alert ('Неверный ввод, возможные варианты 1-5!')}




//==============================================================

//есть семья з трех человек Игорь, Ира, Николай. 
//Дома в данный момент мама и Николай. 
//Спросить кто пришел, если кто-то из семьи, то впускаем и приветствуем. 
//Если чужой, спрашиваем "к кому пришел?" - в ответ нужно ввести "Пришел к имя". 
//Если пришел к отцу - сказать, что его нету дома. 
//Если пришел к матери - сказать "добро пожаловать"

// const inputName = prompt('Who are you?');

// const father = 'Igor';
// const mother = 'Ira';
// const child = 'Nikolaj';
// if(inputName){
// if(inputName === father || inputName === mother || inputName === child){
// alert('Hello')
// }
// else {
//    const guest = prompt("к кому пришел?");
//    if (guest.includes(father)){
//       alert('его нет дома');
//    }else if (guest.includes(mother)) {
//       alert('welcome')
//    }else {
//       alert('Bye!');
//    }
// }

// }else{
//    alert('police')
// }

// const father = 'igor';
// const mother = 'ira';
// const child = 'nikolaj';
// const inputName = prompt('Who are you?');

// inputName ? alert('Hello') : alert('Cansel');

//================switch====================================

// const father = 'igor';
// const mother = 'ira';
// const child = 'nikolaj';
// const guest = prompt("кто пришел?");
// if(guest){
//    if(guest === father || guest === mother || guest === child){
//       alert('welcome!');
//    }else {
//       const guest = prompt("к кому пришли?");
//       switch(true){
//          case guest === null:
//          alert('FFFFF');
//          break;

//          case guest.includes(father): 
//          alert('его нет дома');
//          break;

//          case guest.includes(mother):
//          alert('oberezno');
//          break;

//          case guest.includes(child):
//          alert('911');
//          break;

//          default:
//          alert('arror');
         
//       }
//    }
// }

//====#1===================================================
/*
  - Объявите две переменные: guest и name
  - В переменную name запишите строку 'Mango'
  - Скопируйте значение из name в guest
  - Выведите в консоли значение переменной guest (должно вывести 'Mango')
*/

// let guest;
// let name = 'Mango';
// guest = name;
// console.log(guest);

//=====#2=====================================================
/*
  Есть три переменные содержащие день, месяц, и год. 
  Необходимо получить строку день\месяц\год
  в формате xx\xx\xxxx
  
  Найдите ошибку в записи значания для переменной date, 
  результат будет выведен в консоль и равен комментарию 
  напротив console.log()
*/

// const day = 2;
// const month = 10;
// const year = 2017;

// const date = '0' + day + "\\" + month + "\\" + year;

// console.log(date); // 02\10\2017

//===#4=======================================================
/* 
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/

// let name = prompt('enter name');
// alert(name);
// console.log();

//====================================================
/*
  Есть три переменные name, date и roomType, содержащие 
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.
  
  Используя шаблонные строки необходимо записать 
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
  
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная той что 
  напротив console.log
*/

// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message = '{{Mango}} прибывает на отдых [date] в #<roomType>.`;

// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.
//===#10=============================================================
/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
// let inputUser = +prompt('enter number');
// if(inputUser >= 0 && inputUser <=5 && !Number.isNaN(inputUser))
//    switch(inputUser) {
//    case  1: alert('Каталог хостелов'); break;
//    case  2: alert('Каталог бюджетных отелей'); break;
//    case  3: alert('Каталог отелей ***'); break;
//    case  4: alert('Каталог отелей ****'); break;
//    case  5: alert('Каталог лучших отелей'); break;
//    default: alert('очень жаль, приходите еще!')
//    }else if (inputUser === 0);
//    else {alert('Неверный ввод, возможные варианты 1-5!');}

//=============================================================

