// *** promise version good idea
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random().toFixed(2);
    console.log(randomNumber);

    setTimeout(() => {
      if (randomNumber < 0.6) {
        resolve(`get response was successfully from ${url}`);
      } else {
        reject("request rejected");
      }
    }, 1000);
  });
};

// console.log(fakeRequest("http://sabteAhval.ir"));

// fakeRequest("http://sabteAhval.ir")
// .then((data)=> {
//   console.log(data);
//   return fakeRequest("http://sabteAhval.ir");
// }).then((data)=> {
//   console.log(data);
// })
// .catch((err)=> {
//   alert(err)
// })



// fakeRequest("http://sabteAhval.ir")
//   .then((response) => {
//     console.log(response);
//     return fakeRequest("http://yahoo.com");
//   })
//   .then((response) => {
//     console.log(response);
//     return fakeRequest("http://google.com");
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// ---------- separator ---------- //

//! THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 3000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

fakeRequestCallback(
  "books.com/page1",
  function (response) {
    console.log("IT WORKED!!!!");
    console.log(response);
    fakeRequestCallback(
      "books.com/page2",
      function (response) {
        console.log("IT WORKED AGAIN!!!!");
        console.log(response);
        fakeRequestCallback(
          "books.com/page3",
          function (response) {
            console.log("IT WORKED AGAIN (3rd req)!!!!");
            console.log(response);
          },
          function (err) {
            console.log("ERROR (3rd req)!!!", err);
          }
        );
      },
      function (err) {
        console.log("ERROR (2nd req)!!!", err);
      }
    );
  },
  function (err) {
    console.log("ERROR!!!", err);
  }
);
