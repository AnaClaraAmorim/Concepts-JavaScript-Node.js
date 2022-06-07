let student = {
    firstName: 'Riyaz',
    lastName: 'Sayyad',
    age: 35,
    hobbies: ['reading', 'painting', 'programming'],
    email: 'riyaz@rizmax.com',
    website: 'academy.rizmax.com'
}

// let firstName = student.firstName;
// let lastName = student.lastName;

let {firstName:fName, lastName, nickName:NN = 'Not provided', ...details} = student;

console.log(fName);
console.log(lastName);
console.log(NN);
console.log(details);

// // let arr = [10, 20, 30, 40];
// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let [num1, num2, , num4, num5 = 0, ...numbers] = arr;

// console.log(num1);
// console.log(num2);
// console.log(num4);
// console.log(num5);
// console.log(numbers);