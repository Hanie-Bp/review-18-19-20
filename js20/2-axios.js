const fetchUsers = async () => {
  // use axios
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  // console.log(response.data );
  
  console.log(response);

  // use fetch
  // const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // const users = await response.json(); // convert to javascript
  // console.log(users);
};
// fetchUsers();

// ---------- separator ---------- //

const btnEle = document.querySelector("button");
const jokesEle = document.querySelector("#jokes");

const handleClick = async () => {
  // const response = await fetch("https://icanhazdadjoke.com/", {
  //   headers: {
  //     Accept: "application/json",
  //   },
  // });
  // const data = await response.json();
  // console.log(data.joke);

  const config = {
    headers: {
      Accept: "application/json",
    },
  };

// {data} = response.data
  const { data } = await axios.get("https://icanhazdadjoke.com/", config);
  console.log(data);
// data.joke = {joke}
  generateJoke(data);
};

const generateJoke = ({ joke }) => {
  const li = document.createElement("li");
  li.innerText = joke;

  jokesEle.append(li);
};

btnEle.addEventListener("click", handleClick);
