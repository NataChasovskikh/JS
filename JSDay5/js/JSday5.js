'use scrict'
/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
// const newNmb = [8, 4, 7, 1, 11];
// const la = [1, 2, 3];

// const findLargestNumber = function(numbers){
   
//     let check = 0;
//     for (const index of numbers) {
//       if (check < index){
//          let qwerty = check > index;
         
//          console.log(`I compare if  ${check} is greater than ${index}. It is: ${qwerty}`);
// check = index;
//          console.log(check);      
//       }

//     } 
// }

// findLargestNumber(newNmb);jb

// // Вызовы функции для проверки
// console.log(findLargestNumber(la)); // вернет 3
 
//  console.log(
//    findLargestNumber([27, 12, 18, 51])
//  ); // вернет 27
 
//  console.log(
//    findLargestNumber([31, 128, 14, 74])
//  ); // вернет 128




 

 /*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];
// console.log(uniqueNumbers.includes(1));


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



 
// const hotel = {
//    name: "Resort Hotel",
//    stars: 5,
//    capacity: 100,
//  };
 
//  console.log( hotel.name ); // Resort Hotel
//  console.log( hotel["name"] ); // Resort Hotel
 
//  hotel.name = "Coastline Resort";
//  console.log( hotel.name ); // Coastline Resort
//  console.log( hotel["name"] ); // Coastline Resort
 
//  hotel["name"] = "Stardust Hotel";
//  console.log( hotel.name ); // Stardust Hotel
//  console.log( hotel["name"] ); // Stardust Hotel


// const user = {
//    name: 'Frank',
//    age: 21,
//    male: true,
//    getInfo: function () {
//       return `name: ${this.name} age: ${this.age} male: ${this.male}`
//    },
// };
// console.log(user.name);
// console.log(user.age);
// console.log(user.male);

// user.age = 26;
// user.height = 180;

// console.log('user', user);
// console.log(user.getInfo());

// delete user.male;
// console.log(user.male);
// console.log(user);

// for (const key in user) {
//    console.log(`${key}: ${user[key]}`);
// }

// const userArr = Object.entries(user);
// console.log(userArr);

// for (const el of userArr) {
//    console.log(`${el[0]}: ${el[1 ]}`);
   
// }



// const obj = {person: 'Thor Odinson'};
// const clone = Object.assign({}, obj);
// console.log.log(clone); // {person: 'Thor Odinson'}


//  let message = "Привет!";
//  let phrase = message;
//  console.log(message);
//  console.log(phrase);

//  message = 'By!'
 
//  console.log(message);
//  console.log(phrase);

// let box = {
//    color: 'red'
// }

// let box1 = box
// console.log(box);
// console.log(box1);

// box.color = 'blue';

// console.log(box);
// console.log(box1);


 
 




