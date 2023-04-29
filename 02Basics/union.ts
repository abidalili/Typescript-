// it helps to situation where you dont know wht type of data is coming
//union is combination of two or more type of data that you could include
//into a variable or array or whatever. it will help you to avoid any on ur code
let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};
//if variable is admin
let Abida: User | Admin = { userName: "abida", id: 123 };
//in case of user if variable is user
Abida = { name: "abida", id: 123 };

// function getDbId(id: number | string) {
//   //making API calls
//   console.log(` DB id is ${id}`);
//}
getDbId(3);
getDbId("hello");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toUpperCase();
  }
  id = id;
}

//arrays

const data: number[] = [1, 2, 3, 4, 5];
const data2: string[] = ["1", "2", "3", "4", "5"];

//in array there can not be mix and match, if
// i use union the the array should weather be string or a number
// bt cant mix and match in same array like this..... it will be wrong
//const data3: string[] | number[] = [1, 2, 3, 4, "5"];
// it should be
// const data3: string[] | number[] = [1, 2, 3, 4, 5];
// or const data3: string[] | number[] = ["1", "2", "3", "4", "5"];
//to get both type in array together we can write code like this=
// const data3: (string | number)[] = ["1", "2", "3", "4", "5"];

const data3: (string | number | boolean)[] = ["1", "2", "3", "4", 5, true];

// if you want to give strict value to something then
// let pi:3.14=3.14
// after that you cant change the value of pi or whatever the variable is

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
