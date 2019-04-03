'use strict'
/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

let proxi = "https://cors-anywhere.herokuapp.com/";


function getAllUsers(event){
  event.preventDefault();
  fetch("https://test-users-api.herokuapp.com/users/")
  .then(response => {
    if (response.ok) return response.json();
    throw new Error("Error");
    })
    
  .then(data => {
    console.log(data);

    textbtnGet.innerHTML += `<div class="result-item"> <p><span>ID:</span> ${
        item.id
      }</p><p><span>Name:</span>${item.name}</p><p><span>Age:</span>${
        item.age
      }</p></div>`;
    })
      
  .catch(error => console.log('Неправильно введен текст'))

  };
 

const btnGet = document.querySelector('.btn-get');
const textbtnGet = document.querySelector('.result-get');
btnGet.addEventListener('click', getAllUsers);
// textbtn1.innerHTML = 

// getAllUsers();

// const btn2 = document.querySelector('.btn-getById');
// btn2.addEventListener('click', getUserById);

// function getUserById(id) {
//   fetch('https://test-users-api.herokuapp.com/users/${id}')
//   .then((response) => {
//     return response.json();
//     }
//   )
//   .then(data => console.log(data.data.id))
  
//   .catch(error => alert('Неправильно введен текст'));
// };


// getUserById("5c90d0e1c2f56b0014ec10a7");

// function addUser(name, age){
//   fetch(`${proxi}https://test-users-api.herokuapp.com/users/`,{
//   method: 'POST',
//   body: JSON.stringify({name, age}),
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   }
// })
//   .then((response) => {
//     return response.json();
//     }
//   )
//   .then(data => console.log(data))
  
//   .catch(error => alert('Неправильно введен текст'))
// }
// addUser('Keks', 3);

// function removeUser(id){
//   fetch(`${proxi}https://test-users-api.herokuapp.com/users/${id}`,{
//     method: 'DELETE'
// })
//   .then((response) => {
//     return response.json();
//     }
//   )
//   .then(data => console.log('successful delete'))
//   data.data.forEach(item => {
//     console.log(item);  
//   }
//   .catch(error => alert('Неправильно введен текст'))
// }

// removeUser("5c90d0e1c2f56b0014ec10a7");

// function updateUser(id, user){
//   fetch(`${proxi}https://test-users-api.herokuapp.com/users/${id}`,{
//   method: 'PUT',
//   body: JSON.stringify(user),
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   }
// })
//   .then((response) => {
//     return response.json();
//     }
//   )
//   .then(data => console.log(data))
  
//   .catch(error => alert('Неправильно введен текст'))
// }
// let user = {
//   name: 'Oksana',
//   age: 30
// }

// updateUser('5c95f0593d3f860014702ec4',user);


//=======================================================
// const btnGet = document.querySelector(".btn-get");
// const btnGetById = document.querySelector(".btn-getById");
// const btnAdd = document.querySelector(".btn-add");
// const btnRemove = document.querySelector(".btn-remove");
// const btnUpdate = document.querySelector(".btn-update");
// const resultGet = document.querySelector(".result-get");
// const resultGetById = document.querySelector(".result-getById");
// const userId = document.querySelector(".user-id");
// const userNameAdd = document.querySelector(".user-name")
// const userAgeAdd = document.querySelector(".user-age")
// const resultAdd = document.querySelector(".result-add")

// let isClick = false;
// function getAllUsers(evt) {
//   resultGet.classList.remove("hidden");

//   evt.preventDefault();
//   let API = "https://test-users-api.herokuapp.com/users/";
//   fetch(API)
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error("Error");
//     })
//     .then(data => {
//       console.log(data);

//       data.data.forEach(item => {
//         console.log(item);
//         resultGet.innerHTML += `<div class="result-item"> <p><span>ID:</span> ${
//           item.id
//         }</p><p><span>Name:</span>${item.name}</p><p><span>Age:</span>${
//           item.age
//         }</p></div>`;
        
//       });
//     })
//     .catch(err => console.error("Error:", err));
// }
// function hideUser() {
//   resultGet.classList.add("hidden");
  
// }
// btnGet.addEventListener("click", getAllUsers);
// btnGet.addEventListener("blur", hideUser);



// function getUserById(evt) {
//   resultGetById.classList.remove("hidden");
//   evt.preventDefault();
//   let API = `https://test-users-api.herokuapp.com/users/${userId.value}`;
//   fetch(API)
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error("Error fetching data");
//     })
//     .then(data => {
//       console.log(data);
//       resultGetById.innerHTML = `<div class="result-item"> <p><span>ID:</span> ${
//         data.data.id
//       }</p><p><span>Name:</span>${data.data.name}</p><p><span>Age:</span>${
//         data.data.age
//       }</p></div>`;
//     })
//     .catch(err => console.error("Error:", err));
// }
// function hideUserById() {
//   resultGetById.classList.add("hidden");
//   userId.value = "";
// }
// btnGetById.addEventListener("click", getUserById);
// btnGetById.addEventListener("blur", hideUserById);



// function addUser() {
//   let new  = {name: userNameAdd.value, age:userAgeAdd};
//   resultAdd.classList.remove("hidden");
//   let API = "https://test-users-api.herokuapp.com/users/";
//   fetch(API, {
//     method: "POST",
//     body: JSON.stringify(new),
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     }
//   })
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error("Error fetching data");
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(err => console.error("ERror:", err));
// }
// function hideAddUser() {
//   resultAdd.classList.add("hidden");
//   userNameAdd.value = "";
//   userAgeAdd.value = "";
// }
// btnAdd.addEventListener("click", addUser);
// btnAdd.addEventListener("blur", hideAddUser);

// function removeUser() {
//   let API = `https://test-users-api.herokuapp.com/users/${id}`;
//   fetch(API, {
//     method: "DELETE"
//   })
//     .then(() => console.log("success"))
//     .catch(err => console.error("ERror:", err));
// }

// const lucky = {
//   age: 99
// };
// function updateUser() {
//   let API = `https://test-users-api.herokuapp.com/users/${id}`;
//   fetch(API, {
//     method: "PUT",
//     body: JSON.stringify(lucky),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error("Error fetching data");
//     })
//     .then(data => console.log(data))
//     .catch(err => console.error('error:', err))
// }
