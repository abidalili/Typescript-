// const user: (string | number)[]= [1,'hc'];

let tUser: [string, number, boolean];
tUser = ["hc", 123, true]; //we cant write array without order tupols make sure so

let rgb: [number, number, number] = [255, 344, 566];

type User = [number, string];
const newUser: User = [112, "example.com"];

//bt if i want i can just overwrite the value
//like newUser[1]='hello.com'
//newUser.push(true);

export {};
