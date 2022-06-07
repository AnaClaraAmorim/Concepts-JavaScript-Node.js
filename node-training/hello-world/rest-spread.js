function add(...a) {
    let sum = 0;
    a.forEach(num => sum+=num);
    return sum;
}

// function add(a, ...b) {
//     console.log(a);
//     console.log(b);
//     let sum = a;
//     b.forEach(num => sum += num);
//     return sum;
// }

console.log(add(2, 3, 4, 5));


// let arr = [2, 3, 4, 5];
// console.log(add(...arr));

// let arr2 = [...arr];
// // let arr2 = [1, ...arr, 6];
// console.log(arr2);
// console.log(arr);