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

// const users = ['Greengo', 'Riki', 'Floyd', 'Marchellos']
// let userIndex;

//написать цикл для поиска игрока по имени. Для примера давайте найдем Riki и сщхраним его индекс в userIndex.
// for(let input of users) {
//   if(input === 'Riki') {
//   userIndex = users.indexOf(input);
//   }
// }
// добавьте нового юзера в конец массива

// let ask = prompt ('Add a new user');
// if (!users.includes(ask)) {
//   users.push (ask);
// } 
      
  // users.splice(userIndex,1);
  // console.log(users);

  //обновим юзера по индексу

  // users[1] = 'Max';
  // console.log(users);
  
  //дальше перепишем каждый шаг в отдельную функцию getUserByID(id)

//   function getUserID(name) {
//     let userIndex;
//   for(let input of users) {
//       if(input === name) {
//       userIndex = users.indexOf(input);
//       }
//     }
//     console.log(userIndex)

//     if (userIndex !== undefined) {
//       return userIndex;
      
//     }else {
//       alert ('user is not fined')
//     }
//   }

//  console.log(getUserID('Max'));


//  const addUser = function(arr, name) {
// if (arr.includes(name)){
//   alert ('user has already exit');
//   }else {
//   arr.push(name);
//   }
// }
//  addUser(users, 'Ajax');
//  addUser(users, 'Pablo');
//  console.log(users);

//  const addedUser = function(arr, name) {
//   if (arr.includes(name)) {
//     alert('user has already exist');
//   } else {
//     arr.push(name);
//   }
// }

// addUser(users, 'Ajax');
// addUser(users, 'Pablo');
// console.log(users);


// const deleteUser = (userIndex) => {
//   users.splice(userIndex,1)
// }
// deleteUser(2); 

// console.log ('aftedDelete', users);
// deleteUser(getUserID('Max'));
// console.log(users);


// const updateUser = function (index, name, arr) {
//   arr[index] = name;
//   return arr;
// }
// console.log(updateUser(getUserID('Pablo'), 'Mary', users));

//===============================================================

// const users = [
//   {id: 'user_id_111', name: 'Greengo'},
//   {id: 'user_id_222', name: 'Riki'},
//   {id: 'user_id_333', name: 'Floyd'},
//   {id: 'user_id_444', name: 'Marchellos'},
// ];

// function getUserID(id) {
//   let userIndex = '';
//   for(let input of users) {
//     if (input.id === id) {
//       userIndex = users.indexOf(input);
//     }

//   }
//   if (userIndex !== '') {
//     return userIndex;
//   } else {
//     alert('user is not finded');
//   }
//   console.log(userIndex);
// }
// console.log (getUserID('user_id_333'));
// console.log (users[getUserID('user_id_333')].name);

// const updateUser = function (index, name, arr) {
//   arr[index].name = name;
//   return arr[index];
// }

// const update = updateUser(getUserID('user_id_333'), 'Max', users);
// console.log(getUserID('user_id_333'));
// console.log(update);

// const users = [
//   { id: "user_id_1", name: "Greengo" },
//   { id: "user_id_2", name: "Riki" },
//   { id: "user_id_3", name: "Floyd" },
//   { id: "user_id_4", name: "Marchellos" }
// ];
// // обновим функцию getUserID id: 'user_id_111' - должно вернуть
// // объект юзер с id user_id_111
// function getUserID(id) {
//   let userIndex = "";
//   for (let input of users) {
//     if (input.id === id) {
//       userIndex = users.indexOf(input); 
//     }
//   }
//   if (userIndex !== "") {
//     return userIndex;
//   } else {
//     alert("user is not finded");
//   }
//   console.log(userIndex);
// }
// console.log(getUserID("user_id_2"));
// console.log(users[getUserID("user_id_2")].name);
// // -----------------------------------------
// const deleteUser = userIndex => {
//   users.splice(userIndex, 1);
// };
// deleteUser(2);
// console.log(users);
// console.log(deleteUser("user_id_111"));
// console.log(users);
// // -----------------------------------------
// const updateUser = function(index, name, arr) {
//   arr[index] = name;
//   return arr[index];
// };
// const update = updateUser(getUserID("user_id_4"), 'Max', users);
// console.log(getUserID("user_id_2"));
// console.log(users);
// //=====================================
// const addUser = function(arr, obj) {
//   arr.push(obj);
// }

