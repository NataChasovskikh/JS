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

console.log(show('hello', 'my'));

function show () {
    const max = arguments.length//кол-во элементов псевдомассива arguments  
   
    return max
}

// const summ = function() {
//     const max = arguments.length//кол-во элементов псевдомассива arguments
//     let total = 0;
  
//     for (let i = 0; i < max; i += 1) {
//       total += arguments[i];
//     }
  
//     return total;
//   };
  
//   console.log(summ(2,4,6,8,1,2,1));
