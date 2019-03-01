'use strict'

// Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
//   Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
//     * sharm - 15
//     * hurgada - 25
//     * taba - 6.
//   Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
//   результат сохранить в переменную.
//   Необходимо проверить являются ли введенные данные целым положительным числом. 
  
//     - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
//       "Ошибка ввода" и больше ничего не делает.
//     - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
//     - В случае верного ввода, последовательно проверить кол-во мест в группах, 
//       и кол-во необходимых мест введенных пользователем.
//   Если была найдена группа в которой количество мест больше либо равно необходимому, 
//   вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
//   пользоваетель быть в этой группе?
//     * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
//     * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
  
//   Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'

// const sharm = 15;
// const hurgada = 25;
// const taba = 6;

// let hotel = "";

// const requiredPlaces = prompt('Введите количество мест');
// if (Number.isInteger(+requiredPlaces) && +requiredPlaces > 0) {
//   if (+requiredPlaces <= sharm){
//     if (confirm('хотите ли вы остаться в Sharm?')) {
//       alert('добро пожаловать в Sharm');
//     } else {

//       alert ('Нам очень жаль, приходите еще!');
//     }
//   }
//   else if (+requiredPlaces <= hurgada) {
//     if (confirm('хотите ли вы остаться в Hurgada?')) {
//       alert('добро пожаловать в Hurgada');
//     } else {

//       alert ('Нам очень жаль, приходите еще!');
//     }
//   }
//   else if (+requiredPlaces <= taba) {
//     if (confirm('хотите ли вы остаться в Taba?')) {
//       alert('добро пожаловать в Taba');
//     } else {

//       alert ('Нам очень жаль, приходите еще!');
//     }
//   }

// } else if (!requiredPlaces) {
//   alert ('Нам очень жаль, приходите еще!')
// }



// const sharm = 15;
// const hurgada = 25;
// const taba = 6;

// let hotel = "";

// const requiredPlaces = prompt('Введите количество мест');
// if (Number.isInteger(+requiredPlaces) && +requiredPlaces > 0) {
//   if (+requiredPlaces <= sharm){
//      hotel = "Sharm";    
//   }
//   else if (+requiredPlaces <= hurgada) {
//     hotel = "Hurgada"
//   }
//   else if (+requiredPlaces <= taba) {
//     hotel = "Taba"
//   }

//   if (confirm(`хотите ли вы остаться в ${hotel}?`)) {
//    alert(`добро пожаловать в ${hotel}?`);
//  } else {

//    alert ('Нам очень жаль, приходите еще!');
//  }

// } else if (!requiredPlaces) {
//   alert ('Нам очень жаль, приходите еще!')
// }


// const taba = 6;
// const sharm = 15;
// const hurgada = 25;


// let hotel = "";

// const requiredPlaces = prompt('Введите количество мест');
// if (Number.isInteger(+requiredPlaces) && +requiredPlaces > 0) {
//   if (+requiredPlaces <= taba){
//     hotel = "Taba"; 
//   }
//   else if (+requiredPlaces <= hurgada) {
//     hotel = "Hurgada";
//   }
//   else if (+requiredPlaces <= sharm) {
//     hotel = "Sharm";
//   }
//   if (confirm(`хотите ли вы остаться в ${hotel}?`)) {
//     alert(`добро пожаловать в ${hotel}`);
//   } else {

//     alert ('Нам очень жаль, приходите еще!');
//   }

// } else if (!requiredPlaces) {
//   alert ('Нам очень жаль, приходите еще!')
// }

// else if (!hotel) {
//    alert ('Извините, столько мест нет ни в одной ')
// }


// const clients = ["Mango", "Poly", "Ajax"];

// console.log( clients[0] ); // Mango
// console.log( clients[1] ); // Poly
// console.log( clients[2] ); // Ajax

// clients[3] ='Alex';
// console.log ( clients[3]); //Alex
// console.log (clients);
// clients.length = 2;
// console.log (clients.length); //2
// console.log (clients);


// split
// const message = "Welcome to Bahamas!";

// Разбивает строку по разделителю, в данном случае это пробел
// console.log(message.split(" ")); // ["Welcome", "to", "Bahamas!"]

// Вызов split с пустой строкой разобьёт по буквам
// console.log(message.split("")); // ["W", "e", "l", "c", "o", "m", "e", " ", "t", "o", " ", "B", "a", "h", "a", "m", "a", "s", "!"]

// join
// const clients = ["Mango", "Poly", "Ajax"];

// Сошьет все элементы массива в строку,
// между каждой парой элементов будет указанный разделитель
// console.log( clients.join(" ")); // "Mango Poly Ajax"
// console.log( clients.join(",")); // "Mango,Poly,Ajax"
// console.log( clients.join("-")); // "Mango-Poly-Ajax"



