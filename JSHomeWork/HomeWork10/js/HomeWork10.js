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

function getAllUsers(){
  fetch(`${proxi}https://test-users-api.herokuapp.com/users/`)
  .then((response) => {
    return response.json();
    }
  )
  .then(data => console.log(data)) 
  
  .catch(error => alert('Неправильно введен текст'))
};

// getAllUsers();


function getUserById(id) {
  fetch(`${proxi}https://test-users-api.herokuapp.com/users/${id}`)
  .then((response) => {
    return response.json();
    }
  )
  .then(data => console.log(data.data.id))
  
  .catch(error => alert('Неправильно введен текст'))
}

// getUserById("5c90d0e1c2f56b0014ec10a7");

function addUser(name, age){
  fetch(`${proxi}https://test-users-api.herokuapp.com/users/`,{
  method: 'POST',
  body: JSON.stringify({name, age}),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})
  .then((response) => {
    return response.json();
    }
  )
  .then(data => console.log(data))
  
  .catch(error => alert('Неправильно введен текст'))
}
// addUser('Keks', 3);

function removeUser(id){
  fetch(`${proxi}https://test-users-api.herokuapp.com/users/${id}`,{
    method: 'DELETE'
  })
  .then((response) => {
    return response.json();
    }
  )
  .then(data => console.log('successful delete'))
  
  .catch(error => alert('Неправильно введен текст'))
}

// removeUser("5c90d0e1c2f56b0014ec10a7");

function updateUser(id, user){
  fetch(`${proxi}https://test-users-api.herokuapp.com/users/${id}`,{
  method: 'PUT',
  body: JSON.stringify(user),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})
  .then((response) => {
    return response.json();
    }
  )
  .then(data => console.log(data))
  
  .catch(error => alert('Неправильно введен текст'))
}
let user = {
  name: 'Oksana',
  age: 30
}

updateUser('5c95f0593d3f860014702ec4',user);
