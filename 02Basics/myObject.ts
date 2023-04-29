// const User = {
//   name: "abida",
//   email: "abida@gmail.com",
//   isActive: true,
// };
// function createUser({ name: string, isPaid: boolean }) {}
// let newUser = { name: "abida", isPaid: false, email: "lili@h.com" };
// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "react", price: 123 };
// }
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }
// createUser({ name: "", email: "", isActive: true });
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "one",
  name: "lili",
  email: "lili@l.com",
  isActive: true,
};
myUser.email = "hello@gmail.com";
export {};
