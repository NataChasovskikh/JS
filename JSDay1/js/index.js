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



