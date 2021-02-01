//let cube1 = Math.floor(Math.random() * (7 - 1) + 1);
//let cube2 = Math.floor(Math.random() * (7 - 1) + 1);
//console.log("первый кубик выпал с номером: " + cube1)
//console.log("второй кубик выпал с номером: " + cube2)
//
///// Orel i Reshka
//
//let r = Math.round(Math.random())
////if(r){
////	console.log('Orel')
////} else {
////	console.log('Reshka')
////}
//console.log(r ? 'Orel' : 'Reshka')
//
//
//let n1 = +prompt('Vvedite pervoe chislo');
//let n2 = +prompt('Vvedite vtoroe chislo');
//let min = n1 < n2 ? n1 : n2;
//let max = n1 > n2 ? n1 : n2;
//let res = Math.random() * (max - min) + min;
//console.log(res.toFixed(2));
//var str = 'String';
//
//let name = 'Valeriy';
//let lastName = 'Gorbachevskiy';
//
//function sayHello(){
//	alert('Hello');
//}
//
//function getHello(){
//	return 'Hello';
//}
//
//function getSum(){
//	let a = 5,
//			b = 8;
//	name = 'Vitaliy'
//	return a + b;
//}
//
//
//function abc(){
//	let s = 'c';
//	let res = '';
//	if(s == 'a'){
//		res = 'a'
//	} else if (s == 'b'){
//		res = 'b'
//	} else if(s == 'c') {
//		res = 'c'
//	}
//	name = 'Vladimir'
//	
//	return res;
//}
//
//
//sayHello();
//
//console.log(getHello());
//console.log(getSum());
//console.log(abc())
//
//
//console.log(lastName) 

let str = 'String';

function s(){
	let str = 'StrinFunction';
	console.log(str);
}

//for(let i = 0; i < 5; i++){
//	console.log(i)
//}
//
//
//
//  //	'StrinFunction', 'string'

// Parameters

function getSum(n1, n2){
	return n1 + n2;
}

//let n = 888;
//console.log(getSum(n, 8));
//console.log(getSum(4, n));
//console.log(getSum(84, 119));
//console.log(getSum(4, 119));
//console.log(getSum(n, 119));
//console.log(getSum(3256, n));

// get Random

function getRandom(n1, n2){
	let min = n1 < n2 ? n1 : n2;
	let max = n1 > n2 ? n1 : n2;
	let r = Math.random() * (max - min) + min;
	return r;
}

//console.log(getRandom(4, 8))  // 5
//console.log(getRandom(14, 8))  // 5
//console.log(getRandom(44, 48))  // 5
//console.log(getRandom(4, 8))  // 5

// аргументы по умолчанию

function showMessage(text = 'HelloDefault', text1 = 'worldDefault'){
//	if(text1 === undefined){
//		text1 = 'world';
//	}
	console.log(`${text} ${text1}`);
//	alert(text + ' string ' + text1);
}
showMessage('Hello', 'world')
showMessage('10', 'world')
showMessage('Hello', 10)
showMessage('Hello')
showMessage()

let fn = function (text){
	console.log(text)
};

fn('Hello world');

let anon = function (){
	console.log('Anonimus')
}


/// SHOW QUESTION

function ask(question, actionYes, actionNo){
	if(confirm(question)){
		actionYes();
	} else {
		actionNo();
	}
}

//ask(
//	'Yor age > 18?', 
//	function (){
//		console.log('OK')
//	}, 
//	function (){
//		console.log('Cancel')
//	}
//)

// RECURSION

function factorial(n){
	if(n > 1){
		return n * factorial(n-1);
	}
	else {
		return n	
	}
}

console.log(factorial(8)); // 8*7*6*5*4*3*2*1 

 // 3^2 = 9


//Math.pow(3, 2);

function pow(n, p){
	let res = Math.pow(n, p);
	console.log(res);
}

pow(3, 2)


//getMin(2, 5, 4)
getMin(2, 4)

function getMin(a, b, c = Infinity){
//	let res = a < b ? a : b;
//	res = res < c ? res : c;
	let res = Math.min(a, b, c)
	return res;
}

console.log(getMin(2, 5));
console.log(getMin(2, 5, -4));



function getMinMax(action, n1, n2, n3, n4){
	if(action === 'min'){
		return Math.min(n1, n2, n3, n4)
	} else {
		return Math.max(n1, n2, n3, n4)
	}
}	 
		 

let max = getMinMax('max', 5, 78, 76, 789);
let min = getMinMax('min', 5, 78, -6, -987);

console.group('MIN MAX')
console.log(`Максимальное число ${max}`)
console.log(`Минимальное число ${min}`);
console.groupEnd





