'use scrict'

let wrapper = document.querySelector('.wrapper');
let input = document.querySelector('input');
let add = document.querySelector('.add');
let del;
let cardTemplate = document.querySelector('.cardTemplate').innerHTML.trim();
let template = Handlebars.compile(cardTemplate);
let loadSite ;
let sites = {
   data: []
};
let objSite = {
    title: ''
  };
  
//---------------------local storage
let loader = function(){
sites = localStorage.getItem('sites');
sites = JSON.parse(sites); 
sites.data.every(item => )

// let markup = template(objSite);  
// wrapper.insertAdjacentHTML('afterbegin', markup);
}
window.addEventListener('load', loader);



let addSite = function (e) {
  e.preventDefault();

//   objSite.title = input.value;
sites.data.push(input.value);
localStorage.setItem('sites', JSON.stringify(sites));

objSite.title = input.value;

  let markup = template(objSite);
  if (!wrapper.textContent.includes(input.value)) {
    wrapper.insertAdjacentHTML('afterbegin', markup);
  } else(alert('takaya zakladka uzhe est`'))

  //-----------------------------delete
  del = document.querySelector('.del');
  let delSite = function (e) {
    e.preventDefault();
    e.target.parentNode.remove();
  }
  input.value = '';
  del.addEventListener('click', delSite);
};
add.addEventListener('click', addSite);