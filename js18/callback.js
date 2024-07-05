
function sum(callback, x, y) {
  const result = x + y;
  callback(result);
}

function display(res) {
  console.log(res);
}

// sum(display,3,4)

//----------sep-----------//
// setTimeout(() => {
//   document.body.style.background = "red";
// }, 1000);

// setTimeout(() => {
//   document.body.style.background = "orange";
// }, 1000);

// setTimeout(() => {
//   document.body.style.background = "yellow";
// }, 1000);

// ---------- separator ---------- //

// setTimeout(() => {
//   // throw new Error("fake");
//   document.body.style.background = "red";

//   setTimeout(() => {
//     document.body.style.background = "orange";

//     setTimeout(() => {
//       document.body.style.background = "yellow";
//     }, 1000);
//   }, 1000);
// }, 1000);

//////////////////////////////
function fetchData(callback) {
  setTimeout(() => {
      const data = "Data from API";
      callback(data);
  }, 2000); // 2 seconds delay
}

function handleData(data) {
  console.log(data);
}

fetchData(handleData);
console.log("This will print before the data is fetched");


// ---------- separator ---------- //

// const delayedColorChange = (color, delay) => {
//   setTimeout(() => {
//     document.body.style.background = color;
//   }, delay * 1000);
// };

// delayedColorChange("red", 1);
// delayedColorChange("orange", 1);
// delayedColorChange("yellow", 1);
// delayedColorChange("skyblue",1);

// ---------- separator ---------- //

const delayedColorChange = (color, delay, doNext) => {
  setTimeout(() => {
    document.body.style.background = color;
    // doNext(); // ! doNext is not a function
    if (doNext) doNext();
  }, delay * 1000);
};

// !!! callback hell
// delayedColorChange("red", 1, () => {
//   delayedColorChange("orange", 2, () => {
//     delayedColorChange("yellow", 3);
//   });
// });
