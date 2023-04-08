/*
 * variables valed start name = char & underscore(_) &
 * var = key word
 * emadSharShar = varName
 * (=) = Assignment oparator
 * 100 = var value
 * var empty = undefined
 *
 * datatyps =>
 *      1- boolen => true fules
 *      2- string
 *      3- numbers
 *      4- Array
 *      5- object
 *      6- undefined
 *      7- NaN (not a number)
 *      8- Null
 *      9- symbole
 *
 *  oparators
 *  1- (=) Assignment operator
 *  2- (==) comparison operator
 *  3- (===) Identical operator
 *  locical operator
 *  (!) Not
 *  (!=) Not Equal
 *  (&&) And
 *  (||) OR
 *
 * جمل الطباعه
 * 1- document.write("");
 * 2- console.log("");
 * 3- document.getElementById("").innerHTML = ;
 * 4- document.getElementById("").value = ;
 * 5- aleart(""); prompt('');
 *
 * conditions
 * if () {}
 * else if () {}
 * else {}
*/
/*
 *  methods in javascript
 *  1- prompt()
 *  2- length لحساب عدد الاحرف
 *  3- toString لتحويل المصفوفة الي استرنج نص عادي
 *  4- toLocaleString
 *  5- aleart("")
 *  6- new Date()    طباعه التاريخ من الجهاز
 *  7- join(شكل العلامه الفاصله بيم الكلمات)
 *  8- push("","") اضافه في المصفوفه في اخرها
 *  9- unshift(""); اضافه عنصر جديد في اول المصفوفه
 *  10- arrayNmae.splice(index, how many, item1,item2);
 *  اضفه عنصر في المصفوفه في اي مكان او خذف اي عنصر
 *  11- pop(); <= حذف عنصر من اخر المصفوفه ويمكن طباعته
 *  12- shift(); <= حذف عنصر من اول المصفوفه
 *  13- sort();  // ترتيب المصفوفة ابجديا
 *  14- reverse(); // ترتيب المصفوفه بالعكس
 *  15- slice(index start, index End); طباعه قطاع معين من المصفوفة
 *  16- nameArray.concat(otherNameArray) <= دمج مصفوفتين ببعض
 *  17- indexOf(name , point start search); <= Search in Array [index]
 *  18- lastIndexOf("Kloud", 2);  البحث في المصفوفة بطريقة عكسية
 *  19- typeOf() لتعريف نوع الداتا
 *  string method
 *  1- toString(); change from Number to String الافضل
 *  2- String(Number) change from Number to غير مستحيه
 *  3- search("love"); search in string
 *  4- split(Separatop, Limit)
 *  تحويل الاسترنج الي مصفوفه بدون التعديل علي الاسترنج الاصلي
 *  5- SubStr(start, length) substr(9, 10 //عدد الاحرف);
 *  6- substring(start, End);
 *  7- charAt(index);
 *  8- charCodeAt(2);  uni code for utf-8 Html document
 *  9- replace(value, new value);
 *  10- String.fromCharCode(Num1, Num2, Num3); تحويل اليوني كود الي حروف
 *  11- toLowerCase();
 *  12- toUpperCase();
 *  13- trim(); egnore spaces
 *  14- myLink.link("https://www.google.com")
*/

/* var myString = "I Love \"JavaScript\"";
console.log(myString);
console.log(typeof(myString));
console.log(myString.length); */

/*  syntax  split
 *  split(Separatop, Limit)
 *
 *  substring(start, End)
 *
 *  SubStr(start, length)
 */
/* var myMainString = "I'm Love Javascript And Json",
    mySubString = myMainString.substring(9, 10);
console.log(myMainString);
console.log(typeof(myMainString));
console.log(mySubString);
console.log(typeof(mySubString));
*/

/*
 * charAt(index);
 * charcodeAt(index);  utf-8 <= unecode transformation format 8bit
 * replace(value, new value);
 * String.fromCharCode(Num1, Num2, Num3);
 * 
*/

//var myNumber = 320;
//    stringNumber = myNumber.toString().replace(2, 44).split("");
//console.log(stringNumber);


/* function rite() {
    for (i = 0; i <= 26; i++) {
    var myString = "I Love Javascript Too Much";
        return document.getElementById("div").innerHTML = myString.charAt(i);    
    }
}*/

//var myNumber = 100;
//console.log(myNumber);
//console.log(typeof(myNumber));
//
//var myNewNumber = myNumber.toString();
//console.log(myNewNumber);

/*function sayHello() {
    var color = prompt("type color"),
        width = prompt("type width"),
        height = prompt("type height"),
        border = prompt("type border");
        
    document.write("<div style='background:" +
                   color + ";width:" + width +
                   ";height:" + height + ";border:" +
                   border + "'>" + "</div>");
}
var myFunction = sayHello();*/

