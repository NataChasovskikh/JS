'use strict'
/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

// const galleryItems = [
//    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
//    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
//    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
//    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
//    { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
//    { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
//  ];
 
 
//  const container = document.querySelector('.js-image-gallery');
 
//  let createFullview = () => {
//    let fullviewEl = document.createElement('div');
//    fullviewEl.classList.add('fullviewEl');
//    let fullviewImg = document.createElement('img');
//    fullviewImg.classList.add('fullviewImg');
 
//    fullviewImg.src = galleryItems[0].fullview;
 
//    fullviewEl.appendChild(fullviewImg);
//    container.appendChild(fullviewEl);
//  };
 
//  createFullview();
 
//  let createPreview = () => {
 
//    let ul = document.createElement('ul');
//    ul.classList.add('previewElements');
//    container.appendChild(ul);
 
//    galleryItems.forEach(el => {
//      let li = document.createElement('li');
//      let img = document.createElement('img');
//      img.setAttribute("data-fullview", el.fullview);
//      img.setAttribute("alt", el.alt);
//      img.src = el.preview;
//      li.appendChild(img);
//      ul.appendChild(li);
//    });
 
//  };
//  createPreview();
 
//  const preview = document.querySelector('.previewElements');
 
//  const fullview = document.querySelector('.fullviewImg');
 
//  preview.addEventListener('click', event => {
//    const nodeName = event.target.nodeName;
//    if (nodeName !== 'IMG') return;
//    const fullviewSrc = event.target.getAttribute('data-fullview');
//    fullview.src = fullviewSrc;
//  });
///===========================
// const imgGallery = document.querySelector(".js-image-gallery");
// const fullview = document.createElement("div");
// imgGallery.appendChild(fullview);
// fullview.classList.add("fullview");
// const fullviewMainImg = document.createElement("img");
// fullview.appendChild(fullviewMainImg);
// fullviewMainImg.setAttribute("src", galleryItems[0].fullview);
// fullviewMainImg.setAttribute("alt", "alt text 1");
// const preview = document.createElement("ul");
// imgGallery.appendChild(preview);
// preview.classList.add("preview");

// function createImg() {
//   galleryItems.forEach(function(item) {
//     const galleryConteiner = document.createElement("li");
//     preview.appendChild(galleryConteiner);
//     const galleryImg = document.createElement("img");
//     galleryConteiner.appendChild(galleryImg);
//     galleryImg.setAttribute("src", item.preview);
//     galleryImg.setAttribute("data-fullview", item.fullview);
//     galleryImg.setAttribute("alt", item.alt);
//   });
// }
// createImg();

// const previewGallery = document.querySelector(".preview");

// function changeFullview(event) {
//   const target = event.target;
//   if (target.nodeName !== "IMG") return;
//   findPreview(target);
//   lightPreview(target);
// }

// function findPreview(elem) {
//   fullviewMainImg.src = elem.dataset.fullview;
// }

// function lightPreview(elem) {
//   const currentElem = document.querySelector(".newClass");
//   if (currentElem) {
//     currentElem.classList.remove("newClass");
//   }
//   elem.classList.add("newClass");
// }

// previewGallery.addEventListener("click", changeFullview);

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
  аналогичный заданию выше.
  
  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию
    
  Тогда создание экземпляра будет выглядеть следующим образом.
*/

new Gallery({
   items: galleryItems,
   parentNode: document.querySelector('.image-gallery'),
   defaultActiveItem: 1
 });
 
 /* Далее плагин работает в автономном режиме */
 class Gallery {
    constructor (items,parentNode, defaultActiveItem){
       this.item = items.map(item.preview);
       this.parentNode = parentNode;
       this.defaultActiveItem = [0];
    }
 }
//  - При клике в элемент preview, необходимо подменить src тега img внутри fullview
//         на url из data-атрибута выбраного элемента.

get InsertGallery (){
   let addImage = this.items.reduce(pic, i) => pic +  `<>`
}