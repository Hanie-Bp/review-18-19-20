// const fakeRequest = (url) => {
//   return new Promise((resolved, reject) => {
//     const delay = Math.random() * 4500 + 500;
//     console.log(delay);
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("connection timeout");
//       } else {
//         resolved(`here is your fake data: ${url}`);
//       }
//     });
//   });
// };

// fakeRequest('google.com')
// .then((data)=> console.log(data))
// .catch((err)=> alert(err));

async function hello() {}
// const hi = async () => {}


function hi() {
  return "hello hello";
}

const sing = async () => {
  return "la la la la";
};

// console.log(hi());
// console.log(sing());

// sing().then((data)=> {
//   console.log(data);
// }).catch((err)=> {
//   alert(err)
// })

// sing()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((er) => {
//     console.log(er);
//   });

const login = async (username, password) => {
  if (!username || !password) {
    throw "missing credential";
  }
  if (password === "hi") {
    return "welcome";
  }
  throw "invalid pass";
};



async function auth() {
try {
 const info = await login('marayam','hi')
 console.log(info);
} catch (error) {
  alert(error)
} 
}


// auth()





//   async function auth() {
//     try {
//       const data = await login("reyhaneh", "hi");

//       console.log(data);
//     } catch (error) {
//       console.log("not ok", error);
//     }
//   }
// auth();

//----sep---------//
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.body.style.backgroundColor = color;
        resolve('done');
      }, delay);
    });
  };

  // 1- first func
// async function rainbow() {
//   const data = await delayedColorChange("red", 1000);
//   console.log(data);
//   delayedColorChange("orange", 1000);
// }

// rainbow()

// 2- second func
// async function rainbow() {
//     await delayedColorChange("red", 1000);
//     delayedColorChange("orange", 1000);
// }

// 3- third func
async function rainbow() {
    await delayedColorChange("red", 1000);
    await delayedColorChange("orange", 1000);
    await delayedColorChange("yellow", 1000);
    await delayedColorChange("green", 1000);
    await delayedColorChange("blue", 1000);
    await delayedColorChange("indigo", 1000);
    await delayedColorChange("violet", 1000);
    return "All done!";
  }
  
  // rainbow().then((res) => {
  //   console.log(res);
  //   console.log("End of rainbow");
  // });
  
  async function printRainbow() {
  const data =  await rainbow();
  console.log(data);
    console.log("end of rainbow");
  }
  // printRainbow();

////----sep------///
const fakeRequest = (url) => {
    return new Promise((resolved, reject) => {
      const delay = Math.random() * 4500 + 500;
      // console.log(delay);
      setTimeout(() => {
        if (delay > 4000) {
          reject(`connection timeout in ${url}`);
        } else {
          resolved(`here is your fake data: ${url}`);
        }
      }, 2000);
    });
  };
  
  async function makeTwoRequests() {
    try {
      let data1 = await fakeRequest("/page1");
      console.log(data1);
      let data2 = await fakeRequest("/page2");
      console.log(data2);
    } catch (e) {
      console.log("caught an error!");
      console.log("error is:", e);
    }
  }
  
  makeTwoRequests();