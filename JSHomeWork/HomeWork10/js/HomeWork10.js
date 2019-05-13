"use strict";
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


//===============getAllUsers==================

let proxi = "https://cors-anywhere.herokuapp.com/";
const btnGet = document.querySelector(".btn-get");
const textbtnGet = document.querySelector(".result-get");

function getAllUsers(event) {
  event.preventDefault();
  fetch("https://test-users-api.herokuapp.com/users/")
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error");
    })
    .then(data => {
      data.data.forEach(item => {
        textbtnGet.innerHTML += `<div class="result-item"> <p><span>ID:</span> ${
          item.id}</p><p><span>Name:</span>${item.name}</p><p><span>Age:</span>${
          item.age
        }</p></div>`;
      });
    })
    .catch(error => console.log("Неправильно введен текст"));
}
btnGet.addEventListener("click", getAllUsers);


//======getUserById===================

const btnById = document.querySelector('.btn-getById');
const textGetById = document.querySelector(".result-getById");
btnById.addEventListener('click', getUserById);


function getUserById(event) {
  event.preventDefault();
  const inputId = document.querySelector(".user-id");
  console.log(inputId.value);
  fetch(`https://test-users-api.herokuapp.com/users/${inputId.value}`)
    .then((response) => {
      return response.json();
    })
    .then(data => {
      textbtnGet.innerHTML = `<div class="result-item"> <p><span>ID:</span> ${
      data.data.id}</p><p><span>Name:</span>${data.data.name}</p><p><span>Age:</span>${data.data.age}</p></div>`;
    })
    .catch(error => console.log("Неправильно введен текст"));
};

//===========addUser==============

const btnAdd = document.querySelector('.btn-add');
// const textAdd = document.querySelector(".result-add");
btnAdd.addEventListener('click', addUser);

function addUser(event) {
  event.preventDefault();
  const inputName = document.querySelector(".user-name");
  const inputAge = document.querySelector(".user-age");

  fetch("https://test-users-api.herokuapp.com/users/", {
      method: 'POST',
      body: JSON.stringify({
        name: inputName.value,
        age: inputAge.value
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      return response.json();
    })
    .then(data => console.log(data))

    .catch(error => alert('Неправильно введен текст'))
};


//===========removeUser==============

const btnRemove = document.querySelector('.btn-remove');
const textRemove = document.querySelector(".result-remove");
btnAdd.addEventListener('click', addUser);


function removeUser(event) {
  event.preventDefault();
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
      method: 'DELETE'
    })
    .then((response) => {
      return response.json();
    })
    .then(data => console.log('successful delete'))
    .catch(error => alert('Неправильно введен текст'))
};

//===========updateUser==============

const btnUpdate = document.querySelector('.btn-update');
const textUpdate = document.querySelector(".result-update");
btnUpdate.addEventListener('click', addUser);

function updateUser(id, user) {
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      return response.json();
    })
    .then(data => console.log(data))

    .catch(error => alert('Неправильно введен текст'))
};
