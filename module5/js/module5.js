'use strict'
// const users = [
//    {
//      id: '121asdasda',
//      name: 'Gleb',
//      sex: 'male',
//      position: 'manager',
//      salery: 24
//    },
//    {
//      id: '121a232asda',
//      name: 'Alin',
//      sex: 'female',
//      position: 'solider',
//      salery: 15
//    },
//    {
//      id: '11241asda',
//      name: 'Adam',
//      sex: 'male',
//      position: 'developer',
//      salery: 19
//    },
//    {
//      id: '94421asda',
//      name: 'Funk',
//      sex: 'female',
//      position: 'developer',
//      salery: 13
//    },
//    {
//      id: '77221asda',
//      name: 'Gooliver',
//      sex: 'male',
//      position: 'gooliver',
//      salery: 17
//    }
//  ];
// //  console.log(users[1].id, users[2].sex);
 
 //шукємо usera по id
//  for (const elem of users){
   // console.log(elem);
   // if (elem.id === '94421asda'){
      // console.log(elem);
   // }   
//  }

//  function findById ( id ) {
//    for (const elem of users){
//       if (elem.id === id)
//          return elem;
//    }
//  }
//  console.log(findById('94421asda'));
 
// function findBy ( id, action ) {
//    for (const elem of users){
//       let find = action(id, elem);
//       if (find !==null) {
//          return find;
//       }
//    };
// }

// const byId = (id, elem) => elem.id === id ? elem : null;
// const byName = (name, elem) => elem.name === name ? elem : null;
// console.log(findBy('121a232asda', byId));
// console.log(findBy('Adam', byName));

// const map = function (arr, change, currency, pdw) {
//    let newArr = [];
//    for (let num of arr){
//       newArr.push(change(num.salery, currency, pdw));      
//    }
//    return newArr;
// }
// const changeSalery = (salery, currency, pdw) => Math.round(salery * currency * (1 - pdw/100));
// console.log(map(users, changeSalery, 30, 20));

//============== module 5 # 1 ========================
/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => arr.filter((i) => i > num);
   // const result = [];
 
   // for (let i = 0, max = arr.length; i < max; i += 1) {
   //   if (arr[i] > num) {
   //     result.push(arr[i]);
   //   }
   // } 
 
   // return result;
 
 
//  console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
//  console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
//  console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
 
 /* 
   Функция multiplyBy принимает два аргумента - число и массив. 
   Возвращает массив все значения которого умножены на число.
 */
//  const multiplyBy = (num, arr) => arr.map((i) => i * num);
//  {
//    let result = [];
 
//    for (let i = 0, max = arr.length; i < max; i += 1) {
//      result.push(arr[i] * num);
//    }
 
//    return result;
//  };
 
//  console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
//  console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
//  console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
 
 /* 
   Функция summAllNumbers принимает любое число аргументов.
   Возвращает число - сумму всех аргументов.
 */
//  function summAllNumbers(...args){
//     return args.reduce((acc, i) => acc + i,0);
//  };
//  {
//    let accumulator = 0;
 
//    for (let i = 0, max = args.length; i < max; i += 1) {
//      accumulator += args[i];
//    }
 
//    return accumulator;
//  }
 
//  console.log( summAllNumbers(1, 2, 3) ); // 6
//  console.log( summAllNumbers(1, 2, 3, 4) ); // 10
//  console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
 
 /* 
   Функция findEvery получает два аргумента - число и массив.
   Возвращает true если все элементы массива больше или равны числу.
   Иначе если есть хоть один элемент меньше числа, то возвращается false.
 */
//  const findEvery = (num, arr) => arr.every((i) => num <= i);
//  {
//    for (let i = 0, max = arr.length; i < max; i += 1) {
//      if (arr[i] < num) {
//        return false;
//      }
//    }
 
//    return true;
//  };
 
//  console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
//  console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
//  console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true

