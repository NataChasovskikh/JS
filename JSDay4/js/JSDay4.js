'use scict'

// let value = 10;

// const fn = function () {
//   let value = 20;
//   console.log(value + 10);
// };

// fn(); // 30


// const map = (arr, callback) => { // обьявляем функцию с аргументами arr(массивом), callback(функцией)
//    const resultArr = []; // обьявляем пустой массив, в который будет записывать новые эл-ты
   
//    // перебираем, входящий при вызове функции массив, записанный в аргумент arr. 
//    // в теле цикла елементы пропускаем через функцию callback, обьявленную в аргументах
//    // и записываем результат callback-функции в переменную result.
//    // поседним этапом цикла - записываем result в новый массив, выходим из массива.
//    // последним этапом функции map будет возврат(return) переменной resultArr.
//    for(const element of arr) {
//      const result = callback(element);
//      resultArr.push(result);
//    }
//    return resultArr;
//  };
 
//  const double = val => val * 2;
//  const triple = val => val * 3;
//  const numbers = [1, 2, 3, 4, 5];
 
//  const doubledNumbers = map(numbers, double);
//  console.log(doubledNumbers); // [2, 4, 6, 8, 10]
 
//  const tripledNumbers = map(numbers, triple);
//  console.log(tripledNumbers); // [3, 6, 9, 12, 15]
 

//callback

// const ourArray = ( transfer, mass ) => {
//    let newMass = [];
//    for (const numb of mass) {
//       const newElemet = transfer (numb);
//       newMass.push(newElemet);
//    }
//    return newMass;
// }
// const double = (number) => number *2;
// const triple = (number) => number *3; 

// const numbers = [1, 2, 3, 4, 5 ];

// const doubledNumbers = map(numbers, double);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
 
// const tripledNumbers = map(numbers, triple);
// console.log(tripledNumbers); // [3, 6, 9, 12, 15]


//andrwe exemple 
// const numbers = [1, 2, 3, 4, 5]; //not our mass

// const ourArray =(transfer,numbersClone) => {//new mass
//   let newMass = []; //future mass
//   for (const numbersCloneElement of numbersClone) { //iteration of new mass
//     const newElement = transfer(numbersCloneElement); // rewrite transfer element
//     newMass.push(newElement); // rewrite new mass
//   }
//   return newMass; // return parametrs in numbersclone
// };

// const double = (number) => number *2; // our function 

// // const triple = (number) => number *3;
// const triple = function (number) {     //our function
//   return number * 3;
// }
// const doubledNumbers = ourArray(double, numbers); // we need results
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// const tripledNumbers = ourArray(triple,numbers);
// console.log(tripledNumbers); // [3, 6, 9, 12, 15]






// const numbers = [1, 2, 3, 4, 5];

// const ourArray =(transfer,numbersClone) => {
//  let newMass = [];
//  for (const numbersCloneElement of numbersClone) {
//    const newElement = transfer(numbersCloneElement);
//    newMass.push(newElement);
//  }
//  return newMass;
// };

// const double = (number) => number *2;

// // const triple = (number) => number *3;
// const triple = function (number) {
//  return number * 3;
// }
// const doubledNumbers = ourArray(double, numbers);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// const tripledNumbers = ourArray(triple,numbers);
// console.log(tripledNumbers); // [3, 6, 9, 12, 15]
 
 
 
 

// let a = 'gggg';

// const fn = function (value) {
//   // console.log('loaded');  // проверяем или функция вызвалась
//   const ifValue = Number(value) || a;
//   // console.log('ifValue', ifValue); // проверяем что на выходе в константе ifValue

//   if(!Number.isNaN(ifValue)) {
//     // console.log('firstIF'); // проверяем или выполняется первое условие
//     console.log(ifValue + 10);
//   } else {
//     // console.log('secondIF'); // проверяем или выполняется второе условие 
//     console.log('value is NaN');
//   }
// };

// fn(); 

// const printMessage = function (callback) {
//    const message = callback(); //вызываем функцию, чтобы поучить ее значение
//    console.log( message );
//  };
 
//  const getMessage = function () {
//    return "Welcome to the jungle!";
//  }
 
//  printMessage(getMessage); // "Welcome to the jungle!"


// дополнительные задания 3 модуля

/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки

// const checkNumberType = function(num) {
//    const even = num % 2 === 0;
//    const add = num % 2 !==0;
//    // return even ? 'even' : 'odd'; //которкая запись того, что внизу
// if ( even === true) {
//    return 'even';
// }
// else {
//    return 'odd'
// }

// };
// console.log( checkNumberType(8) ); // 'Even'

// console.log( checkNumberType(45) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(18) ); // 'Odd'


/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// // Вызовы функции для проверки
// let formatString = function (str) {
//    if (str.length < 40) {
//      console.log('str if < 40', str);
//      return str;
//    } else {
//      let newStr = str.slice(0, 40) + '...'
//      console.log('str if > 40', newStr);
//      return newStr;
//    }
//  }
// console.log(
//    formatString("Curabitur ligula sapien, tincidunt non.")
//  ); // вернется оригинальная строка
 
//  console.log(
//    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//  ); // вернется форматированная строка
 
//  console.log(
//    formatString("Curabitur ligula sapien.")
//  ); // вернется оригинальная строка
 
//  console.log(
//    formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//  ); // вернется форматированная строка
 

/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// // Вызовы функции для проверки
// const checkForSpam = function (str) {
//    if ( str.includes ('spam') || str.includes('sale')) {
//       return 'da';
//    }
//       return 'net';
//       // return ( str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale'))//еще один вариант записания
// }


// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true




/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// const getPx = function(str) {
//    if (typeof str === 'string') {
//       return Number.parseFloat (str)
//    }
//    return null
// }

// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null




/*
  Напишите функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

// const filterFromArray  = (...arr) => {
//    const newArr = arr [0];
//    arr.shift();
//    const newArr2 = arr;
   
//    console.log(newArr);
//    console.log(newArr2);
   
//    for (const number of newArr2){
//      if (newArr.includes(number)) {
//        newArr.splice(newArr.indexOf(number), 1, 'xxx');
//      }
//    }
//    console.log(newArr);
//  };
//  // Вызовы функции для проверки
//  console.log(
//    filterFromArray([1, 2, 3, 4, 5], 2, 4)
//  ); // [1, 3, 5]
//  console.log(
//    filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
//  ); // [12, 8, 17]



//  function showsms() {
//    let message = 'hello';
//    alert(message);
//  }
//  showsms();
 
 
 

// const userName = 'Vasia';
// function showMess() {
//   userName = 'Peter';
//   let message = 'hello, my name is' + userName;
//   alert(message);
// }

// // showMess();
// console.log ();


console.log(catName2('444', 222));

// console.log(catName('Ziuma', 555));


cont catName2 = function catName (nnnn, umui) {
  return nnnn + umui;
}
// console.log(catName2('444', 222));
// console.log();




function catName (nnnn, umui) {
  return nnnn + umui;
}
// console.log(catName('Ziuma', 555));
// console.log(catName('Keks', 333));



function Alert2 (message) {
  alert (message)
}


