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
identityFour<Bootle>({});