/*(function calcAge() {
    var age = prompt("Enter your Age: "),
        ageDays = prompt("are you need your age by days");
    if (ageDays == "yes" || ageDays == "Yes") {
        alert("your age in days is " + age * 365 + "days");
    } else if (ageDays == "no" || ageDays == "No") {
        var ageMonth = prompt("are you need your age by months");
        if (ageMonth == "yes" || ageMonth == "Yes") {
            alert("your age in months is " + age * 12 + "month")
        } else if (ageMonth == "no" || ageMonth == "No") {
            var ageOurs = prompt("are you need your age by ours");
            if (ageOurs == "yes" || ageOurs == "Yes") {
                alert("your age in ours is " + age * 365 * 24 + "our");
            }
        }
    }
}());*/
/*self invoc*/ 
//function calc() {
//    var value = document.getElementById("calc").value,
//        result = value * 28.6;
//    document.getElementById("test").innerHTML = "<p>$" +
//    "<p style='color:red;margin-right:4px'>" + value +
//    "</p>" + "is Equel" +
//    "<p style='color:green;margin-left:4px'>" +
//    result + "</p>" + "EP" + "</p>";
//};

/*switch () {
    case name:
    code to Exce ute;
    break;
    
    case name:
    code to Exce ute;
    break;
    
    case name:
    code to Exce ute;
    break;
    
    default:
    code to Exce ute;
    break;
    
}*/
//var season = prompt("whats best season for you");
//
//switch (season) {
//case "winter":
//    alert("winter is cold season");
//    break;
//case "summer":
//    alert("summer is hot season");
//    break;
//case "Autumn":
//    alert("Autumn is nice season");
//    break;
//case "spring":
//    alert("spring is butyfull season");
//    break;
//default:
//    alert("this is not seasons");
//}

//scop (global scop , local scop)

//myInput.onkeyup = function () {
//    myDiv.innerHTML = myInput.value * 3.75;
//}

//myInput.onkeydown = function () {
//   alert("You Are Pressed The Key Now");
//}

//myInput.onkeypress = function () {
//   alert("You Are Pressed The Key Now");
//}

//var myInput = document.getElementById("input"),
//    myDiv = document.getElementById("div"),
//    select = document.getElementById("currency");
//    document.getElementsByTagName()
//    document.getElementsByClassName();
//
//select.onchange = function () {
//    myDiv.innerHTML = myInput.value * select.value;  
//};

//Array

// 1-conistractor way الطريقه الاولي لكتابة المصفوفة
//var friends = new Array();
//friends[0] = "Hassan";
//friends[1] = "Emad";
//friends[2] = "Osama";
//friends[3] = "Kloud";
//friends[4] = "Ahmed";
//console.log(friends[3]);
//var friends = new Array(
//    "Hassan",
//    "Emad",
//    "Osama",
//    "Kloud",
//    "Ahmed"
//);
//console.log(friends);

// 2- letteral way
//var friends = [];
//friends[0] = "Hassan";
//friends[1] = "Emad";
//friends[2] = "Kloud";
//console.log(friends);
/*var friends = [
    "Hassan", //0 index
    "Emad",   //1 index
    "Osama",  //2 index
    "Kloud",  //3 index
    "Ahmed"   //4 index
];*/
//console.log(friends);
//var myName = "Emad mostafu sharshar";
//console.log(friends.length);
//Array.isArray(nameArray) way one to check var is Array or not
//nameArray.constructor === Array way tow to check var is Array or not
//if (friends.constructor === Array) {
//    console.log("this is Array");
//} else {
//    console.log("this is not Array");
//}

// how to convert Array to string 
/* var friends = [
    "Hassan", //0 index
    "Emad",   //1 index
    "Osama",  //2 index
    "Kloud",  //3 index
    "Ahmed"   //4 index
]; */
// Add new element in Array
//way 1
// friends[friends.length] = "Sameh"; // ضفه اسم جديد في خر المصفوفه
// friends[friends.length] = "moamen";
// friends.push("Hosam","Nada"); // ضفه اسم جديد في خر المصفوفه
//way 2
// friends.unshift("Fares"); // في اول المصفوفة
// way 3
/*
 * arrayNmae.splice(index, how many, item1,item2);
*/
// friends.splice(3, 0, "glal");

//friends.sort();  // ترتيب المصفوفة ابجديا
//console.log(friends);
//
//var otherFriends = [
//    "Esmael",
//    "Mohamd",
//    "Omar",
//    "Rasha"
//];
//otherFriends.sort();
//console.log(otherFriends);
//
//
//var allFriends = friends.concat(otherFriends);
//console.log(allFriends);