//============== module 5 # 2 =====================================
/*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//    { name: "Mango", age: 20, isActive: true },
//    { name: "Poly", age: 18, isActive: false },
//    { name: "Ajax", age: 30, isActive: true },
//    { name: "Chelsey", age: 45, isActive: false }
//  ];
//  function getPropValues (arr, prop) {
//     return arr.map((i) => i[prop]);
//  }
 
//  // Вызовы функции для проверки
//  console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
 
//  console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
 
//  console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
 

//============== module 5 # 3 =====================================

 /*      
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const users = [
//    { name: 'Mango', inactiveDays: 15, isActive: true },
//    { name: 'Poly', inactiveDays: 8, isActive: false },
//    { name: 'Ajax', inactiveDays: 32, isActive: false },
//    { name: 'Chelsey', inactiveDays: 85, isActive: true }
//  ];

// //  const setGuestState =(guests, period) => guests.map((x) => x.inactiveDays > period ? x.isActive = false : x.isActive = true )
 
// const setGuestState = (guests, period) => guests.map((x) => ({
//    ...x,
//    isActive: x.inactiveDays < period
//  }));

//   console.log(updatedUsers);
// const setGuestState = (users, period) =>
//    users.map(
//      obj =>
//        obj.inactiveDays < period
//          ? { ...obj, isActive: true }
//          : { ...obj, isActive: false }
//    );
//  // Вызовы функции для проверки
//  console.log(
//    setGuestState(users, 10)
//  ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
 
//  console.log(
//    setGuestState(users, 20)
//  ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
 
//  console.log(
//    setGuestState(users, 50)
//  ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

//============== module 5 # 4 =====================================
 /*
  Напишите функию getActiveGuests(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.
         
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//    { name: "Mango", age: 20, isActive: true },
//    { name: "Poly", age: 18, isActive: false },
//    { name: "Ajax", age: 30, isActive: true },
//    { name: "Chelsey", age: 45, isActive: false }
//  ];

//  function getActiveGuests(guests) {
//     return guests.filter(function(guests){
//        return guests.isActive;
//     } )
//  }
//======
// function getActiveGuests(guests){


//    return guests.filter(function(el){
//        if(el.isActive === true)
//        return el;
//        // console.log(el);
//      })
    
//    }
//======
// const getActiveGuests = (guests) => guests.filter(i => i.isActive === true);
 
//  // Вызовы функции для проверки
//  console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
 
//============== module 5 # 5 =====================================
/*      
  Напишите функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста 
  для сортировки. 
  
  Функция возвращает массив объектов значение свойства 
  age которых больше чем параметр age.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//    { name: "Mango", age: 20, isActive: true },
//    { name: "Poly", age: 18, isActive: false },
//    { name: "Ajax", age: 30, isActive: true },
//    { name: "Chelsey", age: 45, isActive: false }
//  ];
//  const getGuestsOlderThan = (arr, age) => arr.filter((i) => i.age > age)
 
//  // Вызовы функции для проверки
//  console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
 
//  console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
 
//  console.log(getGuestsOlderThan(guests, 55)); // []

//============== module 5 # 6 =====================================
/*
  Напишите функию getGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//    { id: 1, name: 'Mango', age: 20 },
//    { id: 2, name: 'Poly', age: 18 },
//    { id: 3, name: 'Ajax', age: 30 },
//    { id: 4, name: 'Chelsey', age: 45 }
//  ];
//  const getGuestById = (arr, id) => arr.find((element) => element.id === id);
 
//  // Вызовы функции для проверки
//  console.log(
//    getGuestById(guests, 3)
//  ); // {id: 3, name: 'Ajax', age: 30}
 
//  console.log(
//    getGuestById(guests, 1)
//  ); // {id: 1, name: 'Mango', age: 20}
 
//  console.log(
//    getGuestById(guests, 5)
//  ); // undefined

//============== module 5 # 7 =====================================
/*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/ 
// const order = {
//    bread: 10,
//    apples: 25,
//    chicken: 60,
//    milk: 15,
//    cheese: 40
//  };
//  const arrr = Object.values(order);
//  let summ = arrr.reduce((acc, value) => acc + value);
// console.log(); // 150
 //=======

//  console.log(Object.values(order).reduce((acc, value) => acc + value)); // 150

//============== module 5 # 8 =====================================
/*
  Напишите функцию getTotalPrice(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  PS: используйте метод reduce
*/
// const getTotalPrice = function(products, order) {
//    let kay = Object.keys(order);
//    return kay.reduce ((acc,element) => acc + order[element] * products[element], 0)
// }

// const products = {
//    bread: 10,
//    milk: 15,
//    apples: 20,
//    cheese: 30,
//    chicken: 40
//  };
 
