class User {
  email: string;
  name: string;
  city: string = "";

  constructor(email: string, name: string, city: string) {
    this.email = email;
    this.name = name;
    this.city = city;
  }
}

const abida = new User("h@h.com", "abida", "korso");
abida;
