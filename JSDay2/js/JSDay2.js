'use strict'

// Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
//   Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
//     * sharm - 15
//     * hurgada - 25
//     * taba - 6.
//   Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
//   результат сохранить в переменную.
//   Необходимо проверить являются ли введенные данные целым положительным числом. 
  
//     - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
//       "Ошибка ввода" и больше ничего не делает.
//     - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
//     - В случае верного ввода, последовательно проверить кол-во мест в группах, 
//       и кол-во необходимых мест введенных пользователем.
//   Если была найдена группа в которой количество мест больше либо равно необходимому, 
//   вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
//   пользоваетель быть в этой группе?
//     * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
//     * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
  
//   Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'

// const sharm = 15;
// const hurgada = 25;
// const taba = 6;

// let hotel = "";

// const requiredPlaces = prompt('Введите количество мест');
// if (Number.isInteger(+requiredPlaces) && +requiredPlaces > 0) {
//   if (+requiredPlaces <= sharm){
//     if (confirm('хотите ли вы остаться в Sharm?')) {
//       alert('добро пожаловать в Sharm');
//     } else {

//       alert ('Нам очень жаль, приходите еще!');
//     }
//   }
//   else if (+requiredPlaces <= hurgada) {
//     if (confirm('хотите ли вы остаться в Hurgada?')) {
//       alert('добро пожаловать в Hurgada');
//     } else {

//       alert ('Нам очень жаль, приходите еще!');
//     }
//   }
//   else if (+requiredPlaces <= taba) {
//     if (confirm('хотите ли вы остаться в Taba?')) {
//       alert('добро пожаловать в Taba');
//     } else {

//       alert ('Нам очень жаль, приходите еще!');
//     }
//   }

// } else if (!requiredPlaces) {
//   alert ('Нам очень жаль, приходите еще!')
// }



// const sharm = 15;
// const hurgada = 25;
// const taba = 6;

// let hotel = "";

// const requiredPlaces = prompt('Введите количество мест');
// if (Number.isInteger(+requiredPlaces) && +requiredPlaces > 0) {
//   if (+requiredPlaces <= sharm){
//      hotel = "Sharm";    
//   }
//   else if (+requiredPlaces <= hurgada) {
//     hotel = "Hurgada"
//   }
//   else if (+requiredPlaces <= taba) {
//     hotel = "Taba"
//   }

//   if (confirm(`хотите ли вы остаться в ${hotel}?`)) {
//    alert(`добро пожаловать в ${hotel}?`);
//  } else {

//    alert ('Нам очень жаль, приходите еще!');
//  }

// } else if (!requiredPlaces) {
//   alert ('Нам очень жаль, приходите еще!')
// }


const taba = 6;
const sharm = 15;
const hurgada = 25;


let hotel = "";

const requiredPlaces = prompt('Введите количество мест');
if (Number.isInteger(+requiredPlaces) && +requiredPlaces > 0) {
  if (+requiredPlaces <= taba){
    hotel = "Taba"; 
  }
  else if (+requiredPlaces <= hurgada) {
    hotel = "Hurgada";
  }
  else if (+requiredPlaces <= sharm) {
    hotel = "Sharm";
  }
  if (confirm(`хотите ли вы остаться в ${hotel}?`)) {
    alert(`добро пожаловать в ${hotel}`);
  } else {

    alert ('Нам очень жаль, приходите еще!');
  }

} else if (!requiredPlaces) {
  alert ('Нам очень жаль, приходите еще!')
}

else if (!hotel) {
   alert ('Извините, столько мест нет ни в одной ')
}