//  const orderA = {
//    bread: 2,
//    apples: 4,
//    chicken: 1
//  };
 
//  const orderB = {
//    bread: 1,
//    milk: 2,
//    cheese: 3
//  };
 


 // Вызовы функции для проверки
//  console.log(getTotalPrice(products, orderA)); // 140
 
//  console.log(getTotalPrice(products, orderB)); // 130

//============== module 5 # 9 =====================================
/*     
  Напишите функию allGuestsActive(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать true если значение поля isActive 
  всех объектов true, в противном случае false.
  
  PS: используйте метод every или some, никаких for!
*/
// let allGuestsActive = (guests) => guests.every(el => el.isActive)

// const guestsA = [
//    { name: "Mango", isActive: true },
//    { name: "Poly", isActive: false },
//    { name: "Ajax", isActive: true }
// ];

// const guestsB = [
//    { name: "Mango", isActive: true },
//    { name: "Poly", isActive: true },
//    { name: "Ajax", isActive: true }
// ];
// // Вызовы функции для проверки
// console.log(allGuestsActive(guestsA)); // false

// console.log(allGuestsActive(guestsB)); // true

//=============================================================
//============homework=========================================
/*
 * Используя массив (users) объектов пользователей, напишите функции которые с помощью 
 * функциональных методов массивов (никаких for, splice и т.д.) выполняют указанные операции.
 */

/**
 * Получить массив имен (поле name) всех пользователей
//  */
// 
const users = [
   {
     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
     name: 'Moore Hensley',
     email: 'moorehensley@indexia.com',
     eyeColor: 'blue',
     phone: '+1 (848) 556-2344',
     friends: ['Sharron Pace'],
     isActive: false,
     balance: 2811,
     skills: ['ipsum', 'lorem'],
     gender: 'male',
     age: 37,
   },
   {
     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
     name: 'Sharlene Bush',
     email: 'sharlenebush@tubesys.com',
     eyeColor: 'blue',
     phone: '+1 (855) 582-2464',
     friends: ['Briana Decker', 'Sharron Pace'],
     isActive: true,
     balance: 3821,
     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
     gender: 'female',
     age: 34,
   },
   {
     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
     name: 'Ross Vazquez',
     email: 'rossvazquez@xinware.com',
     eyeColor: 'green',
     phone: '+1 (814) 593-3825',
     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
     isActive: false,
     balance: 3793,
     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
     gender: 'male',
     age: 24,
   },
   {
     id: '249b6175-5c30-44c6-b154-f120923736f5',
     name: 'Elma Head',
     email: 'elmahead@omatom.com',
     eyeColor: 'green',
     phone: '+1 (909) 547-2687',
     friends: ['Goldie Gentry', 'Aisha Tran'],
     isActive: true,
     balance: 2278,
     skills: ['adipisicing', 'irure', 'velit'],
     gender: 'female',
     age: 21,
   },
   {
     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
     name: 'Carey Barr',
     email: 'careybarr@nurali.com',
     eyeColor: 'blue',
     phone: '+1 (956) 512-2693',
     friends: ['Jordan Sampson', 'Eddie Strong'],
     isActive: true,
     balance: 3951,
     skills: ['ex', 'culpa', 'nostrud'],
     gender: 'male',
     age: 27,
   },
   {
     guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
     name: 'Blackburn Dotson',
     email: 'blackburndotson@furnigeer.com',
     eyeColor: 'brown',
     phone: '+1 (876) 411-2433',
     friends: ['Jacklyn Lucas', 'Linda Chapman'],
     isActive: false,
     balance: 1498,
     skills: ['non', 'amet', 'ipsum'],
     gender: 'male',
     age: 38,
   },
   {
     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
     name: 'Sheree Anthony',
     email: 'shereeanthony@kog.com',
     eyeColor: 'brown',
     phone: '+1 (979) 504-2554',
     friends: ['Goldie Gentry', 'Briana Decker'],
     isActive: true,
     balance: 2764,
     skills: ['lorem', 'veniam', 'culpa'],
     gender: 'female',
     age: 39,
   },
 ];

// const getAllNames = (arr) => arr.map((element) => element['name']);

// console.log(getAllNames(users)); 
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

                            
/**
 * Получить массив объектов пользователей по цвету глаз (поле eyeColor)
 */

