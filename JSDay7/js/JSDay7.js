'use scrict'

// const user = {
//    name: 'Baron',
//  };
 
//  const user1 = {
//    name: 'Vasya',
//  };
 
//  const myFunc = function (message = '') {
//    console.log('this in myFunc:', this);
//    return `Hello my name is ${this.name}. ${message}`;
//  };
 // console.log(myFunc()); // 'name' of undefined
//  const result = myFunc.call(user, ['How are you?']);
//  console.log(result);
 
//  user.getMyname = myFunc;
//  console.log('call user1 to user.getMyName:',user.getMyname.call(user1));
 
//  console.log('from user: ', user.getMyname());


//  const action = function (callback) {
//     return callback('How are you?','ssss');
//  };
//  console.log(action(myFunc.bind(user1)));
  

// const cat = {
//    breed: 'siames'
// };
// const MyCat = function () {
//    return `MyCat породы ${this.breed}`;    
// }
// console.log(MyCat.call(cat));

// const kitty = {
//    breed: 'sphinx'
// };

// const kittyBreed = function(message) {
//    console.log(this.breed);   
//    return `kittyBreed породы ${message} ${this.breed} `;   
// };
// console.log(kittyBreed.apply(kitty));

// const dog = {
//    breed: 'boxer'
// };
// const dogCat = function(callback) {
//    return callback ('new breed:');
// }
// console.log(dogCat(kittyBreed.bind(cat)));


// const Dog = function (
//    name = 'Bolls',
//    age,
//    breed,
//    color,
//    male,
//    vegetarian,
//    facebook
//  ) {
//    this.name = name;
//    this.age = age;
//    this.breed = breed;
//    this.color = color;
//    this.male = male;
//    this.vegeterian = vegetarian;
//    this.facebook = facebook;
//    this.yelp = function () {
//      return `wwwwwoooooof wwwwwwwwwoooofff ffff`
//    }
 
//  };
 
//  const dog = new Dog('Poops', 3, 'чау-чау', 'red', 'female', true, 'http://facebook.com/poops');
//  console.log(dog);
 
//  console.log(dog.yelp());
//  dog.getAboutData = function () {
//    return `name: ${this.name}; age: ${this.age}; breed: ${this.breed}`;
//  };
 
//  console.log(dog.getAboutData());
//   dog.clicka = 'click';
//   console.log(dog);
 
//  const dog1 = new Dog(undefined, 5, 'боксер', 'black', 'male', false, '' );
 
//  console.log('dog:', dog);
//  console.log('dog1:', dog1);
 
 
//===============================================
// задача 1 модуль 4

/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//    name: "Mango",
//    age: 20,
//    hobby: "html",
//    premium: true
//  };
//  console.log(user)

// user.mood = 'happy';
// console.log(user);
// console.log(user.hobby = 'javascript');
// delete user.premium;
// console.log(user);

// for (let kays in user) {
//    console.log(`${kays}: ${user[kays]}`);  
// }

// const keys = Object.keys(user) 
//    for (const elements of keys) {
//       console.log(`${keys}: ${user[keys]}`)
//    }


//=====================================================

// const numbers = [1, 2, 3, 4, 5]; //not our mass

// // const ourArray =(transfer,numbersClone) => {//new mass
// //   let newMass = []; //future mass
// //   for (const numbersCloneElement of numbersClone) { //iteration of new mass
// //     const newElement = transfer(numbersCloneElement); // rewrite transfer element
// //     newMass.push(newElement); // rewrite new mass
// //   }
// //   return newMass; // return parametrs in numbersclone
// // };

// const double = (number) => number *2; // our function

// const triple = (number) => number *3;
// // const triple = function (number) {     //our function
// //   return number * 3;
// // };
// // const doubledNumbers = ourArray(double, numbers); // we need results
// // console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// // const tripledNumbers = ourArray(triple,numbers);
// // console.log(tripledNumbers); // [3, 6, 9, 12, 15]

// const newMass = [];
// numbers.map(function(el){ return newMass.push(el*2) });
// newMass2 = [];
// numbers.map(function(el){
//   return newMass2.push(triple(el));
// });

// console.log(numbers);
// console.log(newMass);
// console.log(newMass2);

//==============================================
// обьявляем функцию с аргументами arr(массивом), callback(функцией)
 // обьявляем пустой массив, в который будет записывать новые эл-ты
  // перебираем, входящий при вызове функции массив, записанный в аргумент arr.
  // в теле цикла елементы пропускаем через функцию callback, обьявленную в аргументах
  // и записываем результат callback-функции в переменную result.
  // поседним этапом цикла - записываем result в новый массив, выходим из массива.
  // последним этапом функции map будет возврат(return) переменной resultArr.
//   const numbers = [1, 2, 3, 4, 5]; //not our mass

  // const ourArray =(transfer,numbersClone) => {//new mass
  //   let newMass = []; //future mass
  //   for (const numbersCloneElement of numbersClone) { //iteration of new mass
  //     const newElement = transfer(numbersCloneElement); // rewrite transfer element
  //     newMass.push(newElement); // rewrite new mass
  //   }
  //   return newMass; // return parametrs in numbersclone
  // };
  
