'use srtict'

// const uniqueNumbers  = [2, 1, 4, 9];

// const checkIfIncludes = (...arguments)=>{
//     //Тут ми виводимо в консоль початковий массив
//     console.log('Before push '+uniqueNumbers);
//     //Цикл отримає в index ожен окремий пункт массиву arguments
//     for (const index of arguments){
//         //В змінну чекІф потрапляє результат методу includes(), який вертає true або false
//         let checkIf = uniqueNumbers.includes(index);
//         //Перша перевірка Іф приймає лише true або false. Якщо умова true то виводимо в консоль: "Ця цифра присутня"
//         if (checkIf){
//             console.log(`This number(${index}) is already in array!`);
//             // У всіх інших випадках виводимо в консоль: "Цюго числа намає". Та додаємо в массив методом push(сюди вписуємо що запушити)
//         } else {
//             console.log(`Number ${index} is not in array.`);
//             //Пушимо
//             uniqueNumbers.push(index);
//         }
//==================================================================================================================================
// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];





// const isLoginValid = function(login) {
//  // console.log(login.length);
//   if ( 4 <= login.length &&  login.length <= 16){
//     return true;
//   }
//   else {
//     return false;
//   }  
// };
// var res = isLoginValid ('login');
// // console.log(res);

// //вщзвращает тру, если элемента нет в массиве и фолс, если елемент есть
// const isLoginUnique = function(allLogins, login) {
//   if (logins.includes(login)) {
//     return false;
//   }
//   else {
//     return true;
//   } 
    
  
//   // return !allLogins.includes(login);
     
// };


// console.log(isLoginUnique(logins,'Natasha'));
// console.log(isLoginUnique(logins,'Mango'));



// const addLogin = function(login) {
//   let valid = isLoginValid(login);
//   if (valid === true){
//     let unique = isLoginUnique(logins, login);
//     if (unique === true){
//       logins.push(login);
//       return 'Логин успешно добавлен!';
//     }
//     else {
//       return 'Такой логин уже используется!';
//     }
//   }
//   else {
//      return 'Ошибка! Логин должен быть от 4 до 16 символов';
//   }
  
  
// };

/* const addLogin = function(login) {
  if (isLoginValid(login)){
    if (isLoginUnique(logins, login)){
      logins.push(login);
      return 'Логин успешно добавлен!';
    }
    else {
      return 'Такой логин уже используется!';
    }
  }
  else {
     return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  
  
}; */

// const addLogin = function(login) {
//   if (!isLoginValid(login)){
//     return 'Ошибка! Логин должен быть от 4 до 16 символов';
//   } 
  
//   if (isLoginUnique(logins, login)){
//     logins.push(login);
//     return 'Логин успешно добавлен!';
//   } 
  
//   return 'Такой логин уже используется!';
  
// }



// Вызовы функции для проверки
// console.log(addLogin('Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin('robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin('Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin('jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

//=========================================================================================

// function returnKatName (name, lastName) {
//   return (name + " " + lastName); 
// }
// returnKatName('Zuma','Kuzia');
// returnKatName('Keks');


//  var name = Sonya;
//  let name1 = ;

// window.alert()


// var a = 0;
// let a = 33;

// function test() {
//   var a = 1;
//   let b = 11;

//   if (true) {    
//     var a = 2;
//     let b = 22;
//   } 
  
// console.log(a);
// console.log(b); 
// }

// test(); 
  
// function test() {
// var a;
// let b;

//   a = 1;
//   b = 11;

//   if (true) {    
//     a = 2;
//     let b = 22;
//   } 
  
// console.log(a);
// console.log(b); 
// }

//=============================================================================





