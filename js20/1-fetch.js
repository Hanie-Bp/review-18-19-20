// fetch => return promise
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     console.log(response);

//     if (response.status === 404) {
//       alert("&%#()(*%!()&");
//       return;
//     }

//     const results = response.json()
//     // console.log(results);

//     return results // return => promise
//   })
//   .then((posts) => {
//     console.log(posts);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })

// ---------- separator ---------- //

const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    const posts = await response.json();
    console.log(posts);
  } catch (err) {
    alert("your address invalid!");
  }
};
// getUsers();