// const getUsersByEyeColor = (arr, color) => arr.filter((element) => element.eyeColor === color);

// console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

                                            
/**
 * Получить массив имен пользователей по полу (поле gender)
 */
// const getUsersByGender = (arr, gender) => arr.filter((element) => element.gender === gender).map((element) => element.name);
// console.log(getUsersByGender(users));


// console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


/**
 * Получить массив только неактивных пользователей (поле isActive)
 */
// const getInactiveUsers = arr => arr.filter((element) => !element.isActive);

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
                      
                                 
/**
 * Получить пользоваля (не массив) по email (поле email, он уникальный)
 */
// const getUserByEmail = (arr, email) => arr.filter((element) => element.email === email);

// console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


/**
 * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
 */
// const getUsersWithAge = (arr, min, max) => arr.filter((element) => element.age > min && element.age < max);

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
                                            
// console.log(getUsersWithAge(users, 30, 40)); 
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
                                 
                                 
/**
 * Получить общую сумму баланса (поле balance) всех пользователей
 */
// const getTotalBalance = arr => arr.reduce((acc, element) => acc + element.balance, 0);

// console.log(getTotalBalance(users)); // 20916
                                
                                
// /**
//  * Массив имен всех пользователей у которых есть друг с указанным именем
//  */
// const getUsersByFriend = (arr, name) => arr.filter((element) => element.friends.includes(name)).map((element) => element.name);

// console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
                                            


/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
*/
                                         
/**
* Получить массив всех скиллов всех пользователей (поле skills), при этом не должно быть
* повторяющихся скиллов и они должны быть отсортированы в алфавитном порядке
*/
// const getAllUniqueSkills = arr => 
const getScills = function(users){
  let  array = [];
   users.forEach(function(element){
    //  console.log(element.skills); 
     array = array.concat(element.skills);
   });
  return array;
}
getScills(users);
function arrSort(skills){
  return skills.sort();
}
let sort = arrSort(getScills(users));
console.log(sort);

const isUnique = function(arr){
    let newSkills = [];
    arr.forEach(function(item){
      if(!newSkills.includes(item)){
        newSkills.push(item)
      } 
    });
    return newSkills;  
  }

  let uniqS = isUnique(arrSort(getScills(users)));  
  console.log(uniqS);
 
// console.log(getAllSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

                             
// /**
// * Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// */
// const getUserNamesSortedByFriendsCount = arr => {...};

// console.log(getUserNamesSortedByFriendsCount(users)); 
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


// const Nat = {
//   eyeColor: 'green',
//   masa: 50,
//   height: '150cm',
//   mama: {},
//   sing: function numberrr (num){
//     return this.num;
//   },
// };

// function numberrr (num){
//   return Nat.num;
// }
// numberrr();

// var myCar = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 19 69;

// const myCar2 = {
//   make: 'volovo',
//   model: 'fff',
//   year: 1970,
// };

// myCar2.eat = function eatCar2(){
//   return 'oil';
// }

// // let t = 'eat';
// myCar2['eat'] = function eatCar22(){
//   return 'oil';
// };

// console.log(myCar2.eat());

// myCar.model;
// myCar2.color;

// let zz = 'zz  z';
// myCar2[zz] = 'aaa';
// console.log(myCar2);
// console.log(myCar2['zz  z']);
//  ;

// function alertName(){
//   return;
// }
// alertName();
// console.log('keks');

// window.alertName();

// var c = {
//   name: 'The c object',
//   log: function(){
//     this.name = 'Updates c object';
//     console.log(this);

//     var setname = function(newname) {
//       this.name = newname;
//       console.log(this);      
//     }

//     console.log(this);        
//   }
// };
// console.log(c.log());


// function name () {
//   return 'd';
// }

// const d = () => "d";

// const f = () => {
//   const a = 'd' + 'c';
//   return a;
// }
// console.log(f())


// // const getUseer = function(arr, min, max) {

// //   function filterCheck(element) {
// //     return element.age > min && element.age < max;
// //   }

// //   return arr.filter(filterCheck);
// // }

// const getUseer = (arr, min, max) => arr.filter((element) => element.age > min && element.age < max);
  

// const ccc = getUseer([{
//   age: 30
// }], 2, 35);

// console.log(ccc);
