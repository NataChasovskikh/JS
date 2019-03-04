'use strict'
//====== constructor ======
// const User = function(name,isActive){
//    this.name = name;
//    this.isActive = isActive;
//    this.getStatus = function(){
//       return `${this.name} is ${this.isActive ? 'active' : 'unactive'}`;

//    }
// };

// const user = new User('boris', false);
// console.log(user.getStatus());

// const animal = { eats: true };

// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }
//======= module 6 # 1 =====================

/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/
// const Account = function(login, email) {
//    this.login = login;
//    this.email = email;
//  }
 
//  Account.prototype.getInfo = function () {
//    console.log(`Login: ${this.login}, Email: ${this.email}`);
//  }
//==========variant s classom
// class Account {
//    constructor (login, email){
//    this.login = login;
//    this.email = email;
//    }
//    getInfo(){
//       console.log(`Login: ${this.login}, Email: ${this.email}`); 
//    }
// }



// const account = new Account('Mangozedog', 'mango@dog.woof');
// const account1 = new Account('Rio', 'rio@dog.woof');

// // console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// account1.getInfo();
//======= module 6 # 2 =====================


/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/
// const StringBuilder = function(value){
//    this.value = value;
// }

// StringBuilder.prototype.getValue = function(){
//    return this.value;
// }
// StringBuilder.prototype.toAppend = function(str){
//    return this.value = this.value + str;
// }
// StringBuilder.prototype.toPrepend = function(str){
//    return this.value = str + this.value;
// }
// StringBuilder.prototype.toPad = function(str){
//    return this.value = str + this.value + str;
// };
// const builder = new StringBuilder('.');

// builder.toAppend('^'); 
// console.log(builder.value); // '.^'

// builder.toPrepend('^'); 
// console.log(builder.value); // '^.^'

// builder.toPad('='); 
// console.log(builder.value); // '=^.^='
//==========variant s classom

// class StringBuilder {
//    constructor(value) {
//       this._value = value;
//    }

//    get value (){
//       return this._value;
//    }
//    toAppend(str){
//       return this._value = this._value + str;
//    }
//    toPrepend(str){
//       return this._value = str + this._value;
//    }
//    toPad(str){
//       return this._value = str + this._value + str;
//    }
// }

// const builderClass = new StringBuilder(' and ');

// builderClass.toAppend('Jerry'); 
// console.log(builderClass.value); // and Jerry

// builderClass.toPrepend('Tom'); 
// console.log(builderClass.value); //Tom and Jerry

// builderClass.toPad(' ! '); 
// console.log(builderClass.value); // ! Tom and Jerry !

//======= module 6 # 3 =====================
/*
 * Напиши класс Car с указанными свойствами и методами
*/

// class Car {
//    constructor({ maxSpeed = 0 }) {
     /*
       Добавь свойства:
         - speed - для отслеживания текущей скорости, изначально 0.
         - maxSpeed - для хранения максимальной скорости 
         - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
         - distance - содержит общий киллометраж, изначально с 0
     */
   //}
 
   //turnOn() {
     // Добавь код для того чтобы завести автомобиль
     // Просто записывает в свойство running значание true
   //}
 
   //turnOff() {
     // Добавь код для того чтобы заглушить автомобиль
     // Просто записывает в свойство running значание false
   //}
 
   //accelerate(spd) {
     // Записывает в поле speed полученное значение, при условии что
     // оно не больше чем значение свойства maxSpeed
   //}
 
   //decelerate(spd) {
     // Записывает в поле speed полученное значение, при условии что
     // оно не больше чем значение свойства maxSpeed и не меньше нуля
   //}
 
   //drive(hours) {
     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
     // но только в том случае если машина заведена!
   //}
 //}
 

 /*
   Добавь свойства:
   - speed - для отслеживания текущей скорости, изначально 0.
   - maxSpeed - для хранения максимальной скорости 
   - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
   - distance - содержит общий киллометраж, изначально с 0
*/

// const Car = function({maxSpeed}){
//    this.speed = 0;
//    this.maxSpeed = maxSpeed;
//    this.running = false;
//    this.distance = 0;
// }

// // Добавь код для того чтобы завести автомобиль
// // Просто записывает в свойство running значание true
// Car.prototype.turnOn = function(){
//    return this.running = true;
// }

// // Добавь код для того чтобы заглушить автомобиль
// // Просто записывает в свойство running значание false
// Car.prototype.turnOff = function(){
//    return this.running = false;
// }

