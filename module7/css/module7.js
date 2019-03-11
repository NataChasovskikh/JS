'use strict'

// let title = document.createElement('h2');
// title.style.textAlign = 'center';
// title.classList.add('red-text');
// title.textContent = 'Hello!';
// let div = document.querySelector('.first');
// div.appendChild(title);
// div.innerHTML += '<ul class="myList"><li><p>very</p></li><li>strange</li></ul>';
// let myList = document.querySelector('.myList');
// myList.style.listStyle = 'none';
// myList.style.color = 'blue';
// let body = document.body;
// body.style.textAlign = 'center';

// div.insertAdjacentHTML('beforebegin', '<h3>Привет</h3>');
// let text = document.querySelector('h3');
// text.classList.add('green');
// let textGreen = document.querySelector('.green');
// textGreen.style.color = 'green';

// let image = document.createElement('img');
// image.src = 'https://lifeo.ru/wp-content/uploads/milie-kartinki-kotikiv-dlya-srisovki-11-1-min-500x625.jpg';
// div.append(image);
// image.classList.add('img-style');
// image.style.display = 'block';
// image.style.margin = 'auto';
// image.style.backgroundColor = 'aqua';
// image.style.padding = '20px';

//========= module 7 # 1 ======================

/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
// const elementCategories = document.querySelector('.categories');
// console.log(elementCategories);

//========= module 7 # 2 ======================
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// let changeColor = document.querySelector('.list');
// changeColor.firstElementChild.style.color = 'red';
// changeColor.lastElementChild.style.color = 'blue';

//========= module 7 # 3 ======================

