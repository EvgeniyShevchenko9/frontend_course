//console.log(document.body.children);


//
//console.log(p.parentNode)
//console.log(p.previousElementSibling);
//console.log(p.nextElementSibling);

//console.log(document.getElementsByName('name'));
//console.log(document.getElementsByTagName('p'));
//console.log(document.getElementsByClassName('paragraph'))
//
//console.log(document.querySelector('.paragraph'));
////console.log(document.getElementById('paragraph'))
////
//console.log(document.querySelectorAll('.paragraph'));
//
//
//let p = document.getElementById('paragraph');
//
//console.log(p.matches('body p'))

//
//let box2 = document.getElementById('box2');
//let box1 = document.getElementById('box1');
//let box = document.getElementById('box');
//
////console.log(box2.parentElement.parentElement)
////console.log(box1.parentElement)
////console.log(box)
//
//console.log(findBOX(box2));
//console.log(findBOX(box1));
//console.log(findBOX(box));
//
//function findBOX(elem){
//	return elem.closest('#box')
//}
//
//console.log(box.contains(box2))
//
//console.log(box.innerText)
//console.log(box.outerHTML)
//
//
//let arrParagraphs = document.querySelectorAll('p');
//
//for(let i = 0; i < arrParagraphs.length; i++){
//	if(!arrParagraphs[i].hasAttribute('data-count')){
//		arrParagraphs[i].setAttribute('data-count', i+1);
//	}	
//}

//p.setAttribute('class', 'paragraph');


//// Вставка и удаление элементов

//let box3 = document.getElementById('box3');
//box3.classList.add('box-sm');


let parent = document.getElementById('box-container');

for(let i = 0; i < 10; i++){
	let newBox = document.createElement('div');
	newBox.classList.add('box', 'box-green');
	newBox.innerText = 'Я созданный JS-ом'
	
	let priceSpan = document.createElement('p');
	priceSpan.innerText = i*50 + ' UAH';
	newBox.appendChild(priceSpan);
	
	
	parent.insertBefore(newBox, document.getElementById('box3'));
}

parent.removeChild(document.querySelector('.box'));

let cloneBox = document.getElementById('box3').cloneNode(false);
cloneBox.style.backgroundColor = '#f00'
parent.appendChild(cloneBox);

//console.log(window.getComputedStyle(cloneBox));
//
//let style = window.getComputedStyle(cloneBox);
//
//if(style.backgroundColor === 'rgb(255, 0, 0)'){
//	cloneBox.style.backgroundColor = '#ff0'
//}









