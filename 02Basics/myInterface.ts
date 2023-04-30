interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  gooogleId?: string;
  // startTrail: () => string;// this is a way of method
  startTrail(): string; // this is another way to write method
  getCoupon(couponName: string, value: number): number;
}

interface User {
  gitHubToken: string;
}
//extending interface

interface Admin extends User {
  role: "admin" | "TA" | "learner";
}

const Abida: Admin = {
  dbId: 222,
  role: "admin",
  email: "h@h.com",
  gitHubToken: "github",
  userId: 2112,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "abida", off: 98) => {
    return 10;
  },
};
Abida.email = "hollo@h.com";
//bt if we want to change the dbid its not possible cz its just readonly
//like this Abida.dbId =777; is not possible
