let greetings: string = "hello abida";

greetings.toUpperCase();
console.log(greetings);
// number
let userId: number = 334455.6;
//best practice
let userId2 = 334455;
userId2.toFixed();
//boolean
let isLoggedIn: boolean = false;
//isLoggedIn.
export {};

//any
let hero;
function getHero() {
  return "thor";
}
hero = getHero();
//should write like this
let hero2: string;
function getHero2() {
  return "thor";
}
hero = getHero();
