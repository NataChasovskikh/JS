'use scrict'
// еще один счетчик ----------------
// let a  = ['maksim', "masha", 'vova'];
// let num = 0;
// for (const value of a) {
// console.log (value + ':' + num);
// num += 1;
// или другая запись
// console.log (value + ':' + a.indexOf(value));
// }



// let num = 0;
// do {
// num += 20;
// }while (num > 200);

// let num = 0;
// const users = ['Alex', 'sweta', 'Nikolay', 'Helen', ];
// while ( num < users.length){
//    if ( users[num] === 'sweta'){
//       console.log('Alex найден');
//    // break;
//    }
//    if (num === (users.length -1)) {
//       console.log('User не найден');
//    }
//    num += 1;
// }


// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) continue;

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }


// let num = 0;
// const users = ['Alex', 'Nikolay', 'Helen', 'Sweta',];
// do {
//    if (users[num] === 'Helen') {
//       continue     
//    }
//    console.log('Hello:', users[num]);
   
//    num += 1;
// }while(num >= users.length);

// let num = 0;
// const users = ['Alex', 'Nikolay', 'Helen', 'Sweta',];
// for (num < )


// let i = 0;
// const users = ['Jim','Bem','Dambo','Alert','Alex', 'Nikol', 'Helen', 'And someone else'];

// do{
//     console.log('Datz is number of iteration: '+i);
//     if (users[i]==='Alex'){
//         console.log('We have found Alex!!!');
//         i++;
//         continue
//     }
//     console.log('Iteration after if');
//     console.log(users[i]);
//     i++;
// }while(i <users.length);

// let a = 'Hello, Taras'
// if (5 >3) {
//     let a = 'Hello, Max!';
//     // console.log (a);
// }
// let b = a + "! how are you";
// console.log(b);



// const showTestDays = function(name = "Пользователь", days = 30) {
//     return `Имя - ${name}, исп ${days} тестовых дня(ей)`;
//   }
  
//   console.log( showTestDays("катерина", 10 ) );
//   // "Имя - Екатерина, использовано 10 тестовых дня(ей)"
  
//   console.log( showTestDays("михаил") );
//   // "Имя - Михаил, использовано 30 тестовых дня(ей)"
  
//   console.log( showTestDays(" mary", 20) );
//   // "Имя - Пользователь, использовано 30 тестовых дня(ей)"

// console.log(show('hello', 'my'));

// function show () {
//     const max = arguments.length//кол-во элементов псевдомассива arguments  
   
//     return max
// }

// const summ = function() {
//     const max = arguments.length//кол-во элементов псевдомассива arguments
//     let total = 0;
  
//     for (let i = 0; i < max; i += 1) {
//       total += arguments[i];
//     }
  
//     return total;
//   };
  
//   console.log(summ(2,4,6,8,1,2,1));
//===== module3 #1 ============================================================================
/*
  Напишите функцию checkNumberType(num)
  
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/
// function checkNumberType(num) {
// if ( num % 2 !== 0){
// return 'odd';
// }else {
//     return 'even';
// }
// }

// // Вызовы функции для проверки
// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'
//=========#2===============================================================/*
//   Напишите функцию formatString(str)
  
//   - Функия принимает на вход строку str
//   - Если длина строки не превышает 40 символов, функция возвращает ее. 
//   - Если длина больше 40 символов, то функция обрезает строку до 40-ти
//     символов и добавляет в конец строки троеточие '...', после чего 
//     возвращает укороченную версию.
// */
// function formatString (str) {    
//     console.log(str.length);
//     if( str.length >= 40){
//         return str.slice (0,39) + '...';
//     }
//     else {
//         return str;
//         }
// }

// // Вызовы функции для проверки
// console.log(
//   formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка

// console.log(
//   formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка
//====#3=========================================================
/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true
//==== 4 =====================================================================
/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/
// function getPx (str){
//     if(typeof str === 'string'){
//         return parseFloat(str);        
              
//     }else {
//         return null; 
//     }
// }
// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null
//======== 5 ================================================================
/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/
// function findLongestWord (str){
//     let longWordArr = str.split(' ');   
    
//     console.log(longWordArr);
//     let longstring = longWordArr[0];
    
    
//     for (let element of longWordArr){
//         if( element.length > longstring.length) { 
//             longstring  = element;                   
//         }       
//     }
//     return longstring; 
// }

// // Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // вернет 'jumped'
  
//   console.log(
//     findLongestWord("Google do a roll")
//   ); // вернет 'Google'
  
//   console.log(
//     findLongestWord("May the force be with you")
//   ); // вернет 'force'
  
//============== 6 =================================
/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
// function findLargestNumber (numbers) {
//     let maxnumber = numbers [0];
//     for (let numb of numbers) {
//     if (numb > maxnumber){
//         maxnumber = numb;
//     }
//     }
//     return maxnumber;
// }

// function findLargestNumber (numbers) {
//     let max = 0;
//     for (let num of numbers) {
//         if (num > max){
//             max = num;
//         }
//     }
//     return max;
// }
// // Вызовы функции для проверки
// console.log(
//     findLargestNumber([1, 2, 3])
//   ); // вернет 3
  
//   console.log(
//     findLargestNumber([27, 12, 18, 5])
//   ); // вернет 27
  
//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   ); // вернет 128
  
//===================== 7 ==========================
/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];
// console.log(uniqueNumbers);

// function addUniqueNumbers () {
//     for (let item of arguments){
//         if (!uniqueNumbers.includes(item)){
//             uniqueNumbers.push(item)
//         }
//     }
// }
// function addUniqueNumbers (...res) {
    
//     for (let index of res){
//         if (!uniqueNumbers.includes(index)){
//         uniqueNumbers.push(index)         
//         }
//     }
// }

// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

//======= 8 =========================================
/*
  Напишите функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

// const filterFromArray = function(arr, ...args) {
// //   console.log(arr);
// //   console.log(args); 
// // let newArr = [];
// for (let input of args) {
//     if (arr.includes(input)){
//         arr.splice((arr.indexOf(input)), 1);
//     }    
// }
// return arr;
// } 

// // Вызовы функции для проверки
// console.log(filterFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]

// console.log(filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // [12, 8, 17]

//============================================================================

