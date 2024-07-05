// https://mockapi.io
// const baseUrl = "https://664d0006ede9a2b556525aee.mockapi.io";
const baseUrl = "https://66698bd02e964a6dfed59346.mockapi.io";

const form = document.querySelector('form');

//get users
const getAllUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    const users = response.data
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

// getAllUsers()



//with fetch
// const getUsersWithFetch = async () => {
//   try {
//     const response = await fetch(`${baseUrl}/users`);
//     const users = await response.json()
//     console.log(users);
//   } catch (error) {
//     alert('for get users:',error)
//   }
// };

// getUsersWithFetch()




//post
const createUser = async (user) => {
  try {
    const { data } = await axios.post(`${baseUrl}/users`, user);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//with fetch

// const createUserWithFetch = async (obj)=> {
//   const options = {
//     method: 'POST', // Method type
//   headers: {
//     'Content-Type': 'application/json' // Header for JSON data
//   },
//   body: JSON.stringify(obj) // Convert JavaScript object to JSON string
//   }
//   try {
//     const response = await fetch(`${baseUrl}/users`,options);
//     const user = await response.json();
//     console.log(user);
//   } catch (error) {
//     alert('for post user:',error)
//   }
// }

form.addEventListener('submit',(e)=> {
  e.preventDefault();
  const obj = {
    email:e.target.email.value.trim(),
    password:e.target.password.value.trim(),
  }

  // createUser(obj)
  console.log(obj);
  e.target.email.value = '';
  e.target.password.value = '';
})


//update
const updateUser = async (id, newData) => {
  try {
    const { data } = await axios.put(`${baseUrl}/users/${id}`, newData);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

updateUser(2,{email:'hanie2@gmail.com'})

//delete
const deleteUser = async (id) => {
  try {
    const { data } = await axios.delete(`${baseUrl}/users/${id}`);
    console.log(data);
  } catch (error) {
    if (error.response.status === 404) {
      alert(`not found user with id ${id}`);
      return;
    }
    console.log(error);
  }
};

// createUser({ name: "Fatemeh" });
// updateUser(1, { name: "AliReza" });
deleteUser(10);

// getAllUsers();
