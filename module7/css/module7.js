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

// const categories  = document.querySelector('.categories');

// console.log(categories);
// console.log(categories.textContent);

// Array.from(categories.children).forEach((li) => {
//  Array.from приводит HTMLCollection в обычный массивб у которого есть метод forEach

//  console.log(‘childNodes’, li.childNodes);
//  console.log(‘children’, li.children);

//  const categoryName = li.childNodes[0].textContent;
//  const liCount = li.children[0].childElementCount;

//  console.log(`Category: ${categoryName}`);
//  console.log(`The number of nested li: ${liCount}`);
// });

//========

// let items = document.querySelectorAll('.categories > li');
// // items.forEach(item => console.log(`Categories: ${item.firstChild.textContent}, length: ${item.childNodes[1].childElementCount}`));
// items.forEach(item => console.log(`Categories: ${item.firstChild.textContent}, length: ${item.children[0].children.length}`));

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

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');
// const mark = elements.reduce((acc, i) => acc + `<li>${i}</li>`, '');
// list.innerHTML = mark;

//========= module 7 # 4 ======================

/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//   },
//   {
//     url:
//     "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   alt: "Two Brown Hen and One Red Rooster"
// },
// {
//   url:
//     "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   alt: "Group of Horses Running"
// },
// {
//   url:
//     "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   alt: "Macaw Birds"
// },
// {
//   url:
//     "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   alt: "2 Lion on Grass Field during Daytime"
// }
// ];

// let gallery = document.querySelector('.gallery');
// const image = document.createElement('img');
// const mark = galleryItems.reduce((pic, i) => pic + `<li><img class = 'sizes' src = ${i.url} alt = ${i.alt}></li>`, '');
// gallery.innerHTML = mark;
// const sizes = document.querySelectorAll('.sizes');
// sizes.forEach(i => i.style.width = '250px');
// gallery.style.listStyle = 'none';

//========= module 7 # 5 ======================

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// let arrChecked = document.querySelectorAll('input:checked');
// console.log(arrChecked);


// function collectInputData(inputs) {
//     let ArrValue = inputs.map(item => item.value);
//     return ArrValue;
// }
// console.log(collectInputData(Array.from(arrChecked)));

//============

// let arrInput = document.querySelectorAll('input[checked]');
// console.log(arrInput);

// function collectInputData(inputs){
//    return Array.from(inputs).map(element => element.value);  
// }
// console.log(collectInputData(arrInput));

//========= module 7 # 6 ======================

/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
// function createMovieCard(){
//   let movie = document.querySelector('.movie');
//   let elem = document.createElement('img');
//   elem.classList.add('movie__image');
//   elem.src = 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg';
//   elem.alt = 'movie image';
//   movie.append(elem);

//   let elemTextContainer = document.createElement('div');
//   let textMain = document.createElement('h2');
//   textMain.classList.add()
// }
// createMovieCard();
//=============================
// function createMovieCard(){
//   let movie = document.querySelector('.movie');
//   let elem = document.createElement('img');
//   elem.classList.add('movie__image');
//   elem.src = 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg';
//   elem.alt = 'movie image';
//   movie.append(elem);

//   let elemTextContainer = document.createElement('div');
//   let textMain = document.createElement('h2');
//   textMain.classList.add('movie__title');
//   let textP1 = document.createElement('p');
//   textP1.classList.add('.movie__description');
//   let textP2 = document.createElement('p');
//   textP2.classList.add('.movie__date');
//   let textP3 = document.createElement('p');
//   textP3.classList.add('.movie__rating');

//   textMain.textContent = 'The Godfather';
//   textP1.textContent = 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.';

//   textP2.textContent = 'Released: 1972-03-14';
//   textP3.textContent = 'Rating: 8.6';
//   elemTextContainer.append(textMain, textP1, textP2, textP3);
//   movie.append(elem, elemTextContainer);//добавляем на один уровень картинку и контейнер с текстомм
// }
// createMovieCard();

//========= module 7 # 7 ======================

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

// function randomColor() {
//   let result = '';
//   let max = 255;
//   return result = `rgb(${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))})`;
// }
// console.log(randomColor());

// function createBoxes(num) {
//   let container = document.createElement('div');
//   let mainDiv = document.querySelector('#root');
//   let i = 1;
//   let width = 30;
//   let height = 30;

//   do {
//       // let divs = document.createElement("div");
//       // divs.style.backgroundColor = randomColor();

//       // divs.style.width = width +"px";
//       // divs.style.height = height + "px" ;

//       container.innerHTML += `<div style='width: ${width +"px"}; height: ${height + "px"}; background-color: ${randomColor()} '></div>`;
//       i++;
//       width += 10;
//       height += 10;

//   } while (i <= num);

//   mainDiv.append(container);
// }

// createBoxes(4);

//=========

// let root = document.querySelector('#root');
// root.setAttribute('style', ' display: grid; grid-template-columns: repeat(4, 1fr)');
// function createBoxes(mun, color) {
//     for (let i = 0; i < mun; i++){
//         let dIv = document.createElement('div');
//         let size = 30 + i* 10;
//         let red = color(0, 255);
//         let green = color(0, 255);
//         let blue = color(0, 255);
//         dIv.setAttribute('style', `background-color: rgb(${red},${green},${blue}); height: ${size}px; width: ${size}px`);
//         root.append(dIv);
//     }
//     console.log(root);
// }

// function randomColor(min, max) {
//     const minValue = min;
//     let maxValue = max;
//     return Math.floor(Math.random()* (maxValue - minValue + 1)) + minValue;
// };

// createBoxes(10, randomColor);
//============== homework ==========================
function createCard(array){
  for(let item of array){
      createPostCard(item);
      console.log(item)
  }
}
function createPostCard(post){
  let card = document.querySelector('#root');
  card.innerHTML += `<img src = '${post.img}'> <h2 class='title'>${post.title}</h2> <p>${post.text}</p><a href = '${post.link}'>${post.link}</a>`;
}
createCard(posts);