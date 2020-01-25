// // alert('Hello World');
//
// var someVar = 'asd';
// someVar = 'newValue';
// var someVar = 'newSomeVar';
// console.log(someVar);
//
// let someLet = 'asd';
// someLet = 'newLetValue';
// // let someLet = 'newSomeLet'; // error
// console.log(someLet);
//
// const someConst = 'const';
// // someConst = 'newConst'; // error
// console.log(someConst);
//
// let newVar; // String newVar;
// console.log(newVar);
// newVar = null;
// console.log(newVar);
//
//
// console.log(undefined == null);
// console.log(undefined === null); //= = =
//
// let anInt = 1;
// let anIntString = '1';
// console.log(anInt == anIntString); // true
// console.log(anInt === anIntString); // false - porównuje typ i wartość
//
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object
// console.log(typeof anInt); // number
// console.log(typeof anIntString); // string
//
// let undefVariable;
// if (typeof undefVariable == 'undefined') {
//     console.log('undefVariable is undefined')
// }
//
// let anArray = [];
// anArray.push('someString');
// anArray.push(123);
// anArray.push({});
// anArray.push(['int']);
//
// console.log(anArray);
//
// anArray.forEach(function (item, id) {
//     console.log(`${id}: ${item}`);
// });
//
// let logFun = function (elem, index) {
//     console.log(`${index}: ${elem}`);
// };
// anArray.forEach(logFun);



// "st'r'";
// 'st"r"';
// `str`; // enables string interpolation

// function myFun(a, b, c) {
//     console.log("");
//     console.log(`${a}, ${b}, ${c}`)
// }
//
// myFun(1, 2, 3);
// myFun("123", "456", "789");
// myFun(1);


// ['1', '7', '11'].map(function (item, index) {
//     console.log(`${index}: ${item}`);
// });
//
// let parsed = ['1', '7', '11'].map(parseInt);
// console.log(parsed);
//
// let parsed2 = ['1', '7', '11', '0x15'].map(function(it) {
//     return parseInt(it);
// });
// console.log(parsed2);
//
// console.log(['-1', '-7', '7', '3'].sort());


// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// console.log([1, 10, 20, 5].sort(function(a,b) {return a-b}));