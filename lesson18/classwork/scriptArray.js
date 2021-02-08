//let shopping = [];
let shopping = ['milk', 'eggs', 'hamon'];

console.log(shopping[0]);
console.log(shopping[1]);
console.log(shopping[2]);


shopping.push('potato1');
shopping.push('potato2');
shopping.push('potato3');
shopping.push('potato4');
shopping.push('potato5');

shopping.unshift('potato');

//myPush(shopping, 'hamon');
//myPush(shopping, 'wine');
//
//function myPush(arr, item){
//	arr[arr.length] = item;
//}

console.log(shopping.length);
console.log(shopping);

let numbers = [1, 2, 3]

//let lastItem = numbers[numbers.length - 1];
//numbers.pop();
//console.log(numbers.pop() * 2);
//console.log(numbers);

for(let i = 0; i < shopping.length; i++){
	console.log(getNewStr(shopping[i]))
}

function getNewStr(str){
		return str.charAt(0).toUpperCase() + str.substr(1) 
}

let playList = [
	'Song 1',
	'Song 2',
	'Song 3',
	'Song 4',
	'Song 5',
	'Song 6',
	'Song 7',
	'Song 8',
]

playList[15] = 'Lalalala'

function print(text){
	document.write(text + '<br \/>');
}

for(let i = 0; i < playList.length; i++){
	if(playList[i]){
		let item = document.createElement('li');
		item.classList.add('list-group-item');
		item.innerText = playList[i];

		let parent = document.getElementById('playlist');
		parent.appendChild(item);
	}
}

console.log(playList.join(' - '))

let str123 = 'Test - teset - test - etst - test'
console.log(str123.split(' -'))


console.log(playList.concat(shopping))


// deletes

let arr = [1, 3, 5, 7, 9];

arr.splice(1, 0, 'Ira', 'Ira', 'Ira', 'Ira', 'Ira', 'Ira');

console.log(arr);

// MATRIX

let m = [
	[1, 2, 3], 
	[4, 5, 6], 
	[7, 8, 9]
]
let m2 = [
	[1, 2, 3], 
	[4, 5, 6], 
	[7, 8, 9]
]

//console.log(m[1][2])
let newArr = []

for(let i = 0; i < m.length; i++){
	newArr[i] = [];
	for(let j = 0; j < m[i].length; j++){
		newArr[i][j] = m[i][j] * 2;
	}	
}

console.log(newArr)