// const clients = ["Mango", "Ajax", "Poly", "Chelsey"];

// console.log( clients.indexOf('Poly') ); // 2
// console.log( clients.indexOf('Monkong') ); // -1

// console.log( clients.includes('Poly') ); // true
// console.log( clients.includes('Monkong') ); // false


// // Создаем пустой массив
// const stack = [];

// // Добавляем элементы в конец массива
// stack.push(1);
// console.log( stack ); // [1]

// stack.push(7);
// console.log( stack ); // [1, 2]

// stack.push(3);
// console.log( stack ); // [1, 2, 3]

// stack.push(9);
// console.log( stack ); // [1, 2, 3, 4]

// stack.push(6);
// console.log( stack ); // [1, 2, 3, 4, 5]

// // Удаляем элементы из конца массива
// console.log( stack.pop() ); //  5
// console.log( stack ); // [1, 2, 3, 4]

// console.log( stack.pop() ); //  4
// console.log( stack ); // [1, 2, 3]

// console.log( stack.pop() ); //  3
// console.log( stack ); // [1, 2]

// console.log( stack.pop() ); //  2
// console.log( stack ); // [1]

// console.log( stack.pop() ); //  1
// console.log( stack ); // []

// console.log( stack.pop() ); //  undefined


// const clients = ["Mango", "Ajax", "Poly"];

// console.log( clients.shift() ); // Mango

// console.log( clients ); // ["Ajax", "Poly"]

// clients.unshift( "Chelsey" );

// console.log( clients ); // ["Chelsey", "Ajax", "Poly"]




// // const clients = ["Mango", "Ajax", "Poly", "Chelsey"];

// // Вернет новый массив в котором будут элементы с индексами от 1 до 2
// console.log( clients.slice(1, 3) ); // ["Ajax", "Poly"]

// // Вернет новый массив в котором будут
// // элементы с индексами от 1 до (clients.length - 1)
// console.log( clients.slice(1) ); // ["Ajax", "Poly", "Chelsey"]

// // Вернет копию исходного массива
// console.log( clients.slice() ); // ["Mango", Ajax", "Poly", "Chelsey"]

// // Вернет новый массив состоящих из последних двух элементом исходного
// console.log( clients.slice(-2) ); // ["Poly", "Chelsey"]



// / Предположим, у вас есть массив языков
// программирования из четырех элементов.
// const languages = ['C', 'C++', 'Java', 'JavaScript'];

// Следующая операция заменяет второй элемент на новый.
// languages.splice(1, 1, 'Python');

// В массиве языков теперь все еще четыре элемента,
// но второй элемент теперь «Python» вместо «C++».
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Вы можете заменить один элемент на несколько элементов,
// передав больше аргументов
// languages.splice(2,1,'C#','Swift','Go');

// console.log(languages);
// ["C", "Python", "C#", "Swift", "Go", "JavaScript"]


// // Предположим, у нас есть массив оценок,
// // который содержит пять чисел от 1 до 5.
// const scores = [1, 2, 3, 4, 5];

// // Следующая операция удаляет три элемента массива,
// // начиная с первого элемента (индекс 0).
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента.
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента.
// console.log(deletedScores); // [1, 2, 3]


// Предполагая, что у вас есть массив
// с названиями цветов в виде строк.
// const colors = ['red', 'green', 'blue'];

// Следующая операция помещает один новый элемент
// перед вторым элементом.
// colors.splice(2, 0, 'purple');

// Теперь массив цветов содержит четыре элемента
// с новым элементом, вставленным во вторую позицию.
// console.log(colors); // ["red", "green", "purple", "blue"]

// Вы можете вставить более одного элемента,
// передав четвертый, пятый аргумент и т. д.
// colors.splice(1, 0, 'yellow', 'pink');


// const clients =  ["Mango", "Poly", "Ajax", "Romeo", "Gringo"];

// clients.splice(1, 0, "Evhen", 'Artem');
// console.log(clients);

// clients.splice(1, 2, 'Python');
// console.log(clients);

// const newClients = ['Adam', 'Frankly'];
// const newArr = clients.concat (newClients); //сщздает новый массив
// console.log('newArr', newArr);

// console.log(newArr.reverse());
// console.log('isArray', Array.isArray(newArr));//проверка на тип "array"



/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/


// let string = 'Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr';
// let arr;

// Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// arr = string.split(' ');

// console.log(arr);

// Вывести в консоли общую длину массива arr
// console.log();

