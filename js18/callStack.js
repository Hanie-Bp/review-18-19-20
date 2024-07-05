// copy this code in:
// http://latentflip.com/loupe
// https://www.jsv9000.app/
// and chrome debugger!!!


/////////////////
//exm 2
// function firstFunction() {
//   console.log("I'm first function");
// }

// function secondFunction() {
//   firstFunction();
// }

// function thirdFunction() {
//   secondFunction();
//   console.log("I'm third function");
// }

// thirdFunction();
////////////////////
//exm3 
// function firstFunction(){
//     console.log("Hello from firstFunction");
//   }
  
//   function secondFunction(){
//     firstFunction();
//     console.log("The end from secondFunction");
//   }
  
//   secondFunction();

//exm4

function greeting() {
    return sayHi();
  }
  function sayHi() {
    return "Hi!";
  }
  
//   console.log("before run greeting");
  const message = greeting();
//   console.log(message);
  
  // output => before ..., Hi
  //
  
/////
// console.log('Start');

// setTimeout(() => {
//   console.log('Task');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Microtask');
// });

// console.log('End');

//---single theareded---//
// single thread => synchronous
// console.log("hi");
// for (let i = 0; i < 1000000000; i++) {}
// console.log("bye");

///web-api//
// window.alert("hi");
// document.createElement("h1");