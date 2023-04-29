const superHeros: string[] = [];
// const heroPower: number[] = [];

const heroPower: Array<number> = []; //different way of writting type in typescript

type User = {
  name: string;
  isActive: boolean;
};
//array of array (nested arrays type declaration)
const MLModels: number[][] = [
  [255, 255, 255], //there can not be an string or any other type cz its number type
];
const allUsers: User[] = [];
superHeros.push("spiderman");
heroPower.push(2);

allUsers.push({ name: "", isActive: true });
