// User.ts
// Simple TypeScript class example

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getUserInfo(): string {
    return `User ${this.name} is ${this.age} years old.`;
  }
}

// Usage example
const user1 = new User("Alice", 30);
console.log(user1.getUserInfo());