// Используя цикл, вывести в консоль все индексы массива arr
// for (let i = 0; i < arr.length; i += 1) {
//    // console.log(i);
// }


// Используя цикл, вывести в консоль все элементы массива arr
// for (let i = 0; i < arr.length; i += 1) {
// console.log(arr[i])
// };

// Используя цикл, bывести в консоли все пары индекс:значение массива arr
// for (const val of arr) {
   // console.log(arr.indexOf(val) + ':' + val)
// }
// console.log();



/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
   Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз, 
   и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/

// let num =100;
// let input;

// do {
//    input = Number(prompt('Ввести число больше 100'))
// }
// while (input < num);


/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;

// for (let i = min; i < max; i += 1){
//    if ( i % 3 === 0 ){
//       console.log('Fizz');
//    }
//    if( i % 5 === 0 && i % 3 !== 0) {
//       console.log('Buzz');
//    }
//    else {
//       console.log(i);
//    }
// };

/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for(const newNumber of numbers) {
//    if(newNumber > num) {
//       newArray.push(newNumber);
//    }
// }
// console.log(newArray);


/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const string = "May the force be with you";
// let longestWord;

// const newArry = string.split(' ');
// longestWord = newArry [0];
// for (const value of newArry) {
//    if (value.length > longestWord.length) {
//       longestWord = value
//    }
// }

// console.log(longestWord); // 'force'


/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

// let arr = [];
// let ask;
// let sum = 0;
// do {
//    ask = Number(prompt('Enter number'))
//    if (ask !== 0){
//       arr.push(ask);
//    }   
//    console.log(ask);
//    console.log(arr);
// }
// while(ask === 0);

//    if (arr.length !== 0) {
//       for (const iteration of arr) {
//          sum += iteration;
         
//    }
// }
// console.log('The sum is: '+ sum);


/*
  ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ***
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41];
// const min = numbers[0];
// const max = numbers[4];
// const answer = Number (prompt (`Введите цифру между ${min} и ${max}`));
// if (Number.isNaN(answer)) {
//   alert ("это не число")
// } 
// else {
// if(numbers.includes(answer)) {
//   alert('Congrats!');
// } else {
//   alert('Сожалеем, Вы не угадали!')
// }
// }


//====================================================================
/* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */

// // Удалить из начала массива нулевой элемент
// users.shift();
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // Удалить из конца массив последний элемент
// users.pop();
// console.log(users); // ["Poly", "Ajax"]

// // Добавить в начало массива любое имя
// users.unshift('Molly');
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// // Добавить в конец массива два любых имени за одну операцию
// users.push('Karl', 'Sara');
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]
//===================================================================================
/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

// let string = prompt('ввести произвольную строку');
// let arr =[];




// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// arr = string.split(' ');
// console.log(arr);

// // Вывести в консоли общую длину массива arr
// console.log(arr.length);

// // Используя цикл, вывести в консоль все индексы массива arr

// for (let num of arr){
//   let numbers = arr.indexOf(num);
//   console.log(numbers);
// }
// console.log();

// // Используя цикл, вывести в консоль все элементы массива arr
// for (let elements of arr){
//   console.log(elements);
// }


// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// for (let elements of arr){
//   let numbers = arr.indexOf(elements);
//   console.log(`${numbers}: ${elements}`);
// }

//======================================================================
/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
   Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз, 
   и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/
// let num 
// do{ num = Number(prompt('введите число больше 100'));
// }while ( num < 100 ||num === 0 );
//================================================================================
/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;

// for (let i = min; i < 100; i += 1){
//   if ( i % 3 === 0){
//     console.log('fizz');   
//   }else if (i % 5 === 0 && i % 3 !==0){
//     console.log('buzz');
//   }else {
//     console.log(i);    
//   }
// }
//===================================================
/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for (let element of numbers) {
//   if (num < element){
//     newArray.push(element)
//   }
// }
// console.log(newArray);
//================================================================
  /*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.

*/

// const string = "May the force be with you";
// let longestWord;

// let newString = string.split(' ');
// longestWord = newString[0];
// for (let items of newString) {
//   if (items.length > longestWord.length)
//   longestWord = items;
// }
// console.log(longestWord); // 'force'

//=====================================================================
/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

// let enterNumber;
// let arr = [];

// do {
//   enterNumber = prompt("vvedite chislo");
//   if (enterNumber !== null) {
//     arr.push(Number(enterNumber));
//     console.log(arr);
//   }
// } while (enterNumber !== null);

// let summ = 0;
// if (arr.length > 0) {
//   for (let input of arr) {
//     summ = summ + input;
//   }
//   console.log(`'summa vseh chisel:' ${summ}`);
// }

//=============================================================