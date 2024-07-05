const person = {
  name: "ali",
  family: "mohammadi kia",
};
// console.log(person);

// JSON.stringify => convert to JSON
const personJson = JSON.stringify(person);
// console.log(personJson);

// ---------- separator ---------- //

const basket = ["chips", "berger", "nutella"];
// console.log(basket);
// console.log(JSON.stringify(basket));

// ---------- separator ---------- //

const apiToGet =
  '{"ticker":{"base":"BTC","target":"USD","price":"70000.58063610","volume":"97811.05442583","change":"-202.19261818"},"timestamp":1621704005,"success":true,"error":""}';

// console.log(apiToGet.ticker.price); // ❌

// 1. json => convert to javascript
const data = JSON.parse(apiToGet);
// console.log(data);
// console.log(data.ticker.price);

// ---------- separator ---------- //

const apiBasket = '["nutella", "chips"]';
// console.log(apiBasket);

// console.log(apiBasket[1]);
// console.log(JSON.parse(apiBasket)[1]);
