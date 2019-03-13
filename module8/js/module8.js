'use strict'
// Задача №1
// Алерт по нажатию на кнопку.
// При нажатии на кнопку "Нажми на меня"
// выводиться сообщение 'Привет!

// const btn = document.querySelector('button');
// const clickButton = () => alert ('Привет!');
// btn.addEventListener('click', clickButton);
//============================
// Задача №2
// Изменение текста в инпуте.
// По нажатию на кнопку - изменяеться текст в импуте
// const btn = document.querySelector('button');
// const val = document.querySelector('#input');
// const clickButton = () => val.value =  'New Value!';
// btn.addEventListener('click', clickButton);
//================================
// Задача №3
// Изменение текста в инпуте.
// По нажатию на кнопку -  она выводит алертом содержимое инпута
// const btn = document.querySelector('button');
// const val = document.querySelector('#input');

// const clickButton = () => alert(val.value);

// btn.addEventListener('click', clickButton);
//========================================
// Задача №4
// Изменение текста в инпуте.
// По нажатию на кнопку -  она выводит алертосодержимое инпута, возведенное в квадрат
// const btn = document.querySelector('button');
// const val = document.querySelector('#input');
// const clickButton = () => alert(Math.pow(val.value, 2));
// btn.addEventListener('click', clickButton);
//=============================================
// Задача №5
// Задача. Кнопка осуществляет обмесодержимым между двумя инпутами, можетпонажимать на нее несколько раз илвручную сменить содержимое инпутов:
// const btn = document.querySelector('button');
// let val = document.querySelector('#input1');
// let val2 = document.querySelector('#input2');
// const clickButton = () =>{
//    let valFirst = val.value;
//    val.value = val2.value;
//    val2.value = valFirst;
// }
// btn.addEventListener('click', clickButton);
//===========================
// Задача №6
// Задача. При нажатии на кнопку поменяется ее текст:
// const npt = document.querySelector('input');
// const clickButton = () => npt.value =  'New Value!';
// npt.addEventListener('click', clickButton);
//==================
// Задача №7
// Задача. При нажатии на кнопки - одна иних блокирует инпут с помощью атрибут disabled, а другая разблокирует:

// const btn = Array.from(document.querySelectorAll('button'));
// console.log(btn);
// const On = btn[0];
// const Off = btn[1];


// const clickButtonOff = () => (document.querySelector('#input').disabled = false);

// const clickButtonOn = () => (document.querySelector('#input').disabled = true); 

// On.addEventListener('click', clickButtonOn);
// Off.addEventListener('click', clickButtonOff);
//========================================