// console.log(friends + "," + otherFriends);
/* var mySlicedArray = friends.slice(5, 8);
console.log(mySlicedArray); */
// friends.reverse(); // ترتيب المصفوفه بالعكس
// console.log(friends);

// how to removr item from Array

// friends.pop();  // حزف اخر عنصر في المصفوفة
// console.log(friends);

//var lastItem = friends.pop();
//console.log(lastItem);

// friends.shift();
// console.log(friends);

//var friends = [
//    "Hassan",   // 0 index
//    "Emad",     // 1 index
//    "Osama",    // 2 index
//    "Kloud",    // 3 index
//    "Ahmed",    // 4 index
//    "Omar",     // 5 index
//    "Salma",    // 6 index
//    "mMohamed", // 7 index
//    "Ali"       // 8 index
//];
//var x = document.getElementById("input").value;
//var specialFriend = friends.indexOf("Kloud", 2); 
//console.log(specialFriend); // 5
//console.log(friends[specialFriend]);
//
//document.getElementById("all").innerHTML =
//    "my friends: " + friends;
//document.getElementById("special").innerHTML =
//    "my special friend: " + friends[specialFriend];

// `<div style="width:${width}px;height:${height}px;background:${bgColor}"></div>`
// dom
// // mydiv.innerText = "kareem";
	// mydiv.innerHTML = "<p>Createivo</p>"
	// mydiv.style.color = 'white';
	// mydiv.style.backgroundColor = 'red';
	// mydiv.style.fontWeight = 'bold'

//var specialFriend = friends.lastIndexOf("Kloud", 2); 
//console.log(specialFriend); // 5
//console.log(friends[specialFriend]);
//
//document.getElementById("all").innerHTML =
//    "my friends: " + friends;
//document.getElementById("special").innerHTML =
//    "my special friend: " + friends[specialFriend];

//var myChar = {
//    color: "white",
//    type: "Sedan",
//    price: "60.000",
//    model: "2022"
//};

// console.log(myChar["color"]);
// console.log(myChar.color);
//var pro;
//for (pro in myChar) {
//    if (myChar.hasOwnProperty(pro)) {
//        console.log(myChar[pro]);
//    }
//}

//function creatDate() {
//    var valueOne = document.getElementById("input1").value,
//        valueTow = document.getElementById("input2").value;
//        
//        document.write("<select>");
//        
//    for (i = valueOne; i <= valueTow; i++) {
//        document.write("<option>" + i + "</option>");
//    }
//    
//        document.write("</select>");
//}

/*
 *  syntax while
 *
 *  while (condition) {
 *   
 *  }
*/
//var i = 0;
//
//while (i <= 10) {
//    console.log(i++);
//}

//var i = 0;
//do {
//    console.log(i++);
//} while (i <= 10);

//function genaratorYears(Start,End) {
//    var years = Start;
//    document.write("<select>");
//    while (years <= End) {
//        document.write("<option>" + years++ + "</option>");
//    }
//    document.write("</select>");
//}
//var x = prompt("start"),
//    y = prompt("End");
//genaratorYears(x,y);




//loop control
    //if (i === 4) {
    //    // break;  // stop loop
    //    // continue;
    //}
    //console.log(i++);
    
//var i, x;
//
//mainLoop: // label for loop
//for (i = 1; i < 4; i++) {
//    
//    childLoop: // label for loop
//    
//    for (x = 15; x < 20; x++) {
//        if (x === 17) {
//            break childLoop;
//        }
//        console.log(i + " => " + x);
//    }
//}

/* Math
 * methods math
 *
 * 1- Math.ceil(Number); <= التقريب الي الرقم القادم
 * 2- Math.floor(Number); <= التقريب للرقم السابق
 * 3- Math.round(Number); <= التقريب العادي
 * 4- Math.min(val, val, val); <= طباعه اصغر فاليو
 * 5- Math.mix(val, val, val); <= طباعه اكبر فاليو
 * 6- Math.random();  <=  من 0 الي 1 اخراج رقم عشائي
 * 
*/


 

/*
 * Regular Expression
 * Syntax
 * \pattern\attributes
 * search | Replace | Match | Split | Test
 * attributes list for Regular Expression
 * 1- /i => Case Insensitive
 * 2- /g => glopal modefire run in all string
 * 3- /m => multi line search
 * 4- [] => squer bracets
 * 5- [^] <= not
 * 6- [a-z] <= from a to z range
 * 7- [^a-z] <= not from a to z range
 * 8- [0-9] <= from 0 to 9
 * 9- [^0-9] <= not from 0 to 9
 * 10- [A-h] <= range [A-Z] and [a-h] tow in one
 * 11- [0-9a-z]
 * 12- [^0-9a-z]
 * 13- [0-9A-g]
 * 14- [^0-9A-g]
 * Regular Expression Quantifiers
 * 1- letter+ => word contain one Letter
 * 2- letter{Number} => word contain Number of letter
 * 3- letter{Number,Number} => word contain Number or Number
 * 4- letter{Number,} => word contain at least علي الاقل
*/