// // Записывает в поле speed полученное значение, при условии что
// // оно не больше чем значение свойства maxSpeed
// Car.prototype.accelerate = function(spd){
//    if(spd <= this.maxSpeed){
//       return this.speed = spd;
//    }else{
//       return 'dangerous speed'
//    }
// }

// // Записывает в поле speed полученное значение, при условии что
// // оно не больше чем значение свойства maxSpeed и не меньше нуля
// Car.prototype.decelerate = function(spd){
//    if(spd <= this.maxSpeed && spd > 0){
//       return this.speed = spd;
//    }
// }

// // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
// // но только в том случае если машина заведена!
// Car.prototype.drive = function(hours){
//    if(this.turnOn){
//       return this.distance = hours * this.speed;
//    }
// }  
// //  const car = new Car({ maxSpeed: 100 });

// //  console.log('Turn on the car', car.turnOn());
// //  console.log('Change speed', car.accelerate(40));
// //  console.log(car.accelerate(140));
// //  console.log('Your distatnce', car.drive(2));
// //  console.log('Turn off the car', car.turnOff());
// //  console.log('Change speed', car.decelerate(10));

//==========variant s classom
// class Car {
//    constructor({maxSpeed = 0}){
//       this.speed = 0;
//       this.maxSpeed = maxSpeed;
//       this.running = false;
//       this.distance = 0; 
//    }
   
//    //   Добавь код для того чтобы завести автомобиль
//    //   Просто записывает в свойство running значание true
//    turnOn() {
//       return this.running = true;
//    }
   
//    // Добавь код для того чтобы заглушить автомобиль
//    // Просто записывает в свойство running значание false
//    turnOff() {
//       return this.running = false;      
//    }

//    // Записывает в поле speed полученное значение, при условии что
//    // оно не больше чем значение свойства maxSpeed
//    accelerate(spd) {
//       if(spd < this.maxSpeed){
//         return this.speed = spd;      
//       }
//    }

//    // Записывает в поле speed полученное значение, при условии что
//    // оно не больше чем значение свойства maxSpeed и не меньше нуля
 
//    decelerate(spd) {
//       if(spd < this.maxSpeed && spd > 0){
//          this.speed = spd;
//          return this.speed;
//       }
//    }

//    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//    // но только в том случае если машина заведена!
//    drive(hours) {
//       if(this.running){
//          this.distance = hours * this.speed;
//          return this.distance;
//       }
//    }   
// }

// const carUseClass = new Car({ maxSpeed: 300 });

//   carUseClass.turnOn();
//   carUseClass.accelerate(50);
//   carUseClass.drive(2);
//   carUseClass.turnOff();
//   console.log(`maxSpeed: ${carUseClass.maxSpeed}, speed: ${carUseClass.speed}, running: ${carUseClass.running ? 'is driving' : "is'n driving"}, distance: ${carUseClass.distance}`)


// //======= module 6 # 4 =====================
//  /*
// * Добавь к классу Car из предыдущего задания статический
// * метод getSpecs, который принимает объект-машину как параметр
// * и выводит в консоль значения полей maxSpeed, speed, running и distance.
// */

// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);
// Car.prototype.getSpecs = function(car){
//    console.log(`maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, running: ${this.running}, distance: ${this.distance}`);
   
// }
// car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100

