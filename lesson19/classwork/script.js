let button = document.getElementById('showAlert');

// First method elem.onclick

//button.onclick = function(){
//	alert('SHOW!!')
//}

//button.onclick = show;

function show(){
	console.log('SHow!!!')
}
function removeClickBt1(){
	button.removeEventListener('click', show);
}


// second method .addEventListener

button.addEventListener('click', show);
document.getElementById('removeAlertBt1').addEventListener('click', removeClickBt1)
// Add to CART

function addToCart(event){
	event.preventDefault();
// TASK: iPhone 12 add to cart
//	console.log('add to cart'); 
//	console.log(this.parentElement); // step 1
//	console.log(this.parentElement.querySelector('.card-title')); // st2
	console.log(event);
	console.log(this.parentElement.querySelector('.card-title').innerText, 'add to cart');
	console.log('И ID товара:', this.getAttribute('data-id'))
}

let btnsAddToCart = document.querySelectorAll('.addToCart');

console.log(btnsAddToCart);

for(let i = 0; i < btnsAddToCart.length; i++){
	btnsAddToCart[i].addEventListener('click', addToCart);
}

let box = document.querySelector('#box');
let text = document.querySelector('#text');
let firstName = document.querySelector('#firstName');

box.addEventListener('click', showTypeEvent);
box.addEventListener('mousedown', showTypeEvent);
box.addEventListener('mouseup', showTypeEvent);
box.addEventListener('wheel', showTypeEvent);


text.addEventListener('keydown', showTypeEvent);
text.addEventListener('keyup', showTypeEvent);
text.addEventListener('keypress', showTypeEvent);


firstName.addEventListener('focus', showTypeEvent);
firstName.addEventListener('blur', blur);
firstName.addEventListener('change', showTypeEvent);
firstName.addEventListener('input', showTypeEvent);
firstName.addEventListener('paste', paste);

function paste(e){
	e.preventDefault();
	firstName.value = "Сюда мы не лезем!!!!"
}
function blur(e){
	firstName.value = ""
}

function showTypeEvent(event){
	console.log('Event', event.type)
	
//	console.log('Mouse on coord:', event.clientX, ':', event.clientY)
}


//window.onbeforeunload = function(e) {
//  var dialogText = 'Dialog text here';
//  e.returnValue = dialogText;
//  return dialogText;
//};






//

//document.getElementById('testMenuItem').addEventListener('mouseenter', hoverMenuItem);
//document.getElementById('testMenuItem').addEventListener('mouseleave', blurMenuItem);
//
//function hoverMenuItem(){
//	this.querySelector('.submenu').classList.add('open')
//	console.log(this)
//}
//
//function blurMenuItem() {
//	this.querySelector('.submenu').classList.remove('open')
//	console.log(this)
//}

let alBtns = document.querySelector('.buttons');

 alBtns.addEventListener('click',function(e){
    if(e.target && e.target.classList.contains('alarm')){
        console.log('Это кнопка 100%')
     }
 });
//for(let i = 0; i < alBtns.length; i++){
//	alBtns[i].addEventListener('click', t34)
//}

function t34(){
	console.log('test dynamic')
}

let newBtn = document.createElement('button');
newBtn.classList.add('btn', 'btn-warning', 'alarm');
newBtn.innerHTML = 'NEW ALARM';
//newBtn.onclick = t34;

document.querySelector('.buttons').appendChild(newBtn




