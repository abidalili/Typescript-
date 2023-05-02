class User {
  private _courseCount = 1;
  readonly city: string = "korso";

  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}

  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNumber) {
    if (courseNumber <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNumber;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {}
}
const abida = new User("h@h.com", "abida", "23");
