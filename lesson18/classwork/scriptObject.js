let student = {
	name: "Valeriy",
	grades: [88, 98, 74, 84],
	isPowercodeStudent: false,
	t1: 5,
	t2: 87,
	t3: 55
};


let strObj = JSON.stringify(student)
console.log(strObj);

//let studentClone = Object.assign({}, student);
let studentClone = JSON.parse(strObj)


console.log(studentClone)

//console.log(student['name']);
//console.log(student.name);
//
//for(let i = 0; i < 3; i++){
//	console.log(student['t'+(i+1)])
//}

//student.isPowercodeStudent = true;
//student.lastName = 'Gor';
//
//
//console.log(student)
//
for(let key in student){
	console.log(`${key}: ${student[key]}`);
}


let salaries = {
	katya: 800,
	sveta: 500,
	alex: 460
}

let sum = 0;

for(let key in salaries){
	sum += salaries[key]
}

console.log(sum)
























