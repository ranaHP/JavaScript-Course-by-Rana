// let firstName = "Rana";'
// let age = 22;
// const  userDetails = "my name is " + firstName + ". l'm " + age + " years old.";
// console.log(userDetails);
// const  userDetailsNew = `my name is ${firstName}. l'm ${age} years old.`;
// console.log(userDetailsNew);

// if else 

// let mathMarks = 50;
// if(mathMarks >= 50){
//     console.log("Pass");
// }else{
//     console.log("Fails");
// }

// Conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 13);
// console.log(Number(32) ,32);
// console.log(Number("Rana") ,"Rana");

// // Coercion
// console.log("I am " + 23 + " years old.");
// console.log("10" + "10"); // **** 1010
// console.log("10" - "10"); //0
// console.log("10" / "10"); //1
// console.log("10" == "10"); //true
// console.log("23" - "10" - 3); //10

// let age = "22" + 1;
// console.log(age);
// age = age -1;
// console.log(age);

// console.log(Boolean(0)); // False
// console.log(Boolean(undefined)); // False
// console.log(Boolean(''));  //False
// console.log(Boolean(2)); // True
// console.log(Boolean("Rana")); //True
// console.log(Boolean({})); // True
// console.log(Boolean([])); // True

// == vs ===

// console.log("12" == 12);
// console.log("12" ===  12);


// let age = prompt("Enter Age - ");
// console.log(age);
// console.log(typeof age);

// const day = 'monday';
// switch(day){
//     case 'monday':
//         console.log("this is monday!");
//         break;
//     case 'tuesday':
//         console.log("this is tuesday!");
//         break;
//     case 'wednesday':
//         console.log("this is wednesday!");
//         break;
//     case 'thursday':
//         console.log("this is thursday!");
//         break;
//     case 'friday':
//         console.log("this is friday!");
//         break;
//     default:
//         console.log("this is weekend!");
//         break;
// 

// let age = prompt("What is your age ? ");
// alert(age);



// 'use strict';
// let mathMarks = 51;
// let isPass = false;
// if (mathMarks > 50) ispass = true; 
// if(isPass) console.log("Student is pass! ");


// function logger(){
//     console.log("Rana !");
// }
// logger();
// logger();

// function sumOf(first , second){
//     let sum = first + second;
//     console.log(`Sum is ${sum}`);

// }
// sumOf(112, 324);


// function sumOf(first , second){
//     return first + second;;
// }
// console.log("Normal Function return - " +sumOf(12,32));

// const sumOfAge = function (first , second){
//     return first + second;
// }

// console.log("Anonymous function  return  - " +sumOfAge(12,32));
// console.log("Normal Function  - " +sumOf(12,32));

// function sumOf(first , second){
//     return first + second;;
// }
// console.log("Normal Function  - " +sumOf(12,32));

// const sumofAge1 =  (first, second) => first + second;
// console.log("Arrow Function1  - " +sumOf(12,32));


// const sumofAge2 =  (first, second) => 
// {
//     let sum = first + second;
//     return sum;
// }
// console.log("Arrow Function2  - " +sumofAge2(12,32));

// const sumofAge3 = first => first * 5;
// console.log("Arrow Function3  - " +sumofAge3(12));

// Array Declaration 
// let color = ['red' , 'blue', 'green', 'orange'];
// let year = new Array(1198, 1999, 2000,2001)
// // Accessing an element of array
// console.log(color);
// console.log(color[0]);
// // Changing an element of array
// color[0] = 'purple';
// console.log(color);
// // Array length
// console.log(color.length);



'use strict';
// const color = ['red' , 'blue', 'green', 'orange'];

// color[1] = "gold";
// console.log(color[1]);

// // TypeError
// color = ['Hansana', 'Reshini'];


// const color = ['red' , 'blue', 1998, 11335];
// console.log(color);

// let color = ['red' , 'blue'];
// let currentLength = color.push('gold');
// console.log(color);
// console.log(currentLength);


// let color = ['red' , 'blue'];
// color.unshift('orange');
// console.log(color);.


// let color = ['red' , 'blue'];
// let popped = color.shift();
// console.log(color);
// console.log(popped);


// let color = ['red' , 'blue', 'gold', 'orange'];
// console.log(color.indexOf("gold"));
// console.log(color.indexOf("purple"));

// console.log(color.includes("gold"));
// console.log(color.includes("purple"));


// let studentDetails = [
//     "Rana",
//     23,
//     "no 54,Matara road, Akuressa",
//     "UCSC",
//     "Computer Science"
// ];

// let studentDetailsObj = {
//     'name' : "Rana",
//     'age': 23,
//     'address' :"no 54,Matara road, Akuressa",
//     'university' :"UCSC",
//     'course' :"Computer Science"
// };
// console.log(studentDetails);
// console.log(studentDetailsObj);


// let studentDetailsObj = {
//     'name' : "Rana",
//     'age': 23,
//     'address' :"no 54,Matara road, Akuressa",
//     'university' :"UCSC",
//     'course' :"Computer Science"
// };
// console.log(studentDetailsObj[0]);// Error
// console.log(studentDetailsObj.name);
// console.log(studentDetailsObj['name']);






// let studentDetails = [
//     "Rana",
//      23,
//     "no 54,Matara road, Akuressa",
//     "UCSC",
//     "Computer Science"
// ];
// studentDetails.forEach(printData);
// function printData(item, index){
//     console.log(index+ " - " + item );
// }


console.log('Hansan Ranweera');

if('hansana' == 'hansana'){ 
    console.log('Yes \n');
}

for(let j = 0;j < 10;j++){
    console.log('This is my For Loop' + j);
    
}