//======= module 6 # 5 =====================
/*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/

// const car = new Car({ maxSpeed: 50, price: 2000 });
// console.log(car.value); // 2000

// car.value = 4000;
// console.log(car.value); // 4000

//========= homework =============================
/*
  Сеть фастфудов предлагает несколько видов гамбургеров.
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger {
   // /**
   //  * @constructor
   //  * @param {String} size - Размер
   //  * @param {String} stuffing - Начинка
   //  */
   constructor(size, stuffing) {
     this._size = size;
     this._stuffing = stuffing;
     this._toppings = [];
   }
 
   /**
    * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
    * @param {String} topping - Тип добавки
    */
   addTopping(topping) {
      if(!this._toppings.includes(topping)) {
         this._toppings.push(topping);
      } else {
         console.log( 'такой топинг уже есть');
      }   
   };
   /**
    * Убрать topping, при условии, что она ранее была добавлена
    * @param {String} topping - Тип добавки
    */
   removeTopping(topping) {
     if(this._toppings.includes(topping)){
       let topp = this._toppings.indexOf(topping);     
       this._toppings.splice(topp, 1);
     }      
   }
 
   /**
    * Получить список toppings
    * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
    *
    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
    */
   getToppings() {
     return this._toppings;     
   } 
   /**
    * Узнать размер гамбургера
    * @returns {String} - размер гамбургера
    *
    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
    */
   getSize() {
    return this._size
   }
 
   /**
    * Узнать начинку гамбургера
    * @returns {String} - начинка гамбургера
    *
    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
    */
   getStuffing() {
    return this._stuffing
   }
 
   /**
    * Узнать цену гамбургера
    * @returns {Number} - Цена в деньгах
    *
    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
    */
   calculatePrice() {
    let burgerPrice = Hamburger.SIZES[this._size].price + Hamburger.STUFFINGS[this._stuffing].price;
    let summ = 0;
    if (this._toppings.length > 0) {
        for(let element of this._toppings){
           summ = summ + Hamburger.TOPPINGS[element].price;
         }
         return summ + burgerPrice; 
    }else {
        return burgerPrice;
    }    
   }
 
   /**
    * Узнать калорийность
    * @returns {Number} - Калорийность в калориях
    *
    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
    */
   calculateCalories() {
    let burgerСalories = Hamburger.SIZES[this._size].calories + Hamburger.STUFFINGS[this._stuffing].calories;
    let summ = 0;
    if (this._toppings.length > 0) {
        for(let element of this._toppings){
           summ = summ + Hamburger.TOPPINGS[element].calories;
         }
         return summ + burgerСalories; 
    }else {
        return burgerСalories;
    }    
   }
 }
 
 /*
   Размеры, виды добавок и начинок объявите как статические поля класса.
   Добавьте отсутсвующие поля по аналогии с примером.
 */
 Hamburger.SIZE_SMALL = 'SIZE_SMALL';
 Hamburger.SIZE_LARGE = 'SIZE_LARGE';
 
 Hamburger.SIZES = {
   [Hamburger.SIZE_SMALL]: {
     price: 30,
     calories: 50,
   },
   [Hamburger.SIZE_LARGE]: {
      price: 50,
      calories: 100,
    },
 };
 
 Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
 Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
 Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
 
 Hamburger.STUFFINGS = {
   [Hamburger.STUFFING_CHEESE]: {
     price: 15,
     calories: 20,
   },
   [Hamburger.STUFFING_CHEESE]: {
      price: 20,
      calories: 5,
    },
    [Hamburger.STUFFING_CHEESE]: {
      price: 35,
      calories: 15,
    },
 };
 
 Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
 Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
 
 Hamburger.TOPPINGS = {
   [Hamburger.TOPPING_SPICE]: {
     price: 10,
     calories: 0,
   },
   [Hamburger.TOPPING_SAUCE]: {
      price: 15,
      calories: 5,
    },
 };

//  Hamburger.TOPPINGS[Hamburger.TOPPING_SAUCE].price //обратиться к цене

 
 /* Вот как может выглядеть использование этого класса */
 
 // Маленький гамбургер с начинкой из сыра
 const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
 hamburger.addTopping(Hamburger.TOPPING_SAUCE);
 console.log(hamburger); 

 hamburger.addTopping(Hamburger.TOPPING_SAUCE);
 console.log(hamburger); 
 
 // Добавка из приправы
 hamburger.addTopping(Hamburger.TOPPING_SPICE);
 
//  // Спросим сколько там калорий
 console.log("Calories: ", hamburger.calculateCalories());
 
//  // Сколько стоит?
 console.log("Price: ", hamburger.calculatePrice());
 
//  // Я тут передумал и решил добавить еще соус
 hamburger.addTopping(Hamburger.TOPPING_SAUCE);
 
//  // А сколько теперь стоит?
 console.log("Price with sauce: ", hamburger.calculatePrice());
 
//  // Проверить, большой ли гамбургер?
 console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
 
//  // Убрать добавку
 hamburger.removeTopping(Hamburger.TOPPING_SPICE);
 
//  // Смотрим сколько добавок
 console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1
 
 /*
   🔔 Обратите внимание на такие моменты:
        ✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
           другой код, а класс живет в изоляции от мира
        ✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
       чтобы нельзя было создать объект, не указав их
        ✔️ необязательные (добавка) добавляем через методы
        ✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
           свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
        ✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.
        ✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
             а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
       логично в тот момент, когда это потребуется, а не заранее.
 */
 
 