//   const double = (number) => number *2; // our function
  
//   const triple = (number) => number *3;
//   // const triple = function (number) {     //our function
  //   return number * 3;
  // };
  // const doubledNumbers = ourArray(double, numbers); // we need results
  // console.log(doubledNumbers); // [2, 4, 6, 8, 10]
  // const tripledNumbers = ourArray(triple,numbers);
  // console.log(tripledNumbers); // [3, 6, 9, 12, 15]
  
  // const newMass = [];
  // numbers.map(function(el){ return newMass.push(el*2) });
  // newMass2 = [];
  // const cb = function(el){
  //   return newMass2.push(triple(el));
  // };
  // numbers.map(cb);
  
  
  
  // console.log(numbers);
  // console.log(newMass);
  // console.log(newMass2);
  
  
//   const values = [5, 7, 8, 9];
//   // const newArr = values.map(function(el, index) { return el * 2; });
//   // const newArr = values.map((el) => double(el));
//   const newArr = values.map(double);
  
//   console.log(newArr);
 
//============================================================

// const numbers = [31, 32, 13, 44, 25];
// //сделать перебор циклом элемента
// // // умножая его на курс гривны
// // // добавляя его в новый масив
// //объявить функции map с аргументами (array, )

// const map = function(array, transfer) {
//    const numbersNew = [];
//    for (const element of array) {
//       const elementNew = element * 27.4;
//       console.log(elementNew);
//       numbersNew.push(elementNew);

//    }
//    console.log(numbersNew);
//    return numbersNew;
// }
// // console.log(map(numbers));

// const arrow = (number) => nuumber * 27.4;
// map(numbers, arrow);

//============= module 4 #1 =================================
/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };
// for (let item in user){
//   console.log(item, ':', user[item]);
  
// }
// let arr = Object.keys(user);
// console.log();

//=============== module 4 #2 =================================
/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };
// let max = 0;
// let best;

// for (let kays in tasksCompleted){
//   if( tasksCompleted[kays] > max){
//     best = kays;
//     max = tasksCompleted[kays];
//   }
// }
// console.log(best, ':', max);
///========== module 4 #3 =======================================
/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/
// function countProps (obj){
//   let count = 0;
//   for (let elem in obj){
//     count++;
//   }
//   return count;
// }
// // Вызовы функции для проверки
// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3

//============== module 4 #4 ============================================
/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/
// function isObjectEmpty(obj) {
//   let arr = Object.keys(obj);
//   if( arr.length === 0){
//     return true;
//     }
//     return false;
// }
// // Вызовы функции для проверки
// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({a: 1})
// ); // false

// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false

//============= module 4 #5 ==================================
/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/
// const countTotalSalary = function(salaries) {
//   let summ = 0;
//   for (const key in salaries) {
//     summ += salaries[key];
//   }
//   return summ;
// };

//==
// const countTotalSalary = function(salaries) {
//  let obj = Object.values(salaries);
//  let summ = 0 ;
// for (let value of obj) {
// summ = summ + value
// } return summ
// }

// // Вызовы функции для проверки
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

//================ module 4 #6 =============================
/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// function getAllPropValues (arr, prop){
//   let arrOfProps = [];
//   for(let object of arr){
//     if( object.hasOwnProperty(prop)){
//       arrOfProps.push(object[prop]);
//     }  
//   }
//   return arrOfProps;
// }

// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];

// // Вызовы функции для проверки
// console.log(
//   getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//   getAllPropValues(users, 'active')
// ); // []

//================ module 4 #7 =============================
/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/
// const User = function(name, isActive, age, friends) {
//   this.name = name;
//   this.isActive = isActive;
//   this.age = age;
//   this.friends = friends;
//   this.getUserInfo = function() {
//     console.log(`User ${name} is ${age} years old and has ${friends} friends`)
//   }
// }
// let user = new User('Kate', true, 24, 5)
// let user1 = new User('Vasia', true, 100, 0)
// console.log(user1);
// user1.getUserInfo();
// console.log(user);
// user.getUserInfo();
//================ module 4 #8 =============================
/*  
  Расставьте отсутствующие this в методах объекта store
*/

// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
  // addManager(manager) {
//     this.managers.push(manager);
    
//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(this.manager);
    
//     this.managers.splice(idx, 1);
    
//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);
    
//     return this.products;
//   }
// }

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager('mango'); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

//================ module 4 #9 =============================
/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account(login, password, type = "regular") {
  this.login = login;
  this.password = password;
  this.type = type;

  this.changePassword = function(newPassword) {
  this.password = newPassword;

    console.log(this.password);
  };

  this.getAccountInfo = function() {
    console.log(`
      Login: ${this.login}, 
      Pass: ${this.password}, 
      Type: ${this.type}
    `);
  };
}

const account = new Account("Mango", "qwe123", "premium");

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

account.changePassword("asdzxc"); // 'asdzxc'

account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'










 
 
 
