function addTwo(num: number): number {
  return num + 2;
}
addTwo(5); //7
// for the arrow function
const getHello = (str: string): string => {
  return "hello";
};

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("hello");

var logInUser = function (
  name: string,
  email: string,
  isPaid: boolean = false
) {};

logInUser("abida", "lili@gmail.com", false);
//how to set default value
logInUser(
  "abida",
  "lili@gmail.com" //so now as a boolean value i dont need to assign any value cz its by default false written on function parameter
);

function singUpUser(
  name: string,
  email: string,
  password: number,
  isPaid: boolean
) {}
singUpUser("abida", "abida@gmail.com", 2223, true);

function getValue(myVal: number) {
  if (myVal > 5) {
    return true;
  }
  return "200 ok";
}
//array
const heros = ["thor", "spiderman", "ironman"];
heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}
export {};
