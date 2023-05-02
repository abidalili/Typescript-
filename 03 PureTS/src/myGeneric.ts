const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}
function identityTwo(val: any): any {
  return val;
}
function identityThree<Type>(val: Type): Type {
  return val;
}
// identityThree(3);

//shortcut
function identityFour<T>(val: T): T {
  return val;
}
identityFour("hello");
interface Bootle {
  brand: string;

  type: number;
}
// identityFour<Bootle>({});

function getSearchProducts<T>(products: T[]): T {
  //do some database operation
  const myIndex = 3;
  return products[myIndex];
}
//arrow function
const getSearchProducts2 = <T>(products: T[]): T => {
  const myIndex = 4;
  return products[myIndex];
};
interface Database {
  connection: string;
  userName: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
// anotherFunction("2", {});
interface Quiz {
  name: string;
  type: string;
}
interface Course {
  name: string;
  author: string;
  subject: string;
}

class sellable<T> {
  public cart: T[] = [];
  addToCart(products: T) {
    this.cart.push(products);
  }
}
