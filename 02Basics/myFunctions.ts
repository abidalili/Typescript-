function addTwo(num: number) {
  return num + 2;
}
addTwo(5); //7

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
export {};