// addUser(users, {id: 'user_id_555', name:'Ajax'});
// addUser(users, {id: 'user_id_666', name: 'Pablo'});
// console.log(users);

// // обновляем юзера по id
// const updateUser = function (index, name, arr) {
//     arr[index].name = name; 
//     return arr[index];
// }

// const update = updateUser(getUserID('user_id_22'),'Max', users);
// console.log(update);

// // написать функцию getAllUsers(arr) которая выводит сообщение в консоль id: name

// const getAllUsers = function(arr) {
//   for(const el of arr){
//     console.log(`id: ${el.id} name ${el.name}`);    
//   }
// }
// getAllUsers(users);

//================================================================

// создаем конструктор

// const Student = function(name, birthday, slogan) {
//   this.name = name; //передаем каждому ключу обекта значения из параметров
//   this.birthday = birthday;
//   this.slogan = slogan;
//   this.getSlogan = function() {
//     alert(`${this.slogan}`);
//   }
// }

// const newStudent = new Student('Ben', '2.08.2019', 'Winter is coming!');
// console.log(newStudent);//выводит на новый обект студента
// console.log(newStudent.name);//выводит name  студента
// console.log(newStudent.birthday);//
// console.log(newStudent.slogan);
// newStudent.getSlogan();


//=================================================================
//homework

/*
  Создайте скрипт кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того хватает 
  денег или нет, уведомляет покупателя о результате.
*/

/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */ 
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

/* 
  Необходимо создать функцию-конструктор Cashier.
  
  Поля будущего объекта кассира (🔔 объявляются как this.имя_поля в конструкторе): 
    - name - строка, имя кассира, передается при вызове конструктора
    
    - productDatabase - объект база данных продуктов, передается при вызове конструктора
    
    - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0 
    
    - getCustomerMoney(value) - метод, получает число, деньги покупателя, и записывает его в поле customerMoney.
    
    - countTotalPrice(order) - метод, получает объект списока покупок, считает общую стоимость покупок.
      🔔 Ключи объекта order есть в объекте productDatabase. Из order берем количество единиц продукта,
         а из productDatbase цену за одну штуку и умножаем, так получаем цену одного типа продукта в заказе.
         Чтобы посчитать цену для всех продуктов заказа используйте цикл, перебрав все ключи order.
     
    - countChange(totalPrice) - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
        * Обязательно проверьте что customerMoney не меньше чем значение totalPrice
        * Если денег было передано достаточно, возвращает разницу денег.
        * Если в customerMoney меньше денег чем в totalPrice, возвращает null 
        
    - onSuccess(change) - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${change}!`.
    
    - onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'   
    
    - reset() - метод, сбрасывает поле customerMoney 0.
*/

function Cashier(name, productDatabase) {
  // 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта
  this.name = name;
  this.productDatabase = productDatabase; 
  this.customerMoney = 0;
  this.getCustomerMoney = function(value) {
    this.customerMoney = value;
  }
 
  this.countTotalPrice = function(order) {
    let sum = 0;
    for(kay in order) {
      sum += order[kay] * productDatabase[kay];      
    }
    return sum;
  }
  this.countChange = function (totalPrice) {
    console.log(totalPrice >= this.customerMoney);    
    
    if (this.customerMoney >= totalPrice){
      let res = this.customerMoney - totalPrice;
      return res;
    }else {
      return null;
    }
  }
  this.onSuccess = function(change) {
    console.log(`Спасибо за покупку, ваша сдача ${change}!`); 
  }
  this.onError = function() {
    console.log('Очень жаль, вам не хватает денег на покупки');
  }
  this.reset = function() {
    this.customerMoney = 0;
  }
}

/* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

/* Пример использования */
const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);

// Проверям что посчитали
console.log(totalPrice); // 110

// Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);

// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange(totalPrice);

// Проверяем что нам вернул countChange
console.log(change); // 190

// Проверяем результат подсчета денег
if(change !== null) {
   // При успешном обслуживании вызываем метод onSuccess
  mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError   
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); // 0