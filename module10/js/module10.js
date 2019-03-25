"use strict";
// let dog = {
//   color: 'braun'
// }

// function submit(event){
//   // debugger;
//   event.preventDefault();

//   let ajax = new XMLHttpRequest();
//   ajax.open('POST', '127.0.0.1.');
//   ajax.send("dfg");
//   if(ajax.status != 200){
//     alert("hr");
//   }else {
//     alert( ajax.responseText );
//   }
// }

// let sub = document.querySelector('form');
// sub.addEventListener('submit', submit);

// const a = "";

// let promis = new Promise(
//   function(resolve, reject){
//   if(a){
//     resolve ('trueddddd');   
//   }else{
//     reject('error')
//   }
// });

// promis.then (res => console.log(res));
// promis.catch (rej => console.log(rej));


// function alert(a){
//   if(a){
//     console.log('true');
//     return;    
//   }
//   console.log('false');  
// }
// alert('ggg');

//==== ПРОЭКТ ПОГОДА ===========

// let timeZone = document.querySelector(".location-timezone");
// let temperatureDegree = document.querySelector(".temperature-degree");
// let temperatureDescription = document.querySelector(".temperature-description");
// let iconId = document.querySelector(".icon");
// let celsij = document.querySelector('.forenfeit');
// let unit = document.querySelector('.span');
// let cels;
// let tempBuff;

// let onLoad = () => {
//   let lat;
//   let long;
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(posicion => {
//       console.log(navigator.geolocation);
//       console.log(posicion);

//       lat = posicion.coords.latitude;
//       long = posicion.coords.longitude;

//       let proxi = "https://cors-anywhere.herokuapp.com/";
//       let api = `${proxi}https://api.darksky.net/forecast/8adeafe20b75e0a101f1d04124c8596f/${lat},${long}`;

//       fetch(api)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           const { icon, summary, temperature } = data.currently;
//           temperatureDegree.textContent = temperature;
//           temperatureDescription.textContent = summary;
//           timeZone.textContent = data.timezone;
//           cels = 5/9*(temperature-32);
//           setIcon(icon, iconId);
//           tempBuff = temperature;
//           celsij.addEventListener('click', setTemperature);
//         });
//     });
//   }
// function setTemperature(){
//   if(unit.textContent === 'F'){
//     unit.textContent = 'C';
//     temperatureDegree.textContent = Math.floor(cels);
//   }else {
//     unit.textContent = 'F';
//     temperatureDegree.textContent = tempBuff;
//   }
// }

//   function setIcon(icon, iconId) {
//     const skycons = new Skycons({ color: "plum" });
//     const currentIcon = icon.replace(/-/g, "_").toUpperCase();
//     skycons.play();
//     return skycons.set(iconId, Skycons[currentIcon]);
//   }
// };

// window.addEventListener("load", onLoad);

/* ====== ЗАДАНИЕ 1 МОДУЛЬ 10====== */
/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "https://restcountries.eu/rest/v2/name/";

// form.addEventListener("submit", fetchCountryData);

/*
@param {FormEvent} evt
*/
// function fetchCountryData() {
//   evt.preventDefault(evt);
//   let api = (`https://restcountries.eu/rest/v2/name/${input.value}?fullText=true`);

//   fetch(api)
//   .then ( response => response.json())
//   .then(data => {
//     console.log(data);  
//     result.innerHTML = `<p>Country name:${data[0].name}</p><p>Capital:${data[0].capital}</p><p>Main currency:${data[0].currencies[0].code}</p><p><img style="width:300" src="${data[0].flag}"</p>`;   
//   })
//   .catch(error => {
//     result.innerHTML =`<p>Неправильно введен текст</p>`;
//   });
  
// }

/* ====== ЗАДАНИЕ 2 МОДУЛЬ 10====== */
/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = `https://api.github.com/users/${input.value}`;

// form.addEventListener("submit", fetchUserData);

// /*
//   @param {FormEvent} evt
// */
// function fetchUserData(evt) {
//   evt.preventDefault();
//   const API_URL = `https://api.github.com/users/${input.value}`;
//   fetch(API_URL)
//   .then(response=>response.json())
//   .then(data=>{
//       console.log(data);
//       result.innerHTML = `<p>Avatar:<img style="width:300px" src=   "${data.avatar_url}"></p><p>Username: ${data.login}</p><p>Bio:   ${data.bio}</p><p> Public repos: ${data.public_repos}</p>`;
//   })
//   .catch(result.innerHTML = `<p>NETU TAKOGO CHELOVEKA</p>`)
// }

/* ====== ЗАДАНИЕ 3 МОДУЛЬ 10====== */
/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/

const form = document.querySelector(".search-form");
const userTable = document.querySelector(".users-table");
// console.log(userTable);

form.addEventListener("submit", fetchUsers);

/*
  @param {FormEvent} evt
*/
function fetchUsers(evt) {
  fetch('https://jsonplaceholder.typicode.com/users/')
  .then ( response => response.json())
  .then(data => {
    // console.log(data)  
    data.forEach(function(element){
      // console.log(element);
      // let newUsers = `<tr><td>${data[0].name}</td><td>${data[0].email}</td><td>${data[0].address.city}</td><td>${data[0].website}</td><td>${data[0].company.name}</td></tr>` 
      


      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2= document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');
      let td5 = document.createElement('td');



      td1.innerHTML = `${element.name}`;
      td2.innerHTML = `${element.email}`;
      td3.innerHTML = `${element.address.city}`;
      td4.innerHTML = `${element.website}`;
      td5.innerHTML = `${element.company.name}`;

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);


      userTable.appendChild(tr);

      
           
    })

  })
  
};

/* <p>Username: ${data.login}</p><p>Bio:   ${data.bio}</p><p> Public repos: ${data.public_repos}</p>`; */

fetchUsers();

/* ====== ЗАДАНИЕ 4 МОДУЛЬ 10====== */
/*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос 
  на получение информации о пользоватеьте с id (число) введенным в input. 
  Не забывайте что значение input это строка.
 
  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");

// form.addEventListener("submit", getUserById);

// function getUserById(evt) {
//   // ...
// }
