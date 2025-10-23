// Interface declaration

interface Car {
    type: string;
    model: string;
    color: string;
    horsePower: number;
}

// Object declaration

const car: Car = {
    type: "BMW",
    model: "435",
    color: "Black",
    horsePower: 400
}

console.log(car);

interface Person {
    name: string,
    lastName: string,
    address: string,
    age: number,
    hobbies: string[],
    //function must return string
    greeting: () => string;
}

// object with method and array value

const person: Person = {
    name: "Svet",
    lastName: "Stoyanov",
    address: "ul.Nezavisimost 3",
    age: 30,
    hobbies: ["Watching football", "crossfit", "fitness", "hiking"],
    greeting: function () {
        return "Hello! My name is Svet"
    },
};

// properties access
person.name;
person.age;
person["address"];
person.greeting();
person["greeting"]();

// properties redeclaration;

person.age = 35;
console.log(person);

//let vs const redeclaration

let dog = {name: "Spark"};
dog.name = "Bobb";
dog = {name: "Nik"};

const cat = { name: "Lusi"};
cat.name = "Kitty";
// cat = {name: "Tom"}

// explicit object type
const mouse: {name: string, favFood: string, age: number, city: string} = {
    name: "Jerry",
    favFood: "cheese",
    age: 2,
    city: "Washington DC"
}

// Interfaces - optional parameteres, read only and string literals

interface User {
    name: string;
    // value cannot be reasigned
    readonly email: string;
    //string literals
    role: "user" | "admin" | "superadmin" | "superuser";
    // optional parameter
    job?:string;
    password?: string | number;
    location?: string;
}
const user: User = {
    name: "Tom",
    email: "tom@mail.com",
    role: "admin",
    location: "Bulgaria",
    job: "QA",
};
// optional parameter added later
user.password = 5312143;
console.log(user);

const secondUser:User = {
    name: "Jerry",
    email: "jerrymail.com",
    role: "superuser",
}

interface UserPermissions extends User {
    permissions: string;
}

const thirdUser: UserPermissions = {
    name: "Tom",
    email: "tom@mail.com",
    role: "superuser",
    job: "QA",
    permissions: "denied"
}