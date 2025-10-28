// forEach method
const nums: number[] = [10, 20, 30, 40, 50];

nums.forEach((n: number, index: number) => {
    console.log(`Index ${index}: value ${n}`);
})


// sum nums
let sum: number = 0;


nums.forEach((num: number) => {
    sum += num
});

console.log("sum of nums", sum);


interface User {
    id: number;
    name: string;
    isActive: boolean
}

const users: User[] = [
    {id: 1, name: "Ana", isActive: false},
    {id: 2, name: "Bobi", isActive: true},
    {id: 3, name: "Petar", isActive: true},
    {id: 4, name: "Mladen", isActive: false},
];

let activeIds: number[] = [];

users.forEach((user: User) => {
    if(user.isActive){
        activeIds.push(user.id)
    }
})

console.log("activeIds", activeIds);