/*
 * date
 * 1- new Date();
 * 2- new Date(Milliseconds); from UTC [1 Jan 1970 00:00:00] GMT <= grintch main time
 * 3- new Date("October 25, 2003 01:32:03:32"); string
 * 4- new Date(Year, Month, Day[Hours,Minutes,Seconds,Milliseconds]);
 *
 * Date Format
 * 1- Full Format //string
 * 2- Long Format  // string
 * 3- Short Format  // month/day/year
 * 4- Iso Format <= International Organization for Standardization
 * [Y-M-D h:m:s TZD <= time Zone Date]
 *
 * Date Mehtods
 * 1- getDate()          getUTCDate()           <= Date of the month 1>31
 * 2- getDay()           getUTCDay()            <= Day of the week 0>6
 * 3- getFullYear()      getUTCFullYear()       <= Get The Ful Year
 * 4- getHours()         getUTCHours()          <= Get Hours  from 0 to 59
 * 5- getMinutes()       getUTCMinutes()        <= get minutes from 0 to 59
 * 6- getSeconds()       getUTCSeconds()        <= get seconds from 0 to 59
 * 7- getMilliseconds()  getUTCMilliseconds()   <= from 0 to 999
 * 8- getTime()          getUTCTime()           <= Number of Milliseconds from 1970 or Specific Date
 * 9- getTimezoneOffset()  <= UTC vs my local time in munets  UTC<= universal time cordenate
 *
 * Start setDate
 * 1- setDate()          setUTCDate()           <= day[Req]    
 * 2- setFullYear()      setUTCFullYear()       <= year[Req], month[opt], day[opt]
 * 3- setHours()         setUTCHours()          <= hours[Req], min[opt], second[opt], millisecond[opt]
 * 4- setMinutes()       setUTCMinutes()        <= min[Req], second[opt], millisecond[opt]
 * 5- setSeconds()       setUTCSeconds()        <= second[Req], millisecond[opt]
 * 6- setMilliseconds()  setUTCMilliseconds()   <= نضيف علي الوقت الجالي
 * 7- setMonth()         setUTCMonth()          <= month[Req], day[opt]
 *
 * Date.now(); // milli from 1970
 * Date.parth();   // input date
 * toISOString(); تحويل الديت العادي الي الايزو
 * toDateString();
 * toTimeString()
*/

//js Number = 8Bytes;
//octal system
//Hx desmal


/*
 * Numbers Method
 * 1- .toExponential(); os
 * 2- .toFixed(عدد الارقام بعد الفاصله);
 * 3- parseInt(); تحويل الاسترنج الي رقم
*/

/*
 * setInterval syntax
 *
 * setInterval(function () { // code }, delay);
 * setTimeout(function () { // code }, delay);
*/

//setTimeout(function () {
//    alert("Hello Javascript");    
//}, );
//
//setInterval(function () {
//    console.log("Hello Javscript");    
//}, 9000);

//function hellojs() {
//    console.log("Hello world");
//};
//
//var myFunction = setInterval(hellojs, 5000);
//
//document.onClick = myFunction;


//Js Operators
//<<Arithmetic Operators>>
//1- +    [Addition]
//2- -    [Subtraction]
//3- *    [Multiplication]
//4- /    [Division]
//5- %    [Modulus]
//
//<<Assignment Operators>>
//1- =                         [Assign]
//2- += or ++  <= [Increment]  [Add and assign]
//3- -= or --  <= [Decrement]  [Subtrac and assign]
//4- *=       x *= y <> x = x * y [Multipy and assign]
//5- /=      [Divide and assign Quotient]
//5- %=       [Divide and assign Modulus]
//
//<<String Operators>>
//1- +   [concatination]
//2- +=  [concatination Assignment]
//
//<<Increment and Decrement Operators>>
//1- ++X     [pre Increment]
//2- x++     [post Increment]
//3- --X     [pre Decrement]       x  is var
//4- X--     [post Decrement]
//
//<<Logical Operators>>
//1- &&  [And]
//2- ||  [Or]
//3- !   [not]
//
//<<Compaison Operators>>
//1- ==     [Equel]
//2- ===    [Identical]
//3- !=     [Not equel]
//4- !==    [Not Identical]
//5- <      [less than]
//6- >      [Greater than]
//7- >=     [Greater than or Equel to]
//8- <=     [less than or Equel to]








