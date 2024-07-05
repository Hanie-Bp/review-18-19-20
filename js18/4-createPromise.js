// Promise => PENDING | FULLFIL | REJECTED
const promise = new Promise((resolve,reject)=> {})
// const promise = new Promise(() => {}); // ?? PENDING
// const promise = new Promise((res, rej) => {
//   // res("data");
//   rej('you got an error')
// }); // ?? FULFILLED
// const promise = new Promise((res, rej) => {
//   rej('error');
// }); // ?? REJECTED
// console.log(promise);
// promise.then((data)=> {
//   console.log(data);
// }).catch((err)=> {
//   alert(err)
// })
///////////////////////////////

//tasks
/*
1.walk the dog
2.clean the dishes
3.take out the trash
*/

// function walk(callback) {
//   setTimeout(() => {
//     console.log("you walk the dog");
//     callback()
//   }, 1500);
// }

// function cleanDishes(callback) {
//   setTimeout(() => {
//     console.log("you clean the dishes");
//     callback();
//   }, 2500);
// }

// function takeOut(callback) {
//   setTimeout(() => {
//     console.log("you take out the trash");
//     callback()
//   }, 500);
// }

// walk(()=> {
//   cleanDishes(()=> {
//     takeOut(()=> {
//       console.log('finished');
//     });
//   })
// })



///callback hell


//using promise
function walk() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("you walk the dog");
      // const dogWalked = true;
      // if (dogWalked) {
      //   resolve("you walk the dog");
      // } else {
      //   reject('you did not walk the dog')
      // }
    }, 1500);
  });
}

function cleanDishes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("you clean the dishes");
      const kitchenCleaned = false;
      if (kitchenCleaned) {
        resolve("you clean the dishes");
      } else {
        reject('you did not cleaned the kitchen')
      }
    }, 2500);
  });
}

function takeOut() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("you take out the trash");
      // const trashTakenOut = false;
      // if (trashTakenOut) {
      //   resolve("you take out the trash");
      // } else {
      //   reject('you did not take out the trash')
      // }
    }, 500);
  });
}



// console.log(walk());

// walk()
//   .then((data) => {
//     console.log(data);
//     return cleanDishes();
//   })
//   .then((data) => {
//     console.log(data);
//     return takeOut();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log("you finshed all the tasks");
//   })
// .catch((err)=> alert(err))

//------sep------//
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.background = color;
      resolve("change background was successfully");
      return;
    }, delay * 1000);
  });
};

// delayedColorChange("purple", 1)
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     alert(err);
//   });

// *** best practice ***
delayedColorChange("red", 1)
  .then(() => {
    return delayedColorChange("orange", 2);
  })
  .then(() => {
    return delayedColorChange("yellow", 3);
  })
  .catch((error) => {
    alert(error);
  });

// !!! bad practice !!!
// delayedColorChange("red", 1)
//   .then(() => {
//     delayedColorChange("orange", 2)
//       .then(() => {
//         delayedColorChange("yellow", 3);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   })
//   .catch((err) => {
//     console.error(err);
//   });
