
/*document.write("Hello world");
document.querySelector("h1").style.color = "red";
console.log("Hello javascript");
window.alert("I love javascript");
console.error("test error");*/
// window.print()
// window.
// dom <= documet object model

/* Data types in js
 * <<Primitive اساسية>> <<Non Primitive غير اساسية>>
 * 
 * <<Primitive اساسية>>
 * 1- string
 * 3- Number
 * 4- boolean (True, False)
 * 5- Null   <= nothing
 * 6- undefined
 * 7- object
 * 8- Nan
 *
 * <<Non Primitive غير اساسية>>
 * 1- Array
 * 2- sembol
*/

/* 3 ways to creat varibales
 *
 * 1- var;
 * 2- let;
 * 3- const;
 * rols in rename varibles
 * 1- dont rite numbers in first
 * 2- dont rite operators in first except _ <= under score and $ 
 * 3- dont rite keywords in js;
*/



// var name = 'Ahmed';  // can declaration var
// console.log(name);   // can change value
                     // can declaration miny time

// let name2 = "Omar";  // can declaration let one time
// console.log(name2);  // can change value
                     // can't declaration agin

// const name3 = "Ali"; // can't declaration const
// console.log(name3);  // conest is static vairable can't change value

// console.log(` my name is ${n} and my age is ${y} years old `); // ECMA Script 6

//let n = 5;
//let y = 4;
// console.log(+'3' + +'2'); // +"string" <= change string to number -"string" <= -number

/*
 * Methods
 * 1- Number("string") <= string to Number nember() is object
 * 2- parseInt()
 * 3- parseFloat()
 * 4- Number.MAX_VALUE
 * 5- Number.MAX_SAFE_INTEGER
 * 6- Number.MIN_SAFE_INTEGER
 * 7- Number.isSafeInteger(num) check save number
 * 8- Number.isIntege() check number or not
 * 9- Number.isNaN()    check not a number
 * 10- 
*/

//console.log(+"9");
//console.log( Number.MAX_VALUE );
//console.log( Number.MAX_SAFE_INTEGER );
//console.log( Number.MIN_SAFE_INTEGER );
//Number.isSafeInteger(num) 
//console.log( Number.isInteger(num) );
//console.log( Number.isNaN(num) );

/*
 * Math prorirty
 * 1- E
 * 2- PI
 * Math Methods
 * 1- abs()    minus Number to nigetive Number
 * 2- sqrt()  الجزر التربيعي
 * 3- pow(x,y) x os y
 * 4- round()
 * 5- ceil()
 * 6- floor()
 * 7- min()
 * 8- max()
 * String() <= object
 * 9- toString()
*/

// console.log( 200..toString() );
// 
// access()
// search()
// slice()
// split()

/* function
 * repeat();
 * length
*/

//let name = "Emad Mostafu Mbdelhady Mostafu Ali Sharshar";  //string is sequns value
//console.log(name.length);
//console.log( name[2]/*this way if number > realnumber so result is undefind */ /* [] <= index Number */ );
//console.log(name.charAt(0));
//console.log(name.indexOf("l" , /*Number Of Start Search*/));
//console.log(name.lastIndexOf("A"));
//console.log(name.slice(4,13 /* تقبل قيم سالبه number index to start cut string*/));
//console.log(name.split(" ", /*limit*/ )/* transform string to array */);
//console.log(name.substring()/*لا  تقبل ثيم سالبه*/);
//console.log(name.substr(/*start , number of move after start point*/));
//
//console.log(name.includes()/*true if char exest false if char not exest*/);
//console.log( name.startsWith("l", /*start run*/) /*true or false البحث والتأكد من اول حرف في الجمله*/);
//console.log( name.endsWith("l", /*number of chars to search from start <= true or false*/));
//console.log(name.search("mad"));
// console.log(name.("E"));


//arrays
//let names = [
//    'ahmed','ziad',
//    'sobhy','Emad',
//    'kloud','mazen',
//    'salma','sara'
//];
//console.log(names);
//console.log(names[names.length - 1);

/*<= nested array =>*/
//let objects= ['emad ',2,3,4,['gmal','omar','kloud',['you','love ']]];
//let emadlovekloud = objects[0] + objects[4][3][1] + objects[4][2];
//console.log(emadlovekloud);

//let objects= ['emad ',2,3,4,['gmal','omar','kloud',['you','love ']]];
//objects.push("sameh");     /* push <= add element to last index of array*/
//objects.unshift('osama'); /* unshift <= add element in first index of array*/
//objects.shift();   /*remove element in array from first index and save value in shift and can echo him shift*/
//objects.pop();    /*remove element in array from last index and save value in pop and can echo him pop*/
//console.log(objects);
//objects.splice(1,0,"gmal");
//console.log(objects);
//console.log(objects.slice(0,3) /*لا تؤثر في الاراي الاصليه علي عكس الاسبلايس*/);


let names = [
    'emad',
    'ahmed',
    'omar',
    'kloud',
    'waled'
];
let names2 = [
    'said',
    'moamen',
    'amar',
    'ali',
    'salma'
];
//console.log(names);
//console.log(names.indexOf('ahmed',0));
//console.log(names.lastIndexOf('kloud'));
//console.log(names.includes("ahmed") /*true false*/);

//console.log(names);
//console.log(names.reverse());
//console.log(names.sort());

//console.log(names.concat(names2));
//
//console.log(names.join());

/*let askMe = prompt("type yor email:");
let email = 'emadmostafu222@gmail.com';
document.write(askMe.toLowerCase().trim() == email);*/ /*trim <= egnore spaces*/















