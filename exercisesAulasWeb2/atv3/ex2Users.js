class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printName() {
    console.log(this.name);
  }
  printAge() {
    console.log(this.age);
  }
  static printName(user) {
    console.log(`User's name is ${user}`);
  }
  static printAge(age) {
    console.log(`User's age is ${age}`);
  }
}

export default User;
