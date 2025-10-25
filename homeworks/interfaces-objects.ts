interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number
}

interface PersonInfo extends Person {
    country?: string;
    greeting?: () => string;
}

const person: Person = {
    name: "Alex",
    lastName: "Nikolov",
    age: 22,
    email: "alex@mail.com",
    phoneNumber: 359888355355
}

const person2: PersonInfo = {
    name: "Simeon",
    lastName: "Nikolov",
    age: 18,
    email: "moni@mail.com",
    phoneNumber: 35888355354,
    country: "Bulgaria",
    greeting: function () {
        return "Hello! I'am Moni Nikolov"
    }
